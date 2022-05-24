<template>
    <div class="container my-5">
        <div class="d-flex justify-content-between">
            <h2>Tu cultivo</h2>
            <div>
                <router-link :to="{ name: 'UserEditCrop', params: { cropId: crop.id } }" class="btn btn-dark">Editar</router-link>
                <button class="btn btn-danger ms-3" @click="deleteCrop">Eliminar</button>
            </div>
        </div>
        <div class="jumbo-crop d-flex align-items-center justify-content-between p-5 my-4">
            <div>
                <h3>{{ crop.title }}</h3>
                <p class="text-capitalize card-subtitle my-2">
                    <span class="fw-bolder">Tipo: </span>{{ crop.crop_type }}
                </p>
                <p>
                    <span class="fw-bolder">Fecha de siemba: </span>{{ crop.seedtime.substring(0, 10) }}
                </p>
                <div class="d-flex">
                    <IconValue title="Articulos relacionados" value="32" urlIcon="https://cdn-icons.flaticon.com/png/512/681/premium/681883.png?token=exp=1653347554~hmac=b31fda3eb77c7c8e998d3c59cc77639e" />
                    <IconValue title="Consejos relacionados" value="10" urlIcon="https://cdn-icons-png.flaticon.com/512/2227/2227998.png" />
                </div>
            </div>
            <div class="d-none d-lg-block img-container me-5">
                <img src="../assets/flowers.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import IconValue from '@/components/IconValue.vue'

export default {
    name: 'UserCrop',
    data: function() {
        return {
            crop: {}
        }
    },
    components: {
        IconValue
    },
    created() {
        this.fetchCrop();
    },
    methods: {
        fetchCrop: async function() {
            let cropId = this.$route.params.cropId;
            await this.axios.get('/crops/' + cropId)
                .then((res) => {
                    this.crop = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        deleteCrop: function() {
            let cropId = this.$route.params.cropId;
            this.axios.delete('/crops/' + cropId)
                .then(() => {
                    this.$router.push('/crops');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}
</script>

<style scoped>
.jumbo-crop {
    background-color: #01c29be1;
    color: #1B1F24;
    border-radius: 20px;
}

.img-container img {
    width: 18rem;
}
</style>