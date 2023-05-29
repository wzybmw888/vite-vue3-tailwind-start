<template>
    <div class="group w-3/4 m-auto  text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 dark:bg-gray-800">
        <div class="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl md:py-6 lg:px-0 m-auto">
            <div class="flex-shrink-0 flex flex-col relative items-end">
                <div class="w-[30px]">
                    <div class="relative flex"><span
                            style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                            alt="" aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2738%27%20height=%2738%27/%3e"
                            style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                            alt="User"
                            src="https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtcJwOY39vo5wE2nLFYukFW4JNolNdDXPKgxYPsx%3Ds96-c&w=48&q=75"
                            decoding="async" data-nimg="intrinsic" class="rounded-sm"
                            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"></span>
                    </div>
                </div>
                <div class="text-xs flex items-center justify-center gap-1 invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible !invisible">
                    <button disabled="" class="dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400">
                        <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24"
                             stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3" height="1em" width="1em"
                             xmlns="http://www.w3.org/2000/svg">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <span class="flex-grow flex-shrink-0">1 / 1</span>
                    <button disabled="" class="dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400">
                        <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24"
                             stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3" height="1em" width="1em"
                             xmlns="http://www.w3.org/2000/svg">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                <div class="flex flex-grow flex-col gap-3">
                    <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap break-words">{{question}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChatBox2",
    props:{
        question:{
            type:String,
            require:true
        }
    }
}
</script>

<style scoped>

</style>