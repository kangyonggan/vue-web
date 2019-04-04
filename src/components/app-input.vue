<template>
    <FormItem :prop="prop" :label="label">
        <Input :type="type" v-model="model[prop]" :placeholder="placeholder ? placeholder : '请输入' + label" :clearable="clearable" :readonly="readonly"/>
    </FormItem>
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
            model: {
                required: true,
                type: Object
            },
            prop: {
                type: String
            },
            label: {
                required: true,
                type: String
            },
            placeholder: {
                required: false,
                type: String,
                default: ''
            },
            clearable: {
                type: Boolean,
                default: true
            },
            readonly: {
                type: Boolean,
                default: false
            }
        }
    };

    export default AppInput;

    Vue.component('AppInput', AppInput);
</script>

<style lang="less">

</style>
