<template>
  <div>
    <h1>Test</h1>
    <button @click="handleClickGetAuth" :disabled="!isInit">get auth code</button>
    <button @click="handleClickSignIn" v-if="!isSignIn" :disabled="!isInit">signIn</button>
    <button @click="handleClickSignOut" v-if="isSignIn" :disabled="!isInit">signOout</button>
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
    handleClickGetAuth(){
      this.$gAuth.getAuthCode()
      .then(authCode => {
        // On success
        return this.$http.post('http://your-backend-server.com/auth/google', { code: authCode, redirect_uri: 'postmessage' })
      })
      .then(response => {
          console.info(response)
        // And then
      })
      .catch(error => {
        // On fail do something
        print(error)
      })
    },

    handleClickSignIn(){
      this.$gAuth.signIn()
      .then(user => {
        // On success do something, refer to https://developers.google.com/api-client-library/javascript/reference/referencedocs#googleusergetid
        console.log('user', user)
        this.isSignIn = this.$gAuth.isAuthorized
      })
      .catch(error  => {
        // On fail do something
        print(error)
      })
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