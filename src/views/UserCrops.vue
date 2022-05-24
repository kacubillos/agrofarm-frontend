<template>
    <div class="container my-5">
        <div class="d-flex justify-content-between">
            <h2>Tus cultivos</h2>
            <router-link to="/crops/new" class="btn btn-dark">Nuevo cultivo</router-link>
        </div>
        <div class="alert alert-info text-center mt-3" v-if="voidCrops">
            <h4>No tienes cultivos aun.</h4>
            <p>Crea tu primer cultivo pulsando el boton en la parte superior derecha.</p>
        </div>
        <div class="row mt-3" v-else>
            <div v-for="crop in crops" v-bind:key="crop.key" class="col-13 col-md-6 col-lg-4 d-flex justify-content-center mt-3">
                <div class="card p-3" style="width: 18rem;">
                    <img src="../assets/logo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ crop.title }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted text-capitalize">{{ crop.crop_type }}</h6>
                        <router-link :to="{ name: 'UserCrop', params: { cropId: crop.id } }" class="btn btn-primary w-100">Ver más</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'UserCrops',
    data: function () {
        return {
            id: -1,
            crops: [],
            logged: false,
            voidCrops: true
        }
    },
    created() {
        if (sessionStorage.getItem('user_token')) {
            this.fetch();
            this.logged = true;
        } else {
            this.$router.push('/access-account');
        }
    },
    methods: {
        fetch: function () {
            this.id = sessionStorage.getItem('user_id');
            this.axios.get('/farmers/' + this.id)
                .then((res) => {
                    this.crops = res.data.crops;

                    if(res.data.crops == 0)
                        this.voidCrops = true
                    else
                        this.voidCrops = false
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}
</script>

<style scoped>
.card img {
    width: 10rem;
    margin: 0 auto;
}
</style>