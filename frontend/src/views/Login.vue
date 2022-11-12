<template>
  <section class="login h-100">
    <div class="container h-100">
      <div class="row h-100  justify-content-center align-items-center p-0 ">
        <div class="login__col col-4 bg-white border p-4">

          <h3 class="login__header text-center mb-2">Вход</h3>
          <form class="login__form">
            <div class="login__form__email form-group my-2">
              <label for="exampleInputEmail1">Username</label>
              <input v-model="username" type="text" class="form-control" id="exampleInputEmail1"
                     aria-describedby="emailHelp">
            </div>
            <div class="login__form__password form-group my-2">
              <label for="exampleInputPassword1">Пароль</label>
              <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button v-on:click.prevent="getLogin" class="login__button btn btn-primary w-100" type="submit">Войти
            </button>

          </form>
<!--          <div class="my-2">-->
<!--            <button v-on:click.prevent="isTokenValid" class="login__button btn btn-primary w-100" type="submit">-->
<!--              Проверить валидность токена-->
<!--            </button>-->
<!--          </div>-->

<!--          <div class="my-2">-->
<!--            <button v-on:click.prevent="getUserInfo" class="login__button btn btn-primary w-100" type="submit">-->
<!--              Проверить axios.default-->
<!--            </button>-->
<!--          </div>-->

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
      let data_login_global = {
        "login": "testUser",
        "password": "872e4e50ce9990d8b041330c47c9ddd11bec6b503ae9386a99da8584e9bb12c4"
      }


      console.log(data_login_global)
      this.login({data: data_login_global})
    },
  },
  created() {
  },
}
</script>

<style scoped>
@import "../assets/css/login.css";
</style>