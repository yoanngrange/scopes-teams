var app = new Vue({
    el: '#scopes',
    data: {
        scopes: []
    },
    mounted: function(){
       this.loadScopes(); 
    },
    methods: {
        loadScopes: function(){
            
            // Init variables
            var self = this
            var app_id = "appiSUVRRDSlPpl3w";
            var app_key = "keyGvoGBlFFUKFnJC";
            this.scopes = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/scopes_teams?view=Grid%20view",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.scopes = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})