import Vue from 'vue'
import hello from './component/hello.vue'
import hello1 from './component/hello1.js'
require('./css/normal.css')
require('./css/aaa.less')

new Vue({
    el: "#app",
    // template: '<hello />',
    // components: {
    //     hello,
    //     hello1
    // },
    // render:h=>h(hello1),
    render: h => h(hello)
})