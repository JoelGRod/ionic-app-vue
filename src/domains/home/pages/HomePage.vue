<template>
  <ion-page>
    <ion-content>
      <ion-grid :fixed="true">
        <h1>Welcome to my Ionic Test App</h1>
        <ion-row class="ion-justify-content-center">
          <ion-col size="8" class="purple ion-text-center ion-padding ion-margin">
            <p>Please select something in the sidenav menu</p>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  // IonTitle,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";

export default {
  name: "Home",
  components: {
    IonPage,
    IonContent,
    // IonTitle,
    IonGrid,
    IonRow,
    IonCol,
  },
};
</script>

<style scoped>
.text-color {
  color: #333333;
}
.blue {
  background-color: blue;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.purple {
  background-color: purple;
}
.white {
  background-color: #f3f3f3;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.custom-height-row {
  height: 10rem;
}
.custom-height-col {
  height: 4rem;
}
</style>
