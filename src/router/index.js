import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import CreateContactPage from '../views/CreateContactPage.vue';
import EditContactPage from '../views/EditContactPage.vue';
import ContactDetailsPage from '../views/ContactDetailsPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/create',
    name: 'CreateContact',
    component: CreateContactPage
  },
  {
    path: '/edit/:id',
    name: 'EditContact',
    component: EditContactPage
  },
  {
    path: '/:id',
    name: 'ContactDetails',
    component: ContactDetailsPage
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
