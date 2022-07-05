<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title> Chat Firebase </v-app-bar-title>
      <v-btn prepend-icon="mdi-google-downasaur" color="white" plain variant="outlined"> Acceder </v-btn>
    </v-app-bar>

    <v-main app>
      <v-container>
        <Chat />        
      </v-container>
    </v-main>

    <v-footer class="d-flex flex-column" app>
      <FormAdd />
    </v-footer>
  </v-app>
</template>

<script setup>
import Chat from "./components/Chats.vue"
import FormAdd from "./components/FormAdd.vue"

</script>
