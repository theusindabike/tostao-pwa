<template>
    <div>
        <button @click="authenticate('google')">auth Google</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {        
        // authenticate: function (provider) {
        //     this.$store.dispatch('login', { user, requestOptions })        
        // }

        authenticate: function() {
            console.info('thiss', this)
            this.$auth.authenticate('google').then(function (response) {
                console.log("Works!", response);
            }).catch(function(error) {
                console.log(error);
            });
        }
    }

}
</script>
