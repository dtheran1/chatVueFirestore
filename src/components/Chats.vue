<template>
  <h1 class="text-center">Chats</h1>
  <v-card
    v-for="item in messages"
    :key="item.id"
    width="400"
    class="mb-3"
    theme="dark"
    :subtitle="item.displayName"
    :text="item.text"
    :class="item.uid === userChat.uid && 'ml-auto'"
    :color="item.uid === userChat.uid ? 'success' : '#555'"
  >
  </v-card>
</template>

<script setup>
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { ref } from "vue";

import { db, auth } from "../firebase";

const userChat = ref(auth.currentUser);
const messages = ref([]);

const q = query(collection(db, "chats"),orderBy('time'));
const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      // console.log("Mensaje: ", change.doc.id, change.doc.data());
      messages.value.push({
        id: change.doc.id,
        ...change.doc.data(),
      });
    }
  });
});
</script>
