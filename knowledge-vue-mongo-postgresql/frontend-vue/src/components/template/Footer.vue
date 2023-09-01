<template>
        <footer class="footer">
            <span>&copy; 2023 <strong>Brenekat</strong></span>
        </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
    
</script>

<style lang="css" scoped>
    .footer{
        grid-area: footer;
        background-color: #ddd;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>