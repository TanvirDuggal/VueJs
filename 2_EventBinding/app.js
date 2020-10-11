const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name   : '',
      fName  : ''
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    Sub(num){
      this.counter -= num;
    },
    setName(event){
      this.name = event.target.value;
    },
    fullName(event, lastname){
      this.fName = event.target.value + ' '+ lastname;
    },
    submitForm(){
      alert("form submitted")
    }
  },
});

app.mount('#events');
