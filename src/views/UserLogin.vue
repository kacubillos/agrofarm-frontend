<template>
    <div class="form-container d-flex flex-column justify-content-center align-items-center">
        <div class="form shadow-lg p-5">
            <h2 class="text-center">¡Bienvenido!</h2>
            <div class="alert alert-danger my-2" role="alert" v-if="error">
                El correo o la contraseña son incorrectos.
            </div>
            <form @submit.prevent="login">
                <div class="mb-3">
                    <label for="InputEmail" class="form-label">Correo electronico</label>
                    <input v-model="email" type="email" class="form-control" id="InputEmail"
                        aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="InputPassword" class="form-label">Contraseña</label>
                    <input v-model="password" type="password" class="form-control" id="InputPassword">
                </div>
                <button type="submit" class="btn btn-primary w-100">Iniciar sesión</button>
                <p class="text-center mt-3">¿No tienes cuenta? Registrate</p>
                <p class="link text-center mt-2">¿Olvidaste tu contraseña?</p>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'UserLogin',
    data: function () {
        return {
            email: '',
            password: '',
            error: false
        }
    },
    methods: {
        login: async function () {
            let data = {
                email: this.email,
                password: this.password
            }

            await this.axios.post('/auth/login', data)
                .then((res) => {
                    this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token;
                    sessionStorage.setItem('user_token', 'Bearer ' + res.data.access_token);
                    sessionStorage.setItem('user_id', res.data.userData.id);
                    window.location.href = '/';
                })
                .catch(err => {
                    this.error = true;
                    console.log(err);
                });
        }
    }
}
</script>

<style scoped>
.form-container {
    height: 91vh;
    background-color: #F3F7F7;
}

.form {
    width: 500px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
}

@media (max-width: 1200px) {
    .form-container {
        height: auto;
    }

    .form {
        width: 85%;
        margin-top: 50px;
    }
}
</style>