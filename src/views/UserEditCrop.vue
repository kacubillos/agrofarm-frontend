<template>
    <div class="container d-flex justify-content-center">
        <div class="form p-5">
            <h2 class="text-center">Modificar cultivo</h2>
            <div class="alert alert-danger my-2" role="alert" v-if="error">
                Ocurrio un error, vuelva a intentar.
            </div>
            <form @submit.prevent="editCrop">
                <div class="mb-3">
                    <label for="InputTitle" class="form-label">Titulo</label>
                    <input v-model="title" type="text" class="form-control" id="InputTitle" required>
                </div>
                <div class="mb-3">
                    <label for="typeSelect" class="form-label">Tipo de cultivo</label>
                    <select id="typeSelect" class="form-select" v-model="cropType" required>
                        <option value="papa">Papa</option>
                        <option value="algodon">Algodon</option>
                        <option value="arroz">Arroz</option>
                        <option value="cebolla">Cebolla</option>
                        <option value="frijol">Frijol</option>
                        <option value="papa">Papa</option>
                        <option value="mango">Mango</option>
                        <option value="maiz">Maiz</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="InputDate" class="form-label">Fecha de siembra</label>
                    <input type="date" class="form-control" id="InputDate" v-model="seedtime" required>
                </div>
                <button type="submit" class="btn btn-primary">Guardar</button>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'UserEditCrop',
    data: function () {
        return {
            crop: {},
            title: '',
            cropType: '',
            seedtime: '',
            error: false
        }
    },
    created() {
        this.fetchCrop();
    },
    methods: {
        fetchCrop: async function () {
            let cropId = this.$route.params.cropId;
            await this.axios.get('/crops/' + cropId)
                .then((res) => {
                    this.crop = res.data;

                    this.title = this.crop.title;
                    this.cropType = this.crop.crop_type;
                    this.seedtime  = this.crop.seedtime.substring(0, 10);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        editCrop: function() {
            let data = {
                "title": this.title,
                "crop_type": this.cropType,
                "seedtime": this.seedtime,
                "farmer_id": sessionStorage.getItem("user_id")
            }

            this.axios.put('/crops/' + this.crop.id, data)
                .then((res) => {
                    console.log(res);
                    this.$router.push('/crops');
                })
                .catch((err) => {
                    console.log(err);
                    this.error = true;
                });
        }
    }
}
</script>

<style scoped>
.form {
    width: 550px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #1b1f245e;
    margin-top: 20px;
    background-color: #fff;
}

@media (max-width: 1200px) {
    .form {
        width: 95%;
        margin-top: 50px;
    }
}
</style>