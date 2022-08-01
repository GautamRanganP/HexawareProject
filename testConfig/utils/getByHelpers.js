/**
 * Helper Functions for React-Enzyme
 * Inspired by <https://github.com/kentcdodds/dom-testing-library>
 */


/**
 * Get Element from Enzyme Wrapper by its custom data-attribute "data-testid"
 * @param {ReactWrapper} wrapper - Enzyme Element
 * @param {string} testId - Test-id value -> eg: data-testid="something"
 *
 * @returns {ReactWrapper[]} Enzyme Element
 */
export const getByTestId = (wrapper, testId) => {
    if (!wrapper) return null;

    const elements = wrapper.find(`[data-testid="${testId}"]`);

    return elements;
};


/**
 * Get Elements from Enzyme Wrapper by the given HTML Attribute and Value
 * @param {ReactWrapper} wrapper - Enzyme Element
 * @param {string} attr - HTML attribute, eg: name, value, id
 * @param {string} value - HTML attribute value -> eg: name="something"
 *
 * @returns {ReactWrapper[]} Enzyme Element
 */
export const getByAttr = (wrapper, attr, value) => {
    if (!wrapper) return null;

    const elements = wrapper.find(`[${attr}="${value}"]`);

    return elements;
};

