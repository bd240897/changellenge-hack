<template>
  <h1>Это страница профиля</h1>
  <div>
    <img class="img_item" v-bind:src="userInfo.avatar ">
  </div>
  <p>{{ userInfo.surname }} {{ userInfo.middleName }} {{ userInfo.name }} </p>
  <p> {{ userInfo.userId }}</p>

  <div class="my-2">
    <button v-on:click.prevent="goToChat" class="login__button btn btn-primary w-100" type="submit">
      Перейти к чатам
    </button>
  </div>

</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "ProfileView",
  computed: {
    ...mapState('profile', ['userInfo',]),
  },
  methods: {
    ...mapActions('profile', ["getUserInfo", "getIdDialog"]),
    goToChat() {
      this.$router.push({name: 'ChatView'})
    },
  },
  created() {
    this.getUserInfo({})
    this.getIdDialog({})
  }
}
</script>

<style scoped>

</style>