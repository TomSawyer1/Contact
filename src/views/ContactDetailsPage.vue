<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Détails du contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item lines="none">
          <ion-label class="item-label">Nom:</ion-label>
          <ion-text class="item-text">{{ contact.name }}</ion-text>
        </ion-item>
        <ion-item lines="none">
          <ion-label class="item-label">Téléphone:</ion-label>
          <ion-text class="item-text">{{ contact.phone }}</ion-text>
        </ion-item>
        <ion-item lines="none">
          <ion-label class="item-label">Email:</ion-label>
          <ion-text class="item-text">{{ contact.email }}</ion-text>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonText
} from '@ionic/vue';

export default {
  name: 'ContactDetailsPage',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonText
  },
  setup() {
    const route = useRoute();
    const contact = ref({});

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

    return {
      contact
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

.item-label {
  font-weight: bold;
  color: #333;
}

.item-text {
  color: #666;
}
</style>
