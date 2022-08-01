const eventListeners = {};

Object.defineProperty(window, 'location', {
    writable: true,
    value: { assign: jest.fn() }
});

Object.defineProperty(window.location, 'reload', {
    writable: true,
    value: { assign: jest.fn() }
});

Object.defineProperty(window.location, 'hash', {
    set( val ) {
        this.hashVal = val;

        if ( eventListeners.hashchange ) {

            eventListeners.hashchange();
        }
    },
    get() {
        return this.hashVal || ''
    },
    enumerable: true,
    configurable: true
});
/**
 * Mock Implementations
 */
module.exports = function polyfill() {

    window.location.reload = jest.fn();

    window.open = jest.fn();
    window.print = jest.fn();
    window.scroll = jest.fn();

    window.pageXOffset = 0;
    window.pageYOffset = 0;

    window.scrollTo = undefined; // Do not delete this line. This is needed for scroll to function to be formed properly in Jenkins
    window.scrollTo = jest.fn((xOffset, yOffset) => {
        window.pageXOffset = xOffset;
        window.pageYOffset = yOffset;
    });

    window.addEventListener = (type, callback) => {
        eventListeners[type] = callback;
    };

    window.removeEventListener = (type) => {
        delete eventListeners[type];
    };

    window.ORDREConfigs = {};

    /**
     * [MOCK] window.matchMedia
     */
    global.matchMedia = jest.fn().mockImplementation(() => ({
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn()
    }));

    global.requestAnimationFrame = (callback) => callback();
    window.requestAnimationFrame = global.requestAnimationFrame;
};
