<script lang="ts">
    import { calculateMonthsProgress } from '../lib/progress';
    import { calculateEndDate } from '../lib/timeframes';
    import MonthProgress from './MonthProgress.svelte';

    interface Props {
        startDate: Date;
        today: Date;
    }

    const { startDate, today }: Props = $props();
    const endDate = calculateEndDate(startDate, 21);
    const progressItems = calculateMonthsProgress(startDate, endDate, today);
</script>

<ul class="list">
    {#each progressItems as item}
        <li class="item">
            <MonthProgress {item} />
        </li>
    {/each}
</ul>

<style>
    .list {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .item {
        margin: 0 0 5px;
    }
</style>
