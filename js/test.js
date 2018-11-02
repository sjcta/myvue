// VUE main script
// require('my_components.js');


new Vue({
  el:'#App',

  data: {
    title:'This is a title for VUE test.',
    myNavItems: [
      { title: 'First Navi', url:'#1' },
      { title: 'Sec Navi', url:'#2' },
      { title: 'Last Navi', url:'#3' }
    ],
    myNavItems2: [
      { title: 'abc', url:'#abc' },
      { title: 'ddd', url:'#ddd' },
      { title: 'eee', url:'#eee' }
    ],
    myName: '<h2>hello Jeson</h2>',
    newsBody: [],
    url: null

  },
  beforeCreate: function(){
  },
  created: function() {

    this.url = "temp/new2.html";
    this.getContents('title');

    console.log();


  },
  methods:{
    getContents: function(loca) {

      let self = this;
      var _data = "";

      axios.get(this.url)
          .then(function( response ){

              var obj = new Object();

              obj[loca] = response.data;

              self.newsBody.push(obj);
          })
          .catch(function (error) {
              self.newsBody = error
          });
    }

  },
  computed: {

  }
});


