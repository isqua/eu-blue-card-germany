<script lang="ts">
    import { CITIZENSHIP_MONTHS } from '../lib/constants';
    import { generateNotes } from '../lib/notes';
    import { calculateMonthsProgress } from '../lib/progress';
    import { calculateEndDate } from '../lib/timeframes';
    import MonthProgress from './MonthProgress.svelte';

    interface Props {
        startDate: Date;
        today: Date;
    }

    const { startDate, today }: Props = $props();
    const citizenshipDate = calculateEndDate(startDate, CITIZENSHIP_MONTHS + 1);
    const progressItems = calculateMonthsProgress(
        startDate,
        citizenshipDate,
        today
    );
    const notes: string[] = generateNotes(startDate);
</script>

<ul class="list">
    {#each progressItems as item, index}
        {@const note = notes[index]}
        <li class="item" class:with-note={Boolean(note)}>
            <MonthProgress {item} />
            <div class="note">
                {note}
            </div>
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
        margin: 5px;
    }

    .item.with-note {
        margin: 5px 0;
        padding: 5px;
        border: 1px solid var(--muted-background-color);
        border-radius: 10px;
    }
</style>
