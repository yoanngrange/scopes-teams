var app = new Vue({
    el: '#segmentsMenu',
    data: {
        segments: []
    },
    mounted: function(){
       this.loadJobs(); 
    },
    methods: {
        loadJobs: function(){
            
            // Init variables
            var self = this
            var app_id = "appI8mGMmI9cMIeOj";
            var app_key = "keyGvoGBlFFUKFnJC";
            this.segments = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/segments?view=Grid%20view",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.segments = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})

var app = new Vue({
    el: '#segments',
    data: {
        segments: []
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
            this.segments = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/segments?view=Grid%20view",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.segments = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})
