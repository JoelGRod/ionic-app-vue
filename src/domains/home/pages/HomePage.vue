<template>
  <ion-page>
    <ion-content>
      <h1>Grid Tests</h1>
      
      <h3>Same Width - no fixed</h3>
      
      <ion-grid>
        <ion-row
          class="ion-justify-content-center">
          <ion-col class="red flex">
            <p>Test A</p>
          </ion-col>
          <ion-col class="blue flex">
            <p>Test B</p>
          </ion-col>
          <ion-col class="purple flex">
            <p>Test C</p>
          </ion-col>
          <ion-col class="green flex">
            <p>Test D</p>
          </ion-col>
        </ion-row>
      </ion-grid>

      <h3>Same Width - fixed</h3>

      <ion-grid :fixed="true">
        <ion-row
          class="ion-justify-content-center">
          <ion-col class="red flex">
            <p>Test A</p>
          </ion-col>
          <ion-col class="blue flex">
            <p>Test B</p>
          </ion-col>
          <ion-col class="purple flex">
            <p>Test C</p>
          </ion-col>
          <ion-col class="green flex">
            <p>Test D</p>
          </ion-col>
        </ion-row>
      </ion-grid>

      <h3>Different Width - fixed</h3>

      <ion-grid :fixed="true">
        <ion-row
          class="ion-justify-content-center">
          <ion-col class="red flex" size="3">
            <p>Test A</p>
          </ion-col>
          <ion-col class="blue flex" size="2">
            <p>Test B</p>
          </ion-col>
          <ion-col class="purple flex" size="4">
            <p>Test C</p>
          </ion-col>
          <ion-col class="green flex" size="3">
            <p>Test D</p>
          </ion-col>
        </ion-row>
      </ion-grid>

      <h3>Auto Width - fixed</h3>

      <ion-grid :fixed="true">
        <ion-row
          class="ion-justify-content-center">
          <ion-col class="red flex">
            <p>Test A</p>
          </ion-col>
          <ion-col class="blue flex">
            <p>Test B</p>
          </ion-col>
          <ion-col class="purple flex" size="auto">
            <p>Test C that takes a lot of space</p>
          </ion-col>
          <ion-col class="green flex">
            <p>Test D</p>
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
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
