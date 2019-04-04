<template>
    <form onsubmit="return false" novalidate="novalidate" class="form" :model="model" :rules="rules">
        <slot></slot>

        <div class="actions">
            <button @click="onSubmit">
                提交
            </button>
        </div>
    </form>
</template>

<script>
    import Vue from 'vue';

    const AppForm = {
        props: {
            action: {
                required: true,
                type: String
            },
            model: {
                required: false,
                type: Object
            },
            method: {
                required: false,
                type: String,
                default: 'POST'
            },
            rules: {
                required: false,
                type: Object
            }
        },
        methods: {
            /**
             * 表单提交
             */
            onSubmit: function () {
                this.$emit('success', {});
            }
        }
    };

    export default AppForm;

    Vue.component('AppForm', AppForm);
</script>

<style scoped lang="less">
    .form {
        width: 600px;
        margin: 20px auto 0 auto;
    }

    .actions {
        margin-top: 30px;
        margin-bottom: 20px;
        border-top: 1px solid #eee;

        button {
            margin-top: 20px;
            width: 70px;
            height: 34px;
            background: #fff;
            color: #333;
            padding: 6px 12px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            cursor: pointer;
            outline: none;
            user-select: none;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
    }
</style>
