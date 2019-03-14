//导入VUE包
import Vue from 'vue';
//导入路由VueRouter
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import home from "./components/tabbar/home.vue";
import cart from "./components/tabbar/cart.vue";
import member from "./components/tabbar/member.vue";
import search from "./components/tabbar/seach.vue";
import supermarket from "./supermarket/supermarket.vue"

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {
            path:'/home',component:home,
        },
        {path:'/cart',component:cart},
        {path:'/member',component:member},
        {path:'/seach',component:search},
        {path:'/home/supermarket',component:supermarket}
    ],
    linkActiveClass:"mui-active"
})
export default router;