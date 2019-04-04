<template>
    <AppForm action="login" :model="user" :rules="rules" @success="success">
        <AppInput v-model="user.username" label="用户名" />
        <AppInput v-model="user.password" label="密码" type="password"/>
    </AppForm>
</template>

<script>
    export default {
        data() {
            return {
                user: {},
                rules: {
                    username: [
                        {required: true, message: '用户名为必填项', trigger: 'blur'},
                        {pattern: /^[a-zA-Z0-9]{5, 20}$/, message: '用户名由5至20位的字母或数字组成', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码为必填项', trigger: 'blur'},
                        {pattern: /^[a-zA-Z0-9_]{8,20}$/, message: '密码由8至20位的字母、数字或下划线组成', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            success: function (data) {
                console.log(data);
                console.log(this.user);
            }
        }
    };
</script>

<style scoped>

</style>
