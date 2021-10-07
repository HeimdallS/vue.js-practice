const app = Vue.createApp({
    data() {
        return {
            firstName: 'Derek',
            lastName: 'Jones',
            email: 'derek.jones@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        getUser() {
            console.log(this.firstName);
        },
    },
})

app.mount('.app')