<template>
    <div>
        <h1>首页</h1>
        <div>
            <button @click="login">登录</button>
            <button @click="article">文章列表</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            login: function () {
                this.$router.push({
                    name: 'login'
                });
            },
            article: function () {
                this.$router.push({
                    name: 'article'
                });
            }
        }
    };
</script>

<style scoped>

</style>
