<template>
  <ion-app>
    <MenuComponent :menuItems="menuItems"></MenuComponent>

    <ion-page id="content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title> Home </ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-router-outlet />
    </ion-page>
  </ion-app>
</template>

<script lang="ts">
import {
  IonApp,
  IonRouterOutlet,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonMenuButton,
} from "@ionic/vue";
import { defineAsyncComponent, defineComponent } from "vue";
// Interfaces
import { MenuItem } from "@/domains/home/interfaces/home.interfaces";
// Icons
import useIcons from "@/infrastructure/shared/composables/useIcons";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonMenuButton,
    MenuComponent: defineAsyncComponent(() =>
      import("@/domains/home/components/MenuComponent.vue")
    ),
  },
  setup() {
    const { homeOutline, planetOutline } = useIcons();

    const menuItems: MenuItem[] = [
      {
        title: "Home",
        icon: homeOutline,
        link: "/home",
      },
      {
        title: "Lists",
        icon: planetOutline,
        link: "/lists",
      },
    ];

    return {
      menuItems,
    };
  },
});
</script>
