<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Games</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Games</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item v-for="game in gamesList" :key="game.title">
          <ion-label> {{ game.title }} </ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import { ref } from "vue";

export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
  },

  setup() {
    const gamesList = ref([
      {
        title: "Dead Cells",
      },
      {
        title: "Disco Elysium",
      },
      {
        title: "Pathologic",
      },
      {
        title: "Oxigen not Included",
      },
      {
        title: "Encased",
      },
      {
        title: "Hades",
      },
    ]);

    return {
      gamesList,
    };
  },
};
</script>
