import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import TestView from "../views/TestView";
import ProfileView from "@/views/ProfileView";
import ChatView from "@/views/ChatView";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/chat',
    name: 'ChatView',
    component: ChatView
  },
  {
  path: '/test/:id',
  name: 'TestView',
  component: TestView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
