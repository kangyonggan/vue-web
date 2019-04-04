<template>
    <a @click="onClick">{{text}}</a>
</template>

<script>
    import Vue from 'vue';

    const AppLink = {
        props: {
            text: {
                required: true,
                type: String
            },
            name: {
                required: false,
                type: String,
                default: ''
            }
        },
        methods: {
            onClick: function () {
                if (this.name) {
                    this.$router.push({
                        name: this.name
                    });
                }

                return false;
            }
        }
    };

    export default AppLink;

    Vue.component('AppLink', AppLink);
</script>

<style scoped lang="less">
    a {
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        color: #333;
    }
</style>
