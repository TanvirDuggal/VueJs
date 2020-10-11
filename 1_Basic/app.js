const app = {
    data(){
        return{
            courseGoal : "this is a big course",
            link       : "http://www.google.com",
            res1       : "<h2>  Heading 1 </h2>",
            res2       : "<h2>  Heading 2 </h2>"
        };
    },
    methods:{
        outputGoal() {
            const randVal = Math.random();
            if (randVal < 0.5){
                return "less that 0.5";
            }
            else{
                return "more than 0.5";
            }
        },
        htmlStyle(){
            const val = Math.random();
            if (val < 0.5){
                return this.res1;
            }
            else{
                return this.res2;
            }
        }
    }
}

Vue.createApp(app).mount('#app');