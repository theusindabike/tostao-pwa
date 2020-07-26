<template>
  <div>
    <h1>Login</h1>
    <!-- <button @click="handleClickGetAuth" :disabled="!isInit">get auth code</button>
    <button @click="handleClickSignIn" v-if="!isSignIn" :disabled="!isInit">signIn</button>
    <button @click="handleClickSignOut" v-if="isSignIn" :disabled="!isInit">signOout</button> -->
    
    <button id="customBtn" class="customGPlusSignIn" v-on:click="signIn">
      <span class="icon"></span>
      Sign in with Google
    </button>
  </div>
</template>

<script>

export default {
  name: 'test',
  data () {
    return {
      isInit: false,
      isSignIn: false
    }
  },

  methods: {
    signIn(){
      this.$store.dispatch('user/signIn')
    },

    handleClickSignOut(){
      this.$gAuth.signOut()
      .then(() => {
        // On success do something
        this.isSignIn = this.$gAuth.isAuthorized
      })
      .catch(error  => {
        // On fail do something
        print(error)
      })
    }
  },
  mounted(){
    let that = this
    let checkGauthLoad = setInterval(function(){
      that.isInit = that.$gAuth.isInit
      that.isSignIn = that.$gAuth.isAuthorized
      if(that.isInit) clearInterval(checkGauthLoad)
    }, 1000);
  }
  
}
</script>
<style scoped>
#customBtn {
    background: white;
    color: #444;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding-right: 15px;
}
#customBtn:hover {
    cursor: pointer;
}
span.icon {
    background: url('../assets/btn_google_normal.svg') transparent no-repeat;
    display: inline-block;
    vertical-align: middle;
    width: 42px;
    height: 42px;
    margin-bottom: 5px;
}
</style>
