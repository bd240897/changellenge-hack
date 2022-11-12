<template>
  <h1>chat shitory</h1>
  <div class="">
    <div class="" v-for="msg in chatHistory"
         v-bind:class="[ isMyMassage(msg.sender) ? 'text-right-my' : 'text-left-my']">

      <!--      <div class="justify-content-center" >-->
      {{ msg.text }}

      <!--      </div>-->
    </div>

    <form class="login__form">
      <div>
        <label for="exampleInputPassword1">Пароль</label>
        <textarea v-model="massage" type="text" class="form-control" id="exampleInputPassword1" rows="3"></textarea>
      </div>
      <button v-on:click.prevent="sendNewMassage" class="login__button btn btn-primary w-100" type="submit">Отправить
      </button>
    </form>
    <button v-on:click.prevent="getChatHistory({})" class="login__button btn btn-primary w-100" type="submit">123
    </button>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "ChatView",
  data() {
    return {
      massage: '',
    }
  },
  watch: {},
  computed: {
    ...mapState('chat', ['chatHistory',]),
    ...mapState('profile', ['id_dialog', "userInfo"]),
  },
  methods: {
    ...mapActions('chat', ['getChatHistory', 'sendMassage']),
    isMyMassage(id) {
      console.log(parseInt(id) === this.userInfo.userId)
      console.log(parseInt(id))
      console.log(this.userInfo.userId)
      return parseInt(id) === this.userInfo.userId
    },
    sendNewMassage() {
      let data_msg = {
        "message": {
          "dialogId": this.id_dialog,
          "text": this.massage,
          "messageType": "WIDGET",
          "data": "{\"widget\":\"custom data\"}",
          "mediaUrl": "https://cdn-icons-png.flaticon.com/512/945/945244.png"
        }
      }
      this.sendMassage({data: data_msg})
      this.massage = ''
    }

  },
  created() {
    this.getChatHistory({})
    let self = this;
    setInterval(function () {
      self.getChatHistory({})
    }, 5000);
  }
}
</script>

<style scoped>
.text-left-my {
  /*color: white;*/
  /*font-weight:bold;*/
  background: white;
}

.text-right-my {
  /*color: red;*/
  background: gray;
}

</style>