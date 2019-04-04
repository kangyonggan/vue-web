<template>
    <div class="form-group">
        <div class="form-label">
            <label>{{label}}</label>
        </div>
        <div class="form-control">
            <input :type="type" @input="onInput" :placeholder="placeholder ? placeholder : '请输入' + label"/>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';

    const AppInput = {
        props: {
            type: {
                required: false,
                type: String,
                default: 'text'
            },
            label: {
                required: true,
                type: String
            },
            placeholder: {
                required: false,
                type: String,
                default: ''
            }
        },
        methods: {
            onInput: function (e) {
                this.$emit('input', e.target.value);
            }
        }
    };

    export default AppInput;

    Vue.component('AppInput', AppInput);
</script>

<style scoped lang="less">
    .form-group {
        margin-top: 20px;
    }

    input {
        display: block;
        width: 100%;
        height: 20px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        outline: none;
        margin-top: 5px;
    }
</style>
