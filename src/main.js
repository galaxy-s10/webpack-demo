const { add, mul } = require('./js/utils')
require('./css/normal.css')
require('./css/aaa.less')

import Vue from 'vue'
// import com1 from './vue/hello'
import hello from './vue/hello.vue'

new Vue({
    el: "#app",
    template: '<hello />',
    components: {
        hello
    }
})