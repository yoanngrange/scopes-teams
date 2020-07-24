var app = new Vue({
    el: '#pricelists',
    data: {
        pricelists: []
    },
    mounted: function(){
       this.loadPricelists(); 
    },
    methods: {
        loadPricelists: function(){
            
            // Init variables
            var self = this
            var app_id = "appI8mGMmI9cMIeOj";
            var app_key = "keyGvoGBlFFUKFnJC";
            this.pricelists = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/pricelist?view=Grid%20view",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.pricelists = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})