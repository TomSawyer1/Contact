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
      <div class="ion-padding-top">
        <ion-button expand="block" :router-link="'/' + contact.id + '/edit'">Modifier</ion-button>
        <ion-button expand="block" color="danger" @click="deleteContact">Supprimer</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref, inject, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonButton,
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
    IonButton,
    IonLabel,
    IonText
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = inject('store');
    const contact = ref({});

    onMounted(() => {
      const id = route.params.id;
      const existingContact = store.state.contacts.find(contact => contact.id === Number(id));
      if (existingContact) {
        contact.value = { ...existingContact };
      }
    });

    const deleteContact = () => {
      store.deleteContact(contact.value.id);
      router.push('/');
    };

    return {
      contact,
      deleteContact,
    };
  },
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
  --border-width: 0;
}

.item-label {
  font-weight: bold;
  color: #333;
}

.item-text {
  color: #666;
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
