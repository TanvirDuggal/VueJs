const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name   : '',
      fName  : ''
    };
  },
  watch:{
    name(value){
      this.name = 'My name is : ' + value;
    } 
  },
  computed:{
    fullName(){
      if(this.fName  == ''){
        return '';
      }
      return this.fName + ' ' + 'Duggal'; 
    }
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
     
    },
    resetValue(){
      this.name = '';
      this.fName = '';
    }
  },
});

app.mount('#events');
