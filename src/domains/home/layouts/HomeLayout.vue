<template>
  <div>
    <MenuComponent :menuItems="menuItems"></MenuComponent>

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
        <ion-router-outlet></ion-router-outlet>
      </ion-content>
    </ion-page>
  </div>
</template>

<script lang="ts">
import { 
  defineComponent, 
  defineAsyncComponent 
} from "vue";
// Ionic components
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonMenuButton,
  IonRouterOutlet,
} from "@ionic/vue";
// Interfaces
import { MenuItem } from "../interfaces/home.interfaces";
// Icons
import useIcons from "@/infrastructure/shared/composables/useIcons";

export default defineComponent({
  name: "HomeLayout",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonContent,
    IonMenuButton,
    IonRouterOutlet,
    MenuComponent: defineAsyncComponent(
      () => import("../components/MenuComponent.vue") 
    )
  },

  setup() {

    const { homeOutline, planetOutline } = useIcons();

    const menuItems: MenuItem[] = [
      {
        title: "Home",
        icon: homeOutline,
        link: "/home"
      },
      {
        title: "Lists",
        icon: planetOutline,
        link: "/lists"
      },
    ]

    return {
      menuItems,
    };
  },
});
</script>

<style></style>
