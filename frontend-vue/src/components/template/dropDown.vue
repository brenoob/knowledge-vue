<template>
    <div>
        <b-dropdown id="user-dropdown" right :text="user.name" class="m-md-3 colorbg" style="backgroundColor: #0f0c29;">
            <b-dropdown-item>{{ user.email }}</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>
                <router-link to="/admin" class="router-link-admin">
                    <font-awesome-icon icon="fa-solid fa-gear" />
                    Admin
                </router-link>
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
    .router-link-admin {
        text-decoration: none;
    }
    
    #user-dropdown .btn {
        background-color: #282455;
    }


</style>