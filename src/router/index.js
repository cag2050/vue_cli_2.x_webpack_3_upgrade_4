import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: () => import('@/components/HelloWorld.vue')
        },
        {
            path: '/test',
            name: '',
            component: () => import('@/views/Test.vue')
        }
    ]
})
