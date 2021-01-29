<template>
    <form @submit.prevent="submitData">
        <div>
            <label> Name </label>
            <input type="text" v-model="enteredName"/>
        </div>
        <div>
            <label> Email </label>
            <input type="email" v-model="enteredEmail"/>
        </div>
        <div>
            <label> Phone </label>
            <input type="tel" v-model="enteredPhone"/>
        </div>
        <div>
            <button> Add Contact </button>
        </div>
    </form>
</template>

<script>
export default {
  methods: {
      submitData(){
          this.$emit('add-contact', this.enteredName, this.enteredEmail, this.enteredPhone)
      }

  },
    emits:['add-contact'],
    data(){
        return{
            enteredName  : '',
            enteredEmail : '',
            enteredPhone : ''
        }
    }
}
</script>