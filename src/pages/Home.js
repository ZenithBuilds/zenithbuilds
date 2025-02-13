import Loading from '../components/loading.js';

export default {
    components: { Loading },
    template: `
        <main v-if="loading">
            <Loading/>
        </main>
        <main v-else class="home-page">
            <div class="whyprebuilt-container">
                <h1 class="home-title">Why pre-built?</h1>
                <p class="type-label-desc" class="italic" id="whyprebuiltdesc">Building a computer is a whole hobby on it's own, and<br>you always have the risk of breaking something.<br>Buying from Zenith Builds you also get support, warranty,<br>and top of the line components with the cheapest pricing.</p>
            </div>
        </main>
    `,
    data: () => ({
        loading: true,
    }),
    async mounted() {
        this.loading = false;
    },
}