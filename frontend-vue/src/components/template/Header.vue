<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" >
            <i class="toggle-menu-icon">
                <font-awesome-icon :icon="open" />
            </i>
        </a>
        <h1 class="title">
            <a href="">{{ title }}</a>
        </h1>
        <DropDown />
    </header>
</template>

<script>
import DropDown from './dropDown.vue';

export default {
    name: "Header",
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropDown: Boolean
    },
    // data() {
    //     return {
    //         isActive: false,
    //     };
    // },
    computed: {
        open() {
            return this.$store.state.isMenuVisible ? "fa-solid fa-x" : "fa-solid fa-bars";
            // return this.isActive ? "fa-solid fa-bars" : "fa-solid fa-x"
        }
    },
    methods: {
        toggleMenu() {
            return (
            // this.isActive = this.isActive ? false : true,
            this.$store.commit("toggleMenu"));
        }
    },
    components: { DropDown }
}
</script>

<style lang="css" scoped>
.header {
    grid-area: header;
    background: linear-gradient(to right, #0f0c29, #302b63);
    /* color: #fff; */
    /* text-align: center; */

    display: flex;
    justify-content: center;
    align-items: center;
}
.title {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }
header.header > a.toggle{
    cursor: pointer;
    width: 60px;
        height: 100%;
        color: #fff;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
}
.title a {
    cursor: pointer;
    color: #fff;
    text-decoration: none;
}
header.header > a.toggle:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>