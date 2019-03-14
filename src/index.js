//导入VUE包
import Vue from 'vue';
//导入APP组件
import app from './App.vue';
import './dist/css/mui.min.css';
import './dist/js/mui.min.js';
import './dist/css/icons-extra.css';
//这是输入框和按钮
import { Field,Button } from 'mint-ui';
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
//导入Mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//这是焦点图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import { Tabbar } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);

import router from './router.js'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router//挂载

})