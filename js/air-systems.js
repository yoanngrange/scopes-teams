var app = new Vue({
    el: '#systemsMenu',
    data: {
        systems: []
    },
    mounted: function(){
       this.loadSystems(); 
    },
    methods: {
        loadSystems: function(){
            
            // Init variables
            var self = this
            var app_id = "appI8mGMmI9cMIeOj";
            var app_key = "keyGvoGBlFFUKFnJC";
            this.systems = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/systems?view=Grid%20view",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.systems = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})

var app = new Vue({
    el: '#systems',
    data: {
        systems: []
    },
    mounted: function(){
        this.loadSegments(); 
    },
    methods: {
        loadSegments: function(){
            
            // Init variables
            var self = this
            var app_id = "appI8mGMmI9cMIeOj";
            var app_key = "keyGvoGBlFFUKFnJC";
            this.systems = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/systems?view=Grid%20view",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.systems = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})