
// Compnents
Vue.component('bt-set', {
              props:{},
              data:function () {
                return {}
              },
              template: "#buttonTemp"
})


Vue.component('nav-set', {
              props:{
                items: Array,
                isHorizon: Boolean
              },
              data:function () {
                return {
                  // tp :  this.$parent.myName
                }
              },
              created: function(){
                //this.template = this.$parent.getTemplate('comp_template/nav_set.html')
              },
              template: '#navTemp'
})

Vue.component('test-set', function(resolve) {
      console.log('123');

})


