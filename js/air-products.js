var app = new Vue({
    el: '#products',
    data: {
        products: []
    },
    mounted: function(){
       this.loadProducts(); 
    },
    methods: {
        loadProducts: function(){
            
            // Init variables
            var self = this
            var app_id = "appI8mGMmI9cMIeOj";
            var app_key = "keyGvoGBlFFUKFnJC";
            this.products = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/products?view=AllProducts",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.products = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})