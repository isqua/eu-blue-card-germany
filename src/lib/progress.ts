export type ProgressItem = {
    year: number;
    month: number;
    max: number;
    value: number;
};

export function calculateMonthsProgress(
    start: Date,
    end: Date,
    today: Date
): ProgressItem[] {
    const result: ProgressItem[] = [];

    let currentDate = new Date(start);
    currentDate.setDate(1);

    while (currentDate <= end) {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let value = 0;

        if (currentDate < today) {
            value = daysInMonth;
        }

        if (
            currentDate.getFullYear() === today.getFullYear() &&
            currentDate.getMonth() === today.getMonth()
        ) {
            value = today.getDate();
        }

        result.push({
            year,
            month,
            max: daysInMonth,
            value,
        });

        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return result;
}
