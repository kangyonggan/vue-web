<template>
    <Form ref="form" class="form" :model="model" :rules="rules">
        <slot></slot>

        <FormItem>
            <Button @click="onSubmit" :loading="loading" long>登录</Button>
        </FormItem>
    </Form>
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
        data() {
            return {
                loading: false
            };
        },
        methods: {
            /**
             * 表单提交
             */
            onSubmit: function () {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.isLoading = true;
                        this.http.http(this.method, this.action, this.model).then(data => {
                            this.$emit('success', data);
                            this.isLoading = false;
                        }).catch(respMsg => {
                            this.$emit('failure', respMsg);
                            this.error(respMsg);
                            this.isLoading = false;
                        });
                    }
                });
            }
        }
    };

    export default AppForm;

    Vue.component('AppForm', AppForm);
</script>

<style scoped lang="less">
    .form {
        width: 600px;
        margin: 20px auto;
    }

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
</style>
