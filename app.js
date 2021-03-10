const app = Vue.createApp({
    data() {
        return {
            myTitle: 'Старт Vue',
            vueLinck: 'https://vuejs.org/',
            goalA: 'Закінчити курс і Вивчити Вю',
            goalB: '<h3>Закінчити курс і написати сайт на Вю</h3>',
            yourName: 'Sergii',
            yourAge: 30,
            linkPhoto: 'https://photo-works.net/images/effects-2/effect-2-5.jpg',
            inputValue: ''
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue'
            } else {
                return 'Вчу Vue'
            }
        },
        goal() {
            const randomGoal = Math.random();
            if (randomGoal < 0.5) {
                return this.goalA
            } else {
                return this.goalB
            }
        }
    }  
});

app.mount('#app')