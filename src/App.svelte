<script lang="ts">
    import ProgressCalendar from './components/ProgressCalendar.svelte';
    import { calculateMonthsProgress } from './lib/progress';
    import { calculateEndDate } from './lib/timeframes';

    const startDate = new Date('2024-10-01');
    const endDate = calculateEndDate(startDate, 21);
    const progressItems = calculateMonthsProgress(
        startDate,
        endDate,
        new Date()
    );
</script>

<main>
    <ProgressCalendar items={progressItems} />
</main>

<style>
    main {
        max-width: 40rem;
        margin: 0 auto;
        padding: 2rem;
    }
</style>
