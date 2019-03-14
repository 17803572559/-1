<template>
    <div>
        <!--焦点图-->
        <br>
        <br>
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../image/1.png" height="500" width="1130"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../image/2.png" height="500" width="1130"/>
            </mt-swipe-item>
        </mt-swipe>

        <!--菜单列表-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/supermarket">
                    <img src="../../img/menu1.png"/>
                <div class="mui-media-body">超市</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <img src="../../img/menu2.png"/>
                <div class="mui-media-body">海外淘</div>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <img src="../../img/menu3.png"/>
                <div class="mui-media-body">服饰</div>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <img src="../../img/menu4.png"/>
                <div class="mui-media-body">生鲜</div>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <img src="../../img/menu5.png"/>
                <div class="mui-media-body">9.9包邮</div>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <img src="../../img/menu6.png"/>
                <div class="mui-media-body">领劵</div>
            </li>
        </ul>
    </div>

</template>

<script>

</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 500px;
    }
    .mint-swipe-item:nth-child(1){
        text-align: center;
    }
    .mint-swipe-item:nth-child(2){
        text-align: center;
    }
    .mui-table-view-cell{

    }
</style>