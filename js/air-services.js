var app = new Vue({
    el: '#servicesMenu',
    data: {
        services: []
    },
    mounted: function(){
       this.loadServices(); 
    },
    methods: {
        loadServices: function(){
            
            // Init variables
            var self = this
            var app_id = "appI8mGMmI9cMIeOj";
            var app_key = "keyGvoGBlFFUKFnJC";
            this.services = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/services?view=Grid%20view",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.services = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})

var app = new Vue({
    el: '#services',
    data: {
        services: []
    },
    mounted: function(){
       this.loadServices(); 
    },
    methods: {
        loadServices: function(){
            
            // Init variables
            var self = this
            var app_id = "appI8mGMmI9cMIeOj";
            var app_key = "keyGvoGBlFFUKFnJC";
            this.services = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/services?view=Grid%20view",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.services = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})