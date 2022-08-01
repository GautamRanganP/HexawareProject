/*eslint-env node */

const DEFAULT_PORT = 3034;
const PORT = process.env.PORT || DEFAULT_PORT;

const express = require('express');
const babel = require('@babel/core');
const engines = require('consolidate');
const ejs = require('ejs');
const webpack = require('webpack');
const wpMiddleware = require('webpack-dev-middleware');
const wpHotMiddleware = require('webpack-hot-middleware');
const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs-extra');
const mkdirp = require('mkdirp');
const clearModule = require('clear-module');

const http = require('http');
const debug = require('debug')('app');
const HttpStatus = require('http-status-codes');

const wpConfig = require('./webpack.config');

const app = express();
const wpCompiler = webpack(wpConfig);

app.use(
    wpMiddleware(wpCompiler, {
        serverSideRender: true,
        noInfo: true,
        stats: {
            assets: false
        }
    })
);

app.use(wpHotMiddleware(wpCompiler));

app.use(express.static(path.resolve(__dirname, 'dist', 'static')));

const pagesLocation = path.resolve('pages');

const renderPartial = path.resolve(__dirname, 'pages', 'partials', 'render.ejs');

const pages = fs.readdirSync(pagesLocation).reduce((m, file) => {
    if (
        !fs.lstatSync(`${pagesLocation}${path.sep}${file}`).isDirectory() &&
        /\.ejs$/.test(file)
    ) {
        m.push(file);
    }

    return m;
}, []);

engines.requires.ejs = ejs;

// setup templates
app.engine('ejs', engines.ejs);

app.set('view engine', 'ejs');

app.set('views', path.resolve(__dirname, 'pages'));

app.get('/mocks/appointmentList.json/:id', (req, res) => {

    const filepath = path.resolve(__dirname, 'static', 'mocks', 'appointmentList.json');

    res.sendFile( filepath );
});

// Helper method to render component in ejs templates
app.locals.renderComponent = ( component, dataId = 'index', bottomSpace = '' ) => {

    try {

        const template = ejs.compile(fs.readFileSync(renderPartial, 'utf8'));

        const fileContext = fs.readFileSync(path.resolve( 'components', component, 'data', `${dataId}.json`));

        const json = JSON.parse( fileContext );

        const templateData = {
            component,
            className: component.toLowerCase(),
            instance: json.instance,
            json,
            bottomSpace
        };

        return template( templateData );
    }

    catch (e) {

        return `Component: ${ component } not found or there is a compilation error`;
    }
}

app.get('/pages/:pageName', (req, res) => {

    let { pageName } = req.params;

    try {

        res.render(pageName);
    } catch (e) {

        res.status(HttpStatus.NOT_FOUND).end();

        debug(`${HttpStatus.NOT_FOUND} /pages/${pageName}`, e);
    }

    debug(`${HttpStatus.OK} /pages/${pageName}`);
});

app.get('/', (req, res) => {

    const indexList = pages.map(file => {

        const fileName = file.split('.ejs')[0];

        return [
            fileName,
            fileName
                .split(/[\s_\b]|(?=[A-Z])/)
                .join(' ')
                .toUpperCase()
        ];
    });

    res.render('templates/index', {
        indexList
    });
});


/* Mock services from local */
app.use('/mocks/*', ( req, res, next ) => {

    const filePath = path.resolve(__dirname, 'static', 'mocks', req.params[0]);

    if (fs.existsSync( filePath )) {

        res.sendFile( filePath );
    }

    else {

        res.status(404);

        res.type('txt').send(`[error] ${req.method} ${req.url}`);
    }
});

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server is running at port ${ PORT }`));

// Develop watch
chokidar
    .watch(['components/**/*.js', 'library/js/**/*.js'], {
        ignored: [
            'components/**/test',
            'library/js/vendor/**'
        ]
    })
    .on('all', (event, filePath) => {
        const code = babel.transformFileSync(filePath).code;
        const outputPath = path.resolve(__dirname, 'dist', filePath);

        mkdirp.sync(path.dirname(outputPath));

        fs.writeFile(outputPath, code, err => {
            if (err) throw err;
            clearModule(outputPath.replace(/\.js$/, ''));
        });
    });

// copy json and css to output
chokidar
    .watch(['components/**/*.json', 'components/**/styles', 'static'])
    .on('all', (event, filePath) => {
        const outputPath = path.resolve(__dirname, 'dist', filePath);

        mkdirp.sync(path.dirname(outputPath));

        fs.copySync(filePath, outputPath);

        if (!/\.css$/.test(filePath)) {
            clearModule(outputPath.replace(/\.json$/, ''));
        }
    });
