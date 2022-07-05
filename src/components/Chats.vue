<template>
  <h1 class="text-center">Chats</h1>
  <v-card
    v-for="item in messages"
    :key="item.id"
    width="400"
    class="mb-3"
    theme="dark"
    :subtitle="item.displayName"
    :text="item.message"
    :class="item.uid === userChat.uid && 'ml-auto'"
    :color="item.uid === userChat.uid ? 'success' : '#555'"
  >
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const userChat = ref({
  uid: "002",
});
const messages = ref([
  {
    id: 1,
    message: "Este es el primer mensaje",
    uid: "001",
    time: Date.now(),
    displayName: "Ergon",
  },
  {
    id: 2,
    message: "Este es el segundo mensaje",
    uid: "002",
    time: Date.now(),
    displayName: "Wiki",
  },
  {
    id: 1,
    message: "Este es el tercer mensaje",
    uid: "003",
    time: Date.now(),
    displayName: "Ergon",
  },
  {
    id: 1,
    message: "Este es el Cuarto mensaje",
    uid: "004",
    time: Date.now(),
    displayName: "Ergon",
  },
]);
</script>
