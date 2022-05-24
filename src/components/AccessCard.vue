<template>
    <div class="rounded-form shadow d-flex flex-column align-items-start mx-5 my-3 px-5 py-3">
        <h2 class="my-3">{{ title }}</h2>
        <p>{{ content }}</p>
        <router-link :to="{ name: link }" class="btn btn-dark">Iniciar sesión</router-link>
        <div class="my-3">
            <p>
                ¿No tienes cuenta?
                <router-link :to="{ name: link }" class="link">{{ textLink }}</router-link>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AccessCard',
    props: {
        title: String,
        content: String,
        link: String,
        textLink: String
    }
}
</script>

<style scoped>
.rounded-form {
    background-color: #fff;
    border-radius: 15px;
}

@media (max-width: 1200px) {
    .rounded-form {
        width: 100%;
    }
}
</style>