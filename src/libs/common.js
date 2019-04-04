import Vue from 'vue';

// 定义全局方法
Vue.prototype.error = error;
Vue.prototype.success = success;
Vue.prototype.warning = warning;

/**
 * 错误
 *
 * @param respMsg
 */
function error(respMsg) {
    this.$Notice.error({
        title: '错误',
        desc: respMsg,
        duration: 4
    });
}

/**
 * 成功
 *
 * @param respMsg
 */
function success(respMsg) {
    this.$Notice.success({
        title: '消息',
        desc: respMsg
    });
}

/**
 * 警告
 *
 * @param respMsg
 */
function warning(respMsg) {
    this.$Notice.warning({
        title: '警告',
        desc: respMsg,
        duration: 3
    });
}
