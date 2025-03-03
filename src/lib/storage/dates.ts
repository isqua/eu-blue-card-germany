export function deserializeDate(value?: string | null): Date | undefined {
    if (value) {
        const date = new Date(value);
        if (!isNaN(date.getTime())) {
            return new Date(
                Date.UTC(
                    date.getUTCFullYear(),
                    date.getUTCMonth(),
                    date.getUTCDate()
                )
            );
        }
    }

    return undefined;
}

export function serializeDate(date: Date): string {
    const firstDayOfMonth = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );

    return firstDayOfMonth.toISOString().split('T')[0];
}
