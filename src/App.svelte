<script lang="ts">
    import DateForm from './components/DateForm.svelte';
    import Footer from './components/Footer.svelte';
    import Header from './components/Header.svelte';
    import ProgressCalendar from './components/ProgressCalendar.svelte';
    import Sources from './components/Sources.svelte';
    import { StorageKeys } from './lib/constants';
    import { deserializeDate, serializeDate } from './lib/storage';

    function getInitialDate() {
        const storedDate = localStorage.getItem(StorageKeys.arrivalDate);
        return deserializeDate(storedDate) ?? new Date();
    }

    const today = new Date();
    const initialDate = getInitialDate();

    let selectedYear = $state(initialDate.getFullYear());
    let selectedMonth = $state(initialDate.getMonth());
    const startDate = $derived(new Date(selectedYear, selectedMonth, 1));

    $effect(() => {
        localStorage.setItem(StorageKeys.arrivalDate, serializeDate(startDate));
    });
</script>

<main>
    <Header />
    <DateForm
        bind:selectedYear
        bind:selectedMonth
        lastAvailableYear={today.getFullYear()}
    />
    <ProgressCalendar {startDate} {today} />
    <Sources />
    <Footer />
</main>

<style>
    main {
        margin: 0 auto;
        padding: 2rem;
    }
</style>
