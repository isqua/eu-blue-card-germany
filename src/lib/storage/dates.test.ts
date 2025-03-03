import { describe, it, expect } from 'vitest';
import { deserializeDate, serializeDate } from './dates';

describe('deserializeDate', () => {
    it('should return undefined for null input', () => {
        expect(deserializeDate(null)).toBeUndefined();
    });

    it('should return undefined for undefined input', () => {
        expect(deserializeDate(undefined)).toBeUndefined();
    });

    it('should return undefined for invalid date string', () => {
        expect(deserializeDate('invalid-date')).toBeUndefined();
    });

    it('should correctly deserialize a valid date string', () => {
        const result = deserializeDate('2025-03-01');
        expect(result).toBeInstanceOf(Date);
        expect(result?.getUTCFullYear()).toBe(2025);
        expect(result?.getUTCMonth()).toBe(2);
        expect(result?.getUTCDate()).toBe(1);
    });
});

describe('serializeDate', () => {
    it('should correctly serialize date for the start of a month', () => {
        expect(serializeDate(new Date(2025, 2))).toBe('2025-03-01');
    });

    it('should correctly serialize January', () => {
        expect(serializeDate(new Date(2025, 0))).toBe('2025-01-01');
    });

    it('should correctly serialize December', () => {
        expect(serializeDate(new Date(2025, 11))).toBe('2025-12-01');
    });

    it('should correctly serialize current date in Bangalore', () => {
        expect(serializeDate(new Date('2025-03-01T12:02:00+05:30'))).toBe(
            '2025-03-01'
        );
    });

    it('should correctly serialize current date in Buenos Aires', () => {
        expect(serializeDate(new Date('2025-03-01T12:02:00-03:00'))).toBe(
            '2025-03-01'
        );
    });
});
