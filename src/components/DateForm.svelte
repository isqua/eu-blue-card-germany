<script lang="ts">
    interface Props {
        selectedYear: number;
        selectedMonth: number;
        lastAvailableYear: number;
    }

    let {
        selectedYear = $bindable(),
        selectedMonth = $bindable(),
        lastAvailableYear,
    }: Props = $props();

    const years: number[] = [];

    for (let year = lastAvailableYear; year >= 2012; year--) {
        years.push(year);
    }

    const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) =>
        new Date(0, month).toLocaleString('default', { month: 'long' })
    );
</script>

<form>
    <p><b>What date did you start working as a Blue Card holder?</b></p>
    <label for="year">Year:</label>
    <select id="year" bind:value={selectedYear}>
        {#each years as year}
            <option value={year}>{year}</option>
        {/each}
    </select>

    <label for="month">Month:</label>
    <select id="month" bind:value={selectedMonth}>
        {#each months as month, index}
            <option value={index}>{month}</option>
        {/each}
    </select>
</form>

<style>
    p {
        margin-bottom: 0;
    }

    form {
        margin-bottom: 1rem;
    }

    label {
        margin-right: 0.5rem;
    }

    select {
        margin-right: 1rem;
    }
</style>
