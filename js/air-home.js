var app = new Vue({
    el: '#home',
    data: {
        home: []
    },
    mounted: function(){
       this.loadHome(); 
    },
    methods: {
        loadHome: function(){
            
            // Init variables
            var self = this
            var app_id = "appI8mGMmI9cMIeOj";
            var app_key = "keyGvoGBlFFUKFnJC";
            this.home = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/home?view=Grid%20view",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.home = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})