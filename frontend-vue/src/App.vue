<template>
	<div id="app" :class="{'hide-menu' : !isMenuVisible}">
		<Header title="titulo" />
		<Menu />
		<Content />
		<Footer />

	</div>
</template>

<script>
// vuex
import { mapState } from 'vuex';
// components
import Header from './components/template/Header.vue';
import Menu from './components/template/Menu.vue';
import Content from './components/template/Content.vue';
import Footer from './components/template/Footer.vue';


export default {
    name: "App",
    components: { Header, Menu, Content, Footer },
	computed: mapState(['isMenuVisible'])
}
</script>

<style>
	*{
		font-family: "Lato", sans-serif;
	}
	body{
		margin: 0;
	}
	#app{
		-webkit-font-smoothing: atialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 300px 1fr;
		grid-template-areas: 
		"header header"
		"menu content"
		"footer footer"
		;
	}
	#app.hide-menu{
		grid-template-areas: 
			"header header"
			"content content"
			"footer footer"
		;
	}
</style>