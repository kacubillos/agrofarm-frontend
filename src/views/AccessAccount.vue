<template>
    <div class="cards-container d-flex flex-column flex-lg-row justify-content-center align-items-center p-5">
        <AccessCard title="Administrador" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mollis vitae sed tortor netus. Sapien at odio volutpat
            sollicitudin morbi." link="UserLogin" textLink="Contacta soporte" />
        <AccessCard title="Agricultor" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mollis vitae sed tortor netus. Sapien at odio volutpat
            sollicitudin morbi." link="UserLogin" textLink="Registrate" />
    </div>
</template>

<script>
import AccessCard from '../components/AccessCard';

export default {
    name: 'AccessAccount',
    components: {
        AccessCard,
    }
}
</script>

<style scoped>
* {
    background-color: #F3F7F7;
}

.cards-container {
    height: 91vh;
}

@media (max-width: 1200px) {
    .cards-container {
        height: auto;
    }
}
</style>