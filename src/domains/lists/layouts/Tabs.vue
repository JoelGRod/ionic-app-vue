<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/lists/lists1">
          <ion-icon :icon="listOutline" />
          <ion-label>Lists I</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/lists/lists2">
          <ion-icon :icon="listOutline" />
          <ion-label>Lists II</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="exitOutline" />
          <ion-label>Exit</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
// Composables
import useIcons from "@/infrastructure/shared/composables/useIcons";

export default {
  name: "Tabs",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    const { listOutline, exitOutline } = useIcons();

    return {
      listOutline,
      exitOutline,
    };
  },
};
</script>
