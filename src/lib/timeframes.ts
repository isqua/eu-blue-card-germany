export function calculateEndDate(startDate: Date, monthsToAdd: number): Date {
    const targetYear = startDate.getFullYear();
    const correctedMonthToAdd =
        startDate.getDate() === 1 ? monthsToAdd : monthsToAdd + 1;
    const targetMonth = startDate.getMonth() + correctedMonthToAdd;
    const firstDayOfTargetMonth = new Date(targetYear, targetMonth, 1);

    const lastDayOfTargetMonth = new Date(
        firstDayOfTargetMonth.getFullYear(),
        firstDayOfTargetMonth.getMonth(),
        0
    );

    return lastDayOfTargetMonth;
}
