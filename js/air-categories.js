var app = new Vue({
    el: '#categoriesMenu',
    data: {
        categories: []
    },
    mounted: function(){
       this.loadCategories(); 
    },
    methods: {
        loadCategories: function(){
            
            // Init variables
            var self = this
            var app_id = "appI8mGMmI9cMIeOj";
            var app_key = "keyGvoGBlFFUKFnJC";
            this.categories = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/categories?view=Grid%20view",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.categories = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})

var app = new Vue({
    el: '#categories',
    data: {
        categories: []
    },
    mounted: function(){
       this.loadCategories(); 
    },
    methods: {
        loadCategories: function(){
            
            // Init variables
            var self = this
            var app_id = "appI8mGMmI9cMIeOj";
            var app_key = "keyGvoGBlFFUKFnJC";
            this.categories = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/categories?view=Grid%20view",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.categories = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})