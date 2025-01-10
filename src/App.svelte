<script lang="ts">
    import ProgressCalendar from './components/ProgressCalendar.svelte';
    import { calculateMonthsProgress } from './lib/progress';

    const progressItems = calculateMonthsProgress(
        new Date('2024-10-01'),
        new Date('2026-06-30'),
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
