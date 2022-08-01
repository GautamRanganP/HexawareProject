'use strict';

// Determines a breakpoints max-width. Max-width is needed for Slick Carousel implementations
const viewports = {
    SVP: 768,
    LVP: 769,
    MVP: 1024
};

const matchMediaQuery = {
    SVP: `(max-width: ${ viewports.SVP  }px)`,
    LVP: `(min-width: ${ viewports.LVP  }px)`,
    MVP: `(max-width: ${ viewports.MVP  }px)`
};

/**
 * Watches for breakpoint definitions that are required to meet component viewport requirements. This method passes those values to window.matchMedia, returning a configured instance of window.matchMedia.
 * @param {string|string[]} viewportType type of viewport - i.e. 'desktop (LVP)', 'mobile (SVP)'
 * @returns {MediaQueryList} a configured instance of window.matchMedia
*/

const breakpoints = ( viewportType ) => {

    if ( typeof window !== 'undefined' && typeof window.matchMedia === 'function' ) {

        let matchMediaValue;

        if ( viewportType && viewportType.length > 3) {

            throw new Error('viewportType must only contain two values - a min and a max breakpoint definition.');
        }

        else {

            matchMediaValue = matchMediaQuery[viewportType];
        }

        try {

            if ( parent.parent.window ) {

                return parent.parent.window.matchMedia(matchMediaValue);
            }
        }

        catch ( e ) {

            return window.matchMedia(matchMediaValue);
        }
    }

    return {};
};

export default breakpoints;
