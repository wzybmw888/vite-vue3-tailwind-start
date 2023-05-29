<template>
    <div class="relative flex flex-col h-screen">
        <div class="h-full hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <!-- 侧边栏内容 -->
            <sidebar/>
        </div>
        <div class="lg:pl-72 ">
            <headerbar/>
        </div>
        <div class="lg:pl-72 pb-36">
            <mainbar/>
        </div>
        <div class="lg:pl-72 fixed bottom-0 left-0  w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent
        md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2">
            <footerbar/>
        </div>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Mainbar from "./components/Mainbar.vue";
import Headerbar from "./components/Headerbar.vue";
import Footerbar from "./components/Footerbar.vue";

export default {
    components: {
        Headerbar,
        Mainbar,
        Sidebar,
        Footerbar,
    }
};
</script>
