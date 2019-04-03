<template>
    <div class="navbar">
        <div class="content">
            <ul class="category">
                <li v-for="category in categories" :key="category.categoryCode">
                    <a href="javascript:">{{category.categoryName}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                categories: []
            };
        },
        mounted() {
            this.http.get('categories').then(data => {
                this.categories = data.categories;
            }).catch(res => {
                alert(res.respMsg);
            });
        }
    };
</script>

<style scoped lang="less">
    .navbar {
        height: 60px;
        background: #f2f2f2;
        min-width: 1288px;
        color: #595959;
        border-bottom: 1px solid #e5e5e5;
    }

    .category li {
        float: left;

        a {
            height: 58px;
            line-height: 58px;
            display: inline-block;
            width: 90px;
            text-align: center;
            border-bottom: 2px solid #f2f2f2;

            &:hover {
                border-bottom: 2px solid #f60;
            }
        }
    }
</style>
