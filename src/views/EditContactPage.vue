<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Modifier Contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Nom</ion-label>
          <ion-input v-model="contact.name" placeholder="Entrez le nom"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Téléphone</ion-label>
          <ion-input v-model="contact.phone" placeholder="Entrez le téléphone"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="contact.email" placeholder="Entrez l'email"></ion-input>
        </ion-item>
      </ion-list>
      <div class="ion-padding-top">
        <ion-button expand="block" @click="saveContact">Sauvegarder</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
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
} from '@ionic/vue';

export default {
  name: 'EditContactPage',
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
  setup() {
    const route = useRoute();
    const router = useRouter();
    const contact = ref({
      id: null,
      name: '',
      phone: '',
      email: ''
    });

    const loadContact = () => {
      const id = route.params.id;
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      const existingContact = contacts.find(contact => contact.id === Number(id));
      if (existingContact) {
        contact.value = { ...existingContact };
      }
    };

    onMounted(() => {
      loadContact();
    });

    const saveContact = () => {
      let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      const index = contacts.findIndex(c => c.id === contact.value.id);
      if (index !== -1) {
        contacts[index] = { ...contact.value };
        localStorage.setItem('contacts', JSON.stringify(contacts));
        router.push('/home');
      }
    };

    return {
      contact,
      saveContact
    };
  }
};
</script>

<style scoped>
ion-content {
  --background: #f4f5f8;
}

ion-toolbar {
  --background: #3880ff;
  --color: #fff;
}

ion-item {
  --inner-padding-end: 10px;
  --border-width: 0;
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
