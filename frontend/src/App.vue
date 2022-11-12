<template>
<!--  <PageLoader />-->
  <nav>
    <router-link :to="{ name: 'Login'}">Login</router-link> |
    <router-link :to="{ name: 'ProfileView'}">ProfileView</router-link> |
<!--    <router-link :to="{ name: 'RequestDetail', params: { id: 1 }}">Request</router-link> |-->
    <router-link :to="{ name: 'ChatView'}">ChatView</router-link> |
    <router-link :to="{ name: 'TestView', params: { id: 1 }}">TestView</router-link> |
  </nav>
  <router-view/>
</template>

<style>
  /*необходимо для центрации дочерних элементов по середине экрана*/
  html, body {
    height: 100%;
  }

  #app{
    height: 100%;
  }

  #app{
    background-color: #3CB5E8;
  }

</style>

<script>
import Menu from '@/components/Menu.vue';
import PageLoader from './components/PageLoader'
export default {
  name: 'App',
  components: {
    PageLoader
  },
  created() {
  }
}
</script>

