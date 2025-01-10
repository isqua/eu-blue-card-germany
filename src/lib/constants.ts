export const CITIZENSHIP_MONTHS = 36;

export const PERMANENT_RESIDENCE_A1 = 27;
export const PERMANENT_RESIDENCE_B1 = 21;
export const TIME_TO_GET_LANG_CERTIFICATE = 1;
export const TIME_TO_GET_EINBURGERUNG_CERTIFICATE = 2;
export const TIME_TO_GET_EINBURGERUNG_TERMIN = 3;
export const PROBATION_PERIOD = 6;

export const Notes: Map<number, string> = new Map([
    [CITIZENSHIP_MONTHS, 'Apply for a citizenship'],
    [
        CITIZENSHIP_MONTHS - TIME_TO_GET_EINBURGERUNG_CERTIFICATE,
        'Pass Einbürgerungstest',
    ],
    [
        CITIZENSHIP_MONTHS -
            TIME_TO_GET_EINBURGERUNG_CERTIFICATE -
            TIME_TO_GET_EINBURGERUNG_TERMIN,
        'Register for Einbürgerungstest',
    ],
    [PERMANENT_RESIDENCE_A1, 'Apply for a permanent residence if you have A1'],
    [PERMANENT_RESIDENCE_A1 - TIME_TO_GET_LANG_CERTIFICATE, 'Pass A1 exam'],
    [
        PERMANENT_RESIDENCE_A1 - PROBATION_PERIOD,
        'Avoid changing job since this month to apply for a permanent residence on time',
    ],
    [PERMANENT_RESIDENCE_B1, 'Apply for a permanent residence if you have B1'],
    [PERMANENT_RESIDENCE_B1 - TIME_TO_GET_LANG_CERTIFICATE, 'Pass B1 exam'],
    [
        PERMANENT_RESIDENCE_B1 - PROBATION_PERIOD,
        'Avoid changing job since this month to apply for a permanent residence on time',
    ],
]);
