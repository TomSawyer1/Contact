<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ajouter un contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Nom</ion-label>
          <ion-input
            placeholder="Entrez le nom"
            v-model="contact.name"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input
            type="email"
            placeholder="Entrez l'email"
            v-model="contact.email"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Téléphone</ion-label>
          <ion-input
            type="tel"
            placeholder="Entrez le numéro de téléphone"
            v-model="contact.phone"
          ></ion-input>
        </ion-item>
      </ion-list>
      <div class="ion-padding-top">
        <ion-button expand="block" @click="addContact">Ajouter</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonLabel
} from "@ionic/vue";

export default {
  name: "CreateContact",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonLabel
  },
  data() {
    return {
      contact: {
        id: Date.now(),
        name: "",
        email: "",
        phone: ""
      }
    };
  },
  methods: {
    addContact() {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      contacts.push(this.contact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      window.dispatchEvent(new Event('storage'));
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
ion-content {
  --background: #000000;
}

ion-toolbar {
  --background: #3880ff;
  --color: #fff;
}

ion-item {
  --inner-padding-end: 10px;
}

ion-label {
  font-weight: bold;
  color: #333;
}

ion-button {
  --background: #3880ff;
  --border-radius: 8px;
  font-size: 16px;
}

.ion-padding-top {
  padding-top: 20px;
}
</style>
