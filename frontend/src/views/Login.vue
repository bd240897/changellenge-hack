<template>
  <section class="login h-100">
    <div class="container d-flex flex-column align-items-center justify-content-center h-100">
        <div class="login__header text-center ">
            ОТКРОЙСЯ НОВОМУ
        </div>

        <div class="login__form w-100">
            <div class="form__email form-group my-4">
                <input v-model="username" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Логин">
            </div>

            <div class="form__password form-group my-4">
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Пароль">
            </div>

            <div class="login__button">
                <button v-on:click.prevent="getLogin" class="button_item btn btn-primary w-100" type="submit">Войти</button>
            </div>
        </div>

    </div>

</section>

</template>

<script>
// import '../assets/css/login.css'
import {mapActions} from "vuex";
import CryptoJS from 'crypto-js';

export default {
  name: "Login",
  data() {
    return {
      username: 'jordan',
      password: 'jordan_839',
    }
  },
  methods: {
    ...mapActions('login', ['isTokenValid', "login",]),
    hash(string) {
      return CryptoJS.SHA256(string).toString(CryptoJS.enc.hex);
    },
    getLogin() {
            // TODO
      let data_login = {
        "login": this.username,
        "password": this.hash(this.password)
      }
      // let data_login_global = {
      //   "login": "testUser",
      //   "password": "872e4e50ce9990d8b041330c47c9ddd11bec6b503ae9386a99da8584e9bb12c4"
      // }
      this.login({data: data_login})
    },
  },
  created() {
  },
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    html, body {
        height: 100%;
    }

    .login__header {
        font-family: Oswald, serif;
        color: white;
        font-size: 72px;
        width: 80%;
    }

    .login {
        background-color: #3CB5E8;
    }

    .login__button {
        margin-top: 80px;
    }

    .button_item{
        background-color: #0275D8;
        font-size: 32px;
        font-family: Montserrat, sans-serif;
    }
</style>