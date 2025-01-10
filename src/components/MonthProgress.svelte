<script lang="ts">
    import type { ProgressItem } from '../lib/progress';

    import ProgressBar from './ProgressBar.svelte';

    interface Props {
        item: ProgressItem;
    }

    const { item }: Props = $props();
    const name = new Date(item.year, item.month, 1).toLocaleString('default', {
        month: 'long',
    });
</script>

<ProgressBar max={item.max} value={item.value}>{item.year} {name}</ProgressBar>
