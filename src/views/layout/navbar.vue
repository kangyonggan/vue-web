<template>
    <div class="navbar">
        <div class="content">
            <ul class="category">
                <li v-for="category in categories" :key="category.categoryCode">
                    <AppLink :text="category.categoryName" :name="category.categoryCode"/>
                </li>
            </ul>

            <ul class="user">
                <li>
                    <AppLink text="登录" name="login"/>
                </li>
                <li>
                    <AppLink text="注册" name="register"/>
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
