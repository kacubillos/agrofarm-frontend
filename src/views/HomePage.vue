<template>
    <h1>Home</h1>
    <ul>
        <li v-for="crop in crops" v-bind:key="crop.id">{{ crop }}</li>
    </ul>
</template>

<script>

export default {
    name: 'HomePage',
    data: function() {
        return {
            crops: []
        }
    },
    async created() {
        let id = sessionStorage.getItem('user_id');
        await this.axios.get('/farmers/' + id)
                .then((res) => {
                    this.crops = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
    }
}
</script>