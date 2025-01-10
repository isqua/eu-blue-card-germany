import { describe, expect, it } from 'vitest';
import { calculateEndDate } from './timeframes';

function checkDate(actual: Date, expected: Date) {
    expect(actual.toLocaleDateString()).toEqual(expected.toLocaleDateString());
}

describe('calculateEndDate', () => {
    it('should return current month end for the start of the month and 1 month', () => {
        const startDate = new Date('2001-01-01');
        const endDate = calculateEndDate(startDate, 1);

        checkDate(endDate, new Date('2001-01-31'));
    });

    it('should return next month end for the middle date of the month and 1 month', () => {
        const startDate = new Date('2001-01-15');
        const endDate = calculateEndDate(startDate, 1);

        checkDate(endDate, new Date('2001-02-28'));
    });

    it('should return current month end for the start of the month and 18 month', () => {
        const startDate = new Date('2001-01-01');
        const endDate = calculateEndDate(startDate, 18);

        checkDate(endDate, new Date('2002-06-30'));
    });
});
