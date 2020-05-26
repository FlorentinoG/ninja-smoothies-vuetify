<template>
    <div class="navbar">
        <v-app-bar app color="primary" dark>
            <router-link :to="{ name: '' }">
                <span class="white--text">
                    Ninja Smoothies
                </span>
            </router-link>
            
                <addSmoothie />
            
        </v-app-bar>
    </div>
</template>

<script>
import addSmoothie from './addSmoothie'

    export default {
        name: "Navbar",
        components:{
            addSmoothie
        }
    };
</script>

<style></style>