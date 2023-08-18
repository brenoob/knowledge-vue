<template>
    <div>
        <b-dropdown id="user-dropdown" right :text="user.name" class="m-md-3">
            <b-dropdown-item>{{ user.email }}</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>
                <font-awesome-icon icon="fa-solid fa-gear" />
                settings
            </b-dropdown-item>
            <b-dropdown-item>
                <font-awesome-icon icon="fa-solid fa-sign-out" />
                logout
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "DropDown",
    computed: mapState(['user'])
}
</script>

<style>

</style>