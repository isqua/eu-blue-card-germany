import { Notes } from './constants';

export function generateNotes(startDate: Date) {
    const shift = startDate.getDate() === 1 ? 0 : 1;
    const notes: string[] = new Array().fill('');

    for (const [month, note] of Notes) {
        notes[month + shift] = note;
    }

    return notes;
}
