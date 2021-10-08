<template>
  <ion-page>
    <TabsComponent :tabItems="tabItems"></TabsComponent>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from "@ionic/vue";
// Components
import TabsComponent from "@/infrastructure/shared/components/TabsComponent.vue";
// Composables
import useTabs from '../composables/useTabs';

export default {
  name: "Utils",
  components: {
    IonPage,
    TabsComponent,
  },
  setup() {
    const { tabItems } = useTabs();
    
    return {
      tabItems,
    };
  },
};
</script>