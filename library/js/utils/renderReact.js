import React from 'react';
import { render } from 'react-dom';

const componentData = window.ORDREConfigs && window.ORDREConfigs.components;

const renderedComponents = {};

const isRendered = id => (renderedComponents[id]);

const renderReact = ( Component, key ) => {

    Array.prototype.map.call( document.querySelectorAll(`[data-name="${key}"]`), el => {

        const data = componentData && componentData.filter(
            cmp => cmp.instance === el.getAttribute('data-instance')
        )[0];

        if ( data && data.properties && !isRendered(`${data.name}-${data.instance}`) ) {

            const services = data.services || {};

            render(
                <Component
                    { ...data.properties }
                    services={ services }
                />,
                el
            );

            renderedComponents[`${data.name}-${data.instance}`] = true;
        }
    });
};

export default renderReact;
