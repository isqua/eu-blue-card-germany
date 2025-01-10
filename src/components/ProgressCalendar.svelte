<script lang="ts">
    import MonthProgress from './MonthProgress.svelte';
    import type { ProgressItem } from '../lib/progress';

    interface Props {
        items: ProgressItem[];
    }

    const { items }: Props = $props();
</script>

<ul class="list">
    {#each items as item}
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
