

// axios
//     .get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then((response) => {

//         console.log(response);
//         console.log(response.data);
//         console.log(response.data.response);
//     });




const { createApp } = Vue

createApp({
    data() {
        return {

            emailsArray: [],

        }
    },

    methods: {

        getEmails() {

            for (let i = 0; i < 10; i++) {

                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {

                        const result = response.data.response;

                        console.log(result + " il cui indice è :" + [i]);

                        this.emailsArray.push(result)

                        console.log(this.emailsArray);
                    });

            };
        },
    },

    mounted () {

        this.getEmails();
    }

}).mount('#app')
