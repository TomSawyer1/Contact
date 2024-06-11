<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Contacts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="ion-padding-bottom">
        <router-link to="/create">
          <ion-button expand="block">Ajouter un contact</ion-button>
        </router-link>
      </div>
      <ion-list>
        <ion-item v-for="contact in contacts" :key="contact.id">
          <ion-label>
            <h2>{{ contact.name }}</h2>
            <p>{{ contact.email }}</p>
            <p>{{ contact.phone }}</p>
          </ion-label>
          <ion-button slot="end" @click.stop="editContact(contact.id)">Modifier</ion-button>
          <ion-button slot="end" color="danger" @click.stop="deleteContact(contact.id)">Supprimer</ion-button>
          <ion-button slot="end" color="secondary" @click.stop="viewContact(contact.id)">Info</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonLabel } from '@ionic/vue';
import { RouterLink } from 'vue-router';

export default {
  name: 'HomePage',
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
    RouterLink
  },
  data() {
    return {
      contacts: []
    };
  },
  methods: {
    fetchContacts() {
      this.contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    },
    deleteContact(id) {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      const index = contacts.findIndex(contact => contact.id === id);
      if (index !== -1) {
        contacts.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.fetchContacts();
      }
    },
    editContact(id) {
      this.$router.push(`/edit/${id}`);
    },
    viewContact(id) {
      this.$router.push(`/${id}`);
    }
  },
  created() {
    this.fetchContacts();
  },
  mounted() {
    window.addEventListener('storage', this.fetchContacts);
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.fetchContacts);
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

ion-button[color="secondary"] {
  --background: #3dc2ff;
}

.ion-padding-bottom {
  padding-bottom: 20px;
}
</style>
