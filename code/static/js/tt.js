var app = new Vue({
    el: '#ttapp',
    //delimiters: ['${', '}'],
    data: {
        testText: ''
    },
    
    methods: {
        refresh: function(){
            this.$http.get('/data').then((response)=>{this.testText = response.body.name;});
        },

        postData: function(){
            newName = this.testText;
            resultObject = {'name': newName, 'age': 23};
            this.$http.post('/data', resultObject).then();
        }
    }
})