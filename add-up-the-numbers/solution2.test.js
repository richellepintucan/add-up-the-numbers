'use strict';

import { addUp } from './solution2.js';

// Test cases
describe('addUp function', () => {
    test('returns the correct sum for n = 4', () => {
        expect(addUp(4)).toBe(10);
    });

    test('returns the correct sum for n = 13', () => {
        expect(addUp(13)).toBe(91);
    });

    test('returns the correct sum for n = 600', () => {
        expect(addUp(600)).toBe(180300);
    });
});
