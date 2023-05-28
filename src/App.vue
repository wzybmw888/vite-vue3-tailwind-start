<template>
    <div class="flex flex-col h-screen">
        <div class="h-full hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <!-- 侧边栏内容 -->
            <sidebar/>
        </div>
        <div class="lg:pl-72">
            <headerbar/>
        </div>
        <div class="lg:pl-72 lg:py-10 bg-danger">
            <mainbar/>
        </div>
    </div>


</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Mainbar from "./components/Mainbar.vue";
import Headerbar from "./components/Headerbar.vue";

export default {
    components: {
        Headerbar,
        Mainbar,
        Sidebar
    }
};
</script>
