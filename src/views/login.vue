<template>
    <div>
        <h1>登录界面</h1>
        <div>
            登录界面没使用layout，是一个独立的界面。
        </div>
        <button @click="index">跳回首页</button>
    </div>
</template>

<script>
    export default {
        methods: {
            index: function () {
                this.$router.push({
                    name: 'index'
                });
            }
        }
    };
</script>

<style scoped>

</style>
