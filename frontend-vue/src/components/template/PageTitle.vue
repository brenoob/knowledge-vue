<template>
    <div class="page-title">
        <h1>
            <i v-if="open" :class="open" ></i>
            {{ main }}
        </h1>
        <h2>{{ sub }}</h2>
    </div>
</template>

<script>
    export default {
        name: "PageTitle",
        props: ['main', 'sub', 'open']
    }
</script>

<style>
    page-title h1{
        margin: 0px;
    }

    page-title h2{
        color: #777;
        margin-top: 5px;
        font-size: 1.3rem;
    }
</style>