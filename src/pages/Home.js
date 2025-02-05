import Loading from '../components/loading.js';

export default {
    components: { Loading },
    template: `
        <main v-if="loading">
            <Loading/>
        </main>
        <main v-else class="home-page">
            <div class="">
                <h1></h1>
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