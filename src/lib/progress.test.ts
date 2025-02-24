import { describe, expect, it } from 'vitest';
import { calculateMonthsProgress, type ProgressItem } from './progress';

describe('calculateMonthsProgress', () => {
    it('should return empty array if start date is after end date', () => {
        const startDate = new Date('2001-01-01');
        const endDate = new Date('2000-01-01');
        const today = new Date('1970-01-01');
        const progress = calculateMonthsProgress(startDate, endDate, today);

        expect(progress).toHaveLength(0);
    });

    it('should return one month if start and end date are in the same month', () => {
        const startDate = new Date('2001-01-01');
        const endDate = new Date('2001-01-31');
        const today = new Date('1970-01-01');
        const progress = calculateMonthsProgress(startDate, endDate, today);

        expect(progress).toEqual<ProgressItem[]>([
            {
                year: 2001,
                month: 0,
                value: 0,
                max: 31,
            },
        ]);
    });

    it('should return full months if start and end date are in the middle of months', () => {
        const startDate = new Date('2001-01-10');
        const endDate = new Date('2001-03-19');
        const today = new Date('2001-02-12');
        const progress = calculateMonthsProgress(startDate, endDate, today);

        expect(progress).toEqual<ProgressItem[]>([
            {
                year: 2001,
                month: 0,
                value: 31,
                max: 31,
            },
            {
                year: 2001,
                month: 1,
                value: 12,
                max: 28,
            },
            {
                year: 2001,
                month: 2,
                value: 0,
                max: 31,
            },
        ]);
    });

    it('should mark the past month of the same year as full', () => {
        const startDate = new Date('2001-01-01');
        const endDate = new Date('2001-01-31');
        const today = new Date('2001-10-01');
        const progress = calculateMonthsProgress(startDate, endDate, today);

        expect(progress).toEqual<ProgressItem[]>([
            {
                year: 2001,
                month: 0,
                value: 31,
                max: 31,
            },
        ]);
    });

    it('should mark the next month of the same year as empty', () => {
        const startDate = new Date('2001-02-01');
        const endDate = new Date('2001-02-28');
        const today = new Date('2001-01-01');
        const progress = calculateMonthsProgress(startDate, endDate, today);

        expect(progress).toEqual<ProgressItem[]>([
            {
                year: 2001,
                month: 1,
                value: 0,
                max: 28,
            },
        ]);
    });

    it('should mark the same month of the previous year as full', () => {
        const startDate = new Date('2001-01-01');
        const endDate = new Date('2001-01-31');
        const today = new Date('2002-01-01');
        const progress = calculateMonthsProgress(startDate, endDate, today);

        expect(progress).toEqual<ProgressItem[]>([
            {
                year: 2001,
                month: 0,
                value: 31,
                max: 31,
            },
        ]);
    });

    it('should mark the same month of the next year as empty', () => {
        const startDate = new Date('2001-01-01');
        const endDate = new Date('2001-01-31');
        const today = new Date('2000-01-01');
        const progress = calculateMonthsProgress(startDate, endDate, today);

        expect(progress).toEqual<ProgressItem[]>([
            {
                year: 2001,
                month: 0,
                value: 0,
                max: 31,
            },
        ]);
    });

    it('should mark the previous month of the next year as empty', () => {
        const startDate = new Date('2001-01-01');
        const endDate = new Date('2001-01-31');
        const today = new Date('2000-02-01');
        const progress = calculateMonthsProgress(startDate, endDate, today);

        expect(progress).toEqual<ProgressItem[]>([
            {
                year: 2001,
                month: 0,
                value: 0,
                max: 31,
            },
        ]);
    });
});
