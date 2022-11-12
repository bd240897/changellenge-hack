<template>
  <h1>chat shitory</h1>
  <div v-for="msg in chatHistory">
      <div v-bind:class="[ isMyMassage(msg.sender) ? 'text-right' : 'text-left']">
        {{msg.text}}
      </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "ChatView",
    computed: {
    ...mapState('chat', ['chatHistory',]),
  },
  methods: {
    ...mapActions('chat', ['getChatHistory',]),
    isMyMassage(id){
      console.log(id)
      return parseInt(id) === 100500
    }
  },
  created() {
    this.getChatHistory({})
  }
}
</script>

<style scoped>
.text-left{
  color: white;
  font-weight:bold;
}
.text-right{
  color: red;
}

</style>