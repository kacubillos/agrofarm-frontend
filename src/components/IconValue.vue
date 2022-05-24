<template>
    <div class="d-flex align-items-center me-3">
        <div class="logo-container d-flex align-items-center justify-content-center me-2">
            <img :src="urlIcon" alt="">
        </div>
        <div>
            <p class="title m-0 fs-6">{{ title }}</p>
            <p class="value m-0 fs-5">{{ value }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'IconValue',
    props: {
        title: String,
        value: Number,
        urlIcon: String
    }
}
</script>

<style>
.logo-container {
    background-color: #FFD87D;
    border-radius: 15px;
}

.logo-container img {
    width: 3.5rem;
    padding: 12px;
}
</style>