<template>
    <div>
        <h1>文章列表界面</h1>
        <div>
            使用了layout
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
