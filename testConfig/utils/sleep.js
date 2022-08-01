/**
 * Utility function for test files,
 * Wait for Async code to resolve before running the assertion/expect()
 * @param {Number} [time=0] - wait time in miliseconds
 *
 * Usage example:
 *
 * import sleep from 'utils/sleep';
 *
 * test('component', async () => {
 *    const result = someAsyncMethod();
 *
 *    await sleep(500);
 *    expect(result.length).toBeTruthy();
 * })
 */

export default function sleep(time = 0) {

    // Wait until the next tick of the event-loop before is resolved
    return new Promise(resolve => setTimeout(resolve, time));
}
