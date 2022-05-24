<template>
    <div class="form-container d-flex flex-column justify-content-center align-items-center">
        <div class="form shadow-lg p-5">
            <h2 class="text-center">Crea tu cuenta</h2>
            <div class="alert alert-danger my-2" role="alert" v-if="error">
                {{ errorMsg }}
            </div>
            <form @submit.prevent="signup">
                <div class="mb-3">
                    <label for="InputName" class="form-label">Nombre completo</label>
                    <input v-model="name" type="text" class="form-control" id="InputName" required>
                </div>
                <div class="mb-3">
                    <label for="InputEmail" class="form-label">Correo electronico</label>
                    <input v-model="email" type="email" class="form-control" id="InputEmail"
                        aria-describedby="emailHelp" required>
                </div>
                <div class="row mb-3">
                    <div class="col">
                        <label for="InputPassword" class="form-label">Contraseña</label>
                        <input v-model="password" type="password" class="form-control" id="InputPassword" required>
                    </div>
                    <div class="col">
                        <label for="InputVerifyPassword" class="form-label">Repetir contraseña</label>
                        <input v-model="verifyPassword" type="password" class="form-control" id="InputVerifyPassword" required>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary w-100">Terminar</button>
                <p class="text-center mt-3">¿Ya tienes una cuenta? <router-link to="/auth/login">Inicia sesión</router-link></p>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'UserSignup',
    data: function() {
        return {
            name: '',
            email: '',
            password: '',
            verifyPassword: '',
            error: false,
            erroMsg: ''
        }
    },
    methods: {
        checkPassword: function() {
            let result;

            if(this.password != this.verifyPassword) {
                this.error = true;
                this.errorMsg = 'Las contraseñas no coinciden.';
                result = false;
            } else {
                this.error = false;
                result = true;
            }

            return result;
        },
        signup: function() {
            if(this.checkPassword()) {
                let data = {
                    'name': this.name,
                    'email': this.email,
                    'password': this.password
                }

                this.axios.post('/farmers/', data)
                    .then((res) => {
                        console.log(res);
                        this.$router.push('/auth/login');
                    })
                    .catch((err) => {
                        console.log(err);
                        this.error = true;
                        this.errorMsg = 'Ocurrio un error, vuelva a intentar.';
                    });
            }
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