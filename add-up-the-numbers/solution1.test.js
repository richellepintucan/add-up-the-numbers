'use strict';

import { addUp } from './solution1.js';

// Test cases
describe('addUp function', () => {
    test('returns the correct sum for num = 4', () => {
        expect(addUp(4)).toEqual(10);
    });

    test('returns the correct sum for num = 13', () => {
        expect(addUp(13)).toEqual(91);
    });

    test('returns the correct sum for num = 600', () => {
        expect(addUp(600)).toEqual(180300);
    });
});
