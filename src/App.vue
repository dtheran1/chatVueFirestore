<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title> Chat Firebase </v-app-bar-title>
      <v-btn
        prepend-icon="mdi-google-downasaur"
        color="white"
        plain
        variant="outlined"
        @click="googleAccess"
      >
        Acceder
      </v-btn>
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
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth } from "./firebase";

import Chat from "./components/Chats.vue";
import FormAdd from "./components/FormAdd.vue";

const googleAccess = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
</script>
