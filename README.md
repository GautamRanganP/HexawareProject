# Prerequisite

    1. Node version: node 10+
    2. Code Repository

# 0. Run npm install to install dependecies in fe directory

    `fe:\ $ npm i `

# 1. Frontend Development

    `fe:\ $ npm start`

    `Localhost is served at http://localhost:3034/`
 
# 3. Test

    `fe:\ $ npm run test`

    Test Specific (Regex) `fe:\ $ npm run test -- <REGEX/NAME>`

# 4. Coverage

    `fe:\ $ npm run coverage`

    Test Specific (Regex) `fe:\ $ npm run coverage -- <REGEX/NAME>`

# 5. Lint

    `fe:\ $ npm run lint`

# 6. Components

    `Path: Code Repository/FE/components/<ComponentName>`

        `Each components folder consist of following`

        `1. index.js - React code`  
        `2. styles - Separate css files added for mobile (default.css) and desktop (desktop.css)` 
        `3. test - Contains the JEST test file` 
        `4. data - Should keep all the JSON & Variation used for Local Development`

# 7. Styles

    `Component level styles to be kept in Code Repository/FE/components/<ComponentName>/styles`

    `Global styles to be kept in Code Repository/FE/themes/styles/global`

    `Configuration (Variables, Mixins, etc.) are available in Code Repository/FE/themes/styles/config`