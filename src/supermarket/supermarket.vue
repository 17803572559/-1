<template>
    <div>
        <br>
        <br>
        <mt-navbar v-model="selected" to="/home">
            <mt-tab-item id="1">热门推荐</mt-tab-item>
            <mt-tab-item id="2">食品饮料</mt-tab-item>
            <mt-tab-item id="3">纸品清洁</mt-tab-item>
        </mt-navbar>
        <!--<mt-tab-container v-model="selected">-->
            <!--<mt-tab-container-item id="1">-->
                <!--<mt-cell v-for="n in 10" :title="'内容 ' + n" />-->
            <!--</mt-tab-container-item>-->
            <!--<mt-tab-container-item id="2">-->
                <!--<mt-cell v-for="n in 4" :title="'测试 ' + n" />-->
            <!--</mt-tab-container-item>-->
            <!--<mt-tab-container-item id="3">-->
                <!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
            <!--</mt-tab-container-item>-->
        <!--</mt-tab-container>-->
        <!--中部-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../image/3.png" height="220" width="220"/>
                    <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../image/4.png" height="220" width="220"/>
                <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../image/5.png" height="288" width="470"/>
                <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../image/6.png" height="220" width="220"/>
                <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../image/7.png" height="220" width="220"/>
                <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">

                <div class="mui-media-body">Phone</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-gear"></span>
                <div class="mui-media-body">Setting</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-info"></span>
                <div class="mui-media-body">about</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-more"></span>
                <div class="mui-media-body">more</div></a></li>
        </ul>


        <!--脚部-->
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less">
    .supermarket{
        margin-top: 100px;
        color: red;
    }
</style>