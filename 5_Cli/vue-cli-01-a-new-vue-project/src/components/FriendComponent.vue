<template>
    <ul>
        <li>
            <h2> {{ name }}  {{ isFav === true ? '(fav)' : '' }}</h2>
            <button @click="toggleDetails"> Show Details </button>
            <ul v-if="dataIsVisible">
                <li> {{ email }} </li>
                <li> {{ phone }} </li>
            </ul>
            <button @click="toggleFav"> TOGGLE FAV </button>
            <button @click="delContact"> Delete Contact </button>
        </li> 
    </ul>
</template>

<script>
export default {
    emits:['toggle-favorite', 'delete-contact'],
    props:{
        id   :{
            type : String,
            required : true
        },
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        phone : {
            type : String,
            required : true
        },
        isFav : {
            type : Boolean,
            required : false
        }
    },
    data(){
        return{
            dataIsVisible:false
        };
    }, 

    methods:{
        toggleDetails(){
            this.dataIsVisible = !this.dataIsVisible;
        },
        showData(){
            console.log("DATA CREATED")
            console.log(this.name)
            console.log(this.email)
            console.log(this.phone)
        },
        toggleFav(){
            this.$emit('toggle-favorite', this.id)
        },
        delContact(){
            this.$emit('delete-contact', this.id)
        }
    }
}
</script>