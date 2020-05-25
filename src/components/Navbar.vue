<template>
    <div class="navbar">
        <v-app-bar app color="primary" dark>
            <router-link :to="{ name: '' }">
                <span class="white--text">
                    Ninja Smoothies
                </span>
            </router-link>
            <router-link :to="{ name: '' }">
                <v-btn absolute dark fab bottom right color="pink">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </router-link>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
    };
</script>

<style></style>