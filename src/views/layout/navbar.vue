<template>
    <div class="navbar">
        <div class="content">
            <ul class="category">
                <li v-for="category in categories" :key="category.categoryCode">
                    <router-link :to="'/' + category.categoryCode">{{category.categoryName}}</router-link>
                </li>
            </ul>

            <ul class="user">
                <li>
                    <router-link to="/login">登录</router-link>
                </li>
                <li>
                    <router-link to="/register">注册</router-link>
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
            color: #595959;
            text-align: center;
            height: 58px;
            line-height: 58px;
            display: inline-block;
            width: 90px;
            border-bottom: 2px solid #f2f2f2;

            &:hover {
                border-bottom: 2px solid #f60;
            }
        }
    }

    .user {
        float: right;
        li {
            float: left;

            a {
                height: 58px;
                line-height: 58px;
                display: inline-block;
                width: 70px;
                text-align: center;
                border-bottom: 2px solid #f2f2f2;

                &:hover {
                    border-bottom: 2px solid #f60;
                }
            }
        }
    }
</style>
