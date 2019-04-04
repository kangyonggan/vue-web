<template>
    <div>
        <ul class="news">
            <li v-for="news in newsList" :key="news.newsId">
                <router-link :to="'/news/' + news.newsId">{{news.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newsList: []
            };
        },
        mounted() {
            this.http.get('newsList').then(res => {
                this.newsList = res.data.newsList;
            }).catch(res => {
                alert(res.respMsg);
            });
        }
    };
</script>

<style scoped>
    .news li a {
        line-height: 40px;
    }
</style>
