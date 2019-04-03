<template>
    <div class="layout">
        <div class="container">
            <Navbar/>
            <keep-alive>
                <div class="main content">
                    <router-view/>
                </div>
            </keep-alive>
            <div class="empty"></div>
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Navbar from './navbar';
    import Footer from './footer';

    export default {
        components: {Navbar, Footer}
    };
</script>

<style scoped lang="less">
    .layout {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .container {
        min-width: 1288px;
        min-height: 100%;
        margin-bottom: -60px;
    }

    .empty {
        height: 60px;
    }
</style>
