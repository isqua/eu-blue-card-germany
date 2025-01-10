<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        value?: number;
        max?: number;
        children?: Snippet;
    }

    const { value = 0, max = 30, children }: Props = $props();
    const percentage = Math.round((value / max) * 100);
</script>

<div class="progress-container">
    <div class="progress-bar" style="width: {percentage}%"></div>
    <span class="progress-label">
        {@render children?.()}
    </span>
</div>

<style>
    .progress-container {
        width: 100%;
        background-color: var(--muted-background-color);
        border-radius: 6px;
        line-height: 24px;
        overflow: hidden;
        position: relative;
    }

    .progress-bar {
        background-color: #0ab40a;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 0;
    }

    .progress-label {
        color: var(--text-color);
        font-weight: bold;
        padding: 0 8px;
        z-index: 1;
        position: relative;
    }
</style>
