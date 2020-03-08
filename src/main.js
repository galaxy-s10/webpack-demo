const { add, mul } = require('./js/utils')
require('./css/normal.css')
require('./css/aaa.less')

import Vue from 'vue'

const app = new Vue({
    el: "#app",
    template:
        `<div>
    {{message}}
    </div>
    `,
    data: {
        message: 'hello vue'
    }
})