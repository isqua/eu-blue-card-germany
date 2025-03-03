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
    const citizenshipDate = $derived(
        calculateEndDate(startDate, CITIZENSHIP_MONTHS + 1)
    );
    const progressItems = $derived(
        calculateMonthsProgress(startDate, citizenshipDate, today)
    );
    const notes: string[] = $derived(generateNotes(startDate));
</script>

<ul class="list">
    {#each progressItems as item, index}
        {@const note = notes[index]}
        <li class="item" class:with-note={Boolean(note)}>
            <MonthProgress {item} />
            {#if note}
                <div class="note">
                    {note}
                </div>
            {/if}
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
        padding: 0;
        margin: 0 0 4px;
        box-sizing: border-box;
        border-radius: 8px;
        break-inside: avoid;
    }

    .item.with-note {
        border: 1px solid var(--muted-background-color);
        border-top-width: 0px;
    }

    .note {
        line-height: 20px;
        padding: 0px 8px;
    }

    @media (min-width: 720px) {
        .list {
            columns: auto 20rem;
            column-gap: 10px;
        }

        .note {
            line-height: 28px;
            margin-top: -1px;
        }
    }
</style>
