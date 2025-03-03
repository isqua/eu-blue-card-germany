<script lang="ts">
    import DateForm from './components/DateForm.svelte';
    import Header from './components/Header.svelte';
    import ProgressCalendar from './components/ProgressCalendar.svelte';

    const today = new Date();
    const initialDate = today;

    let selectedYear = $state(initialDate.getFullYear());
    let selectedMonth = $state(initialDate.getMonth());
    const startDate = $derived(new Date(selectedYear, selectedMonth, 1));
</script>

<main>
    <Header />
    <DateForm
        bind:selectedYear
        bind:selectedMonth
        lastAvailableYear={today.getFullYear()}
    />
    <ProgressCalendar {startDate} {today} />
</main>

<style>
    main {
        margin: 0 auto;
        padding: 2rem;
    }
</style>
