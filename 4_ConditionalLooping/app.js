const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      goalEntered : '' 
    };
  },
  methods: {
    getGoals(){
      this.goals.push(this.goalEntered);
      this.goalEntered = '';
    },
    removeGoal(index){
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');