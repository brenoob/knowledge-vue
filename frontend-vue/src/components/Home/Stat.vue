<template>
    <div class="stat">
        <div class="stat-icon">
            <font-awesome-icon icon="fa-solid fa-gear" :style="style" />
        </div>
        <div class="stat-info">
            <span class="stat-title">{{ title }}</span>
            <span class="stat-value">{{ value }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'stat',
        props: ['title', 'value', 'color'],
        computed: {
            style() {
                return "color:" + (this.color || '#000')
            }
        }
    }
</script>

<style>

</style>