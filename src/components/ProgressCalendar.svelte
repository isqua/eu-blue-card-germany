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
        padding: 4px 4px 0;
        margin: 0;
        border-radius: 8px;
        break-inside: avoid;
    }

    .item.with-note {
        margin: 4px 0 0;
        outline: 1px solid var(--muted-background-color);
    }

    .note {
        line-height: 24px;
        padding: 0 4px;
    }

    @media (min-width: 720px) {
        .list {
            columns: auto 20rem;
            column-gap: 10px;
        }
    }
</style>
