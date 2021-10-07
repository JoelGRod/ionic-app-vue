<template>
  <ion-page>
    <MenuComponent 
      :menuItems="menuItems" 
      contentId="home-content">
    </MenuComponent>

    <master-layout 
      title="Home" 
      layoutId="home-content">
      <ion-router-outlet></ion-router-outlet>
    </master-layout>
    
  </ion-page>
</template>

<script lang="ts">
import { 
  defineComponent, 
  defineAsyncComponent 
} from "vue";
// Ionic components
import {
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
// Composables
import useMenu from "../composables/useMenu";

export default defineComponent({
  name: "HomeLayout",
  components: {
    IonPage,
    IonRouterOutlet,
    MenuComponent: defineAsyncComponent(
      () => import("../../../infrastructure/shared/components/MenuComponent.vue") 
    )
  },

  setup() {
    const { menuItems } = useMenu();

    return {
      menuItems,
    };
  },
});
</script>
