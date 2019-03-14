<template>
    <div>
        <!--头部-->
        <mt-header fixed title="软件五班"></mt-header>
       <br>
       <br>
        <!--中间-->
        <router-view></router-view>
        <!--底部导航-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/cart">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">用户</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/seach">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="less">
.mint-header{
    height: 80px;
}
.v-enter{
    option:0;
    transform: translateX(100px);
}
.v-enter-to{
    option:0;
    transform: translateX(-100px);
}
.v-enter-active{
    option:0;
    transform: translateX(100px);
}
</style>