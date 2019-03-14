<template>
    <div class="member">
        <br>
        <br>
        <h1>这是会员组件</h1>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-button type="primary" size="large" @click="use">登录</mt-button>
    </div>
</template>
<script>
    //提示信息
    import { Toast } from 'mint-ui';
    export default {
        date(){
            return {}
        },
        methods:{
            use:Toast( '登陆成功')
        }
    }

</script>

<style>
    .member{

    }
</style>