const { createApp } = Vue;

createApp({
    data() {
        return {
            randomEmails: [],
        }
    },

    created() {
        this.generateRandomEmails()
    },

    methods: {
        generateRandomEmails() {
            for (i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                    this.randomEmails.push(resp.data.response)
                    console.log(resp)
                });
            }
        }
    }
}).mount('#app');