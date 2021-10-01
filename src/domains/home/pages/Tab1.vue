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

        <ion-list-header class="list-header">
          IonItem
        </ion-list-header>
        <ion-item v-for="game in gamesList" :key="game.id">
          <ion-label> {{ game.title }} </ion-label>
        </ion-item>

        <ion-list-header class="list-header">
          IonItemSliding
        </ion-list-header>
        <ion-item-sliding v-for="game in gamesList" :key="game.id">
          <ion-item>
            <ion-label>{{ game.title }}</ion-label>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option @click="unread(game.title)" >
              <ion-icon :icon="heartHalfOutline"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

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
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonListHeader,
  IonIcon
} from "@ionic/vue";
import { heartHalfOutline } from "ionicons/icons"
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
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
    IonListHeader,
    IonIcon
  },

  setup() {
    const gamesList = ref([
      {
        id: 0,
        title: "Dead Cells",
      },
      {
        id: 1,
        title: "Disco Elysium",
      },
      {
        id: 2,
        title: "Pathologic",
      },
      {
        id: 3,
        title: "Oxigen not Included",
      },
      {
        id: 4,
        title: "Encased",
      },
      {
        id: 5,
        title: "Hades",
      },
    ]);

    const unread = ( item: any ) => {
      console.log(item);
    };

    return {
      // Icons
      heartHalfOutline,
      // Public properties
      gamesList,
      // Public methods
      unread,
    };
  },
};
</script>

<style scoped>
.list-header {
  padding: 0.2rem 1rem 1rem 1rem;
}
</style>
