<template>
  <div>
    <ion-menu side="start" content-id="home-content" class="custom-menu">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Start Menu</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="menu-content">
        <ion-list>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-page id="home-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title> Home </ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-title> Hello Home Layout </ion-title>
      </ion-content>
    </ion-page>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  // Menu
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  // Layout
  IonMenuButton,
  IonButtons,
} from "@ionic/vue";

export default defineComponent({
  name: "HomeLayout",
  components: {
    IonPage,
    // Menu
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    // Layout
    IonMenuButton,
    IonButtons,
  },

  setup() {
    return {};
  },
});
</script>

<style>
</style>
