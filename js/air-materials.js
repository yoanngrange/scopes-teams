var app = new Vue({
    el: '#materialsMenu',
    data: {
        materials: []
    },
    mounted: function(){
       this.loadMaterials(); 
    },
    methods: {
        loadMaterials: function(){
            
            // Init variables
            var self = this
            var app_id = "appI8mGMmI9cMIeOj";
            var app_key = "keyGvoGBlFFUKFnJC";
            this.materials = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/materials?view=Grid%20view",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.materials = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})

var app = new Vue({
    el: '#materials',
    data: {
        materials: []
    },
    mounted: function(){
       this.loadMaterials(); 
    },
    methods: {
        loadMaterials: function(){
            
            // Init variables
            var self = this
            var app_id = "appI8mGMmI9cMIeOj";
            var app_key = "keyGvoGBlFFUKFnJC";
            this.materials = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/materials?view=Grid%20view",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.materials = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})