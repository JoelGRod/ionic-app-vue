<template>
  <ion-menu side="start" content-id="home-content" class="custom-menu">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title> {{ title }} </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="menu-content">
      <ion-list>
        <ion-item 
          v-for="{ title, icon } in menuItems" 
          :key="title">
          <ion-icon :icon="icon" slot="start"></ion-icon>
          <ion-label>{{ title }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Ionic components
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
} from "@ionic/vue";
// Interfaces
import { MenuItem } from "../interfaces/home.interfaces";

export default defineComponent({
  name: "SideMenu",
  props: {
    title: {
      type: String,
      required: false,
      default: "Home Menu",
    },
    menuItems: {
      type: Object as () => MenuItem[],
      required: true,
    },
  },
  components: {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
  },

});
</script>

<style></style>
