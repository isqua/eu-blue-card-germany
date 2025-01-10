<script lang="ts">
    import ProgressCalendar from './components/ProgressCalendar.svelte';
    import { calculateMonthsProgress } from './lib/progress';
    import { calculateEndDate } from './lib/timeframes';

    function getStartDate() {
        const params = new URLSearchParams(window.location.search);

        try {
            const start = new Date(params.get('start') ?? '');

            if (!isNaN(start.getTime())) {
                return start;
            }

            return new Date();
        } catch (e) {
            return new Date();
        }
    }

    const startDate = getStartDate();
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
