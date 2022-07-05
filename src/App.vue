<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title> Chat Firebase </v-app-bar-title>
      <v-btn
        v-if="!userGoogle"
        prepend-icon="mdi-google-downasaur"
        color="white"
        plain
        variant="outlined"
        @click="googleAccess"
      >
        Acceder
      </v-btn>
      <v-btn
        v-if="userGoogle"
        prepend-icon="mdi-google-downasaur"
        color="white"
        plain
        variant="outlined"
        @click="logout"
      >
        Log out
      </v-btn>
    </v-app-bar>

    <v-main app>
      <v-container>
        <Chat v-if="userGoogle" />
        <div v-else>
          <h1 class="text-center mt-15">Debes iniciar sesión para ver los chats</h1>
        </div>
      </v-container>
    </v-main>

    <v-footer class="d-flex flex-column" app>
      <FormAdd />
    </v-footer>
  </v-app>
</template>

<script setup>
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "./firebase";

import Chat from "./components/Chats.vue";
import FormAdd from "./components/FormAdd.vue";
import { ref } from "vue"

const userGoogle = ref(false)

const googleAccess = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    // console.log(user);
  } catch (error) {
    console.log(error);
  }
};

const logout = async() => {
  await signOut(auth)
}

onAuthStateChanged(auth, user => {
  console.log(user)
  userGoogle.value = user
})
</script>
