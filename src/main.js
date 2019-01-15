// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    axios.get('/static/json/build_str.json?v=' + new Date().getTime().toString())
        .then(res => {
            let newBuildStr = res.data.build_str
            let oldBuildStr = localStorage.getItem('build_str') || ''
            if (oldBuildStr !== newBuildStr) {
                console.log('auto refresh')
                localStorage.setItem('build_str', newBuildStr)
                location.reload()
            }
        })
    next()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
