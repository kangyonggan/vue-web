<template>
    <div>
        {{content}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content: ''
            };
        },
        mounted() {
            const newsId = this.$route.params.newsId;
            this.content = 'news detail - ' + newsId;
        }
    };
</script>

<style scoped>

</style>
