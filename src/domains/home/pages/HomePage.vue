<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <h1>Grid Tests</h1>
        <h2 class="ion-hide-sm-down">Hidden Text below sm breakpoint</h2>
        <h3>Same Width - no fixed</h3>
        <ion-row class="ion-justify-content-center">
          <ion-col class="red ion-text-justify ion-text-capitalize ion-padding">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
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

      <ion-grid :fixed="true">
        <h3>Same Width - fixed</h3>

        <ion-row class="ion-justify-content-center">
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

        <h3>Different Width - fixed</h3>

        <ion-row class="ion-justify-content-center">
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

        <h3>Auto Width - fixed</h3>

        <ion-row class="ion-justify-content-center">
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

        <h3>Responsive width - fixed</h3>

        <ion-row class="ion-justify-content-center">
          <ion-col class="red flex" size="12" size-sm="6" size-md="3" size-lg>
            <p>Test A</p>
          </ion-col>
          <ion-col class="blue flex" size="12" size-sm="6" size-md="2" size-lg>
            <p>Test B</p>
          </ion-col>
          <ion-col
            class="purple flex"
            size="12"
            size-sm="6"
            size-md="2"
            size-lg>
            <p>Test C</p>
          </ion-col>
          <ion-col class="green flex" size="12" size-sm="6" size-md="3" size-lg>
            <p>Test D</p>
          </ion-col>
        </ion-row>

        <h3>Responsive width + offset - fixed</h3>

        <ion-row class="ion-justify-content-center">
          <ion-col class="red flex" size="12" size-sm="6" size-md="3" size-lg>
            <p>Test A</p>
          </ion-col>
          <ion-col
            class="blue flex"
            size="12"
            size-sm="6"
            size-md="2"
            size-lg
            offset-md="0.2">
            <p>Test B</p>
          </ion-col>
          <ion-col
            class="purple flex"
            size="12"
            size-sm="6"
            size-md="2"
            size-lg
            offset-md="0.2">
            <p>Test C</p>
          </ion-col>
          <ion-col
            class="green flex"
            size="12"
            size-sm="6"
            size-md="3"
            size-lg
            offset-md="0.2">
            <p>Test D</p>
          </ion-col>
        </ion-row>

        <h3>Responsive width + Push and Pull - fixed</h3>

        <ion-row class="ion-justify-content-center">
          <ion-col
            class="red flex"
            size="12"
            size-sm="6"
            size-md="3"
            size-lg
            push-md="2.2">
            <p>Test A</p>
          </ion-col>
          <ion-col
            class="blue flex"
            size="12"
            size-sm="6"
            size-md="2"
            size-lg
            offset-md="0.2"
            pull-md="3.2">
            <p>Test B</p>
          </ion-col>
          <ion-col
            class="purple flex"
            size="12"
            size-sm="6"
            size-md="2"
            size-lg
            offset-md="0.2">
            <p>Test C</p>
          </ion-col>
          <ion-col
            class="green flex"
            size="12"
            size-sm="6"
            size-md="3"
            size-lg
            offset-md="0.2">
            <p>Test D</p>
          </ion-col>
        </ion-row>

        <h3>Align Items - fixed</h3>

        <ion-row
          class="ion-justify-content-center ion-align-items-center custom-height-row white">
          <ion-col
            class="red flex custom-height-col ion-align-self-start"
            size="12"
            size-md="3"
            size-lg>
            <p>Test A</p>
          </ion-col>
          <ion-col
            class="blue flex custom-height-col"
            size="12"
            size-md="2"
            size-lg
            offset-md="0.2">
            <p>Test B</p>
          </ion-col>
          <ion-col
            class="purple flex custom-height-col ion-align-self-end"
            size="12"
            size-md="2"
            size-lg
            offset-md="0.2">
            <p>Test C</p>
          </ion-col>
          <ion-col
            class="green flex custom-height-col"
            size="12"
            size-md="3"
            size-lg
            offset-md="0.2">
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
