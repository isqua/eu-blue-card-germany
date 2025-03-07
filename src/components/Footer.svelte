<script lang="ts">
    function getCommitDate() {
        const date = import.meta.env.VITE_BUILD_DATE ?? '';

        if (date) {
            return new Date(date).toLocaleDateString();
        }
    }

    const commitUrl = import.meta.env.VITE_COMMIT_URL ?? '#';
    const commitDate = getCommitDate();
</script>

<footer>
    <p class="copyright">
        <span>©</span>
        <a href="https://isqua.ru/en/projects" target="_blank">isqua</a>. Last
        updated
        <a href={commitUrl} target="_blank" rel="noopener noreferrer">
            {commitDate}
        </a>
    </p>
</footer>

<style>
    footer {
        color: #999;
    }

    .copyright span {
        display: inline-block;
        transition: transform 0.2s ease;
    }

    .copyright:hover span {
        transform: scaleX(-1);
        color: #d04000;
    }

    a,
    a:visited {
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid #dddddd;
    }
</style>
