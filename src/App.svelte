<script lang="ts">
    import ProgressCalendar from './components/ProgressCalendar.svelte';

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
    const today = new Date();
</script>

<main>
    <ProgressCalendar {startDate} {today} />
</main>

<style>
    main {
        margin: 0 auto;
        padding: 2rem;
    }
</style>
