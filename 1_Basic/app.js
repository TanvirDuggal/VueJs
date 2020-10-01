const app = {
    data(){
        return{
            goals        : [],
            enteredValue : ''
        }
    },
    addGoals(){
        this.goals.push(this.enteredValue);
    }
}

Vue.createApp(app).mount('#app');