<template>
  <div>
    <ion-content>
      <ion-router-outlet></ion-router-outlet>
    </ion-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Ionic components
import { IonContent, IonRouterOutlet } from "@ionic/vue";

export default defineComponent({
  name: "HomeLayout",
  components: {
    IonContent,
    IonRouterOutlet,
  },
});
</script>

<style></style>
