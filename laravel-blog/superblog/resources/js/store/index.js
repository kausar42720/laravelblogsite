export default{
    // all the below methods from vuex
    state:{
        // category:"hello kausar youre done  this is category",
        category:[],
    },
    // getters use for fetch data form database
    getters:{
        getCategory(state){
            return state.category 
        }
    },
    actions: {
        // this method accept 2 parameters state and payload or context or data
        allcategory(context){
            axios.get('/category')
            .then( (response)=>{
                console.log(response.data)
                context.commit('categories',response.data.categories) 
                //'categories' name you can set any name for commit i just use categories
            })
        }
    },
    mutations: {
        // this categories catach from action: method in allcategory method 
        categories(state,data){
            return state.category = data
        }
    }
}