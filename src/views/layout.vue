<template>
    <div>
        <div class="navbar">这是layout中的navbar</div>
        <keep-alive>
            <div>
                <router-view/>
            </div>
        </keep-alive>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="less">
    .navbar {
        height: 55px;
        background: #ccc;
    }
</style>
