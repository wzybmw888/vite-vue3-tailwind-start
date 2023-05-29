<template>
    <form class="mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div class="relative flex h-full flex-1 items-stretch md:flex-col">
            <div class="">
                <div class="h-full flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center">
                    <button class="btn relative btn-neutral border-0 md:border" v-if="isResponse">
                        <div class="flex w-full gap-2 items-center justify-center">
                            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24"
                                 stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 flex-shrink-0"
                                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="1 4 1 10 7 10"></polyline>
                                <polyline points="23 20 23 14 17 14"></polyline>
                                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                            </svg>
                            Regenerate response
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
                <textarea v-model="question" id="prompt-textarea" tabindex="0" rows="1"
                          placeholder="Send a message..."
                          class="m-0 w-full shadow-sm resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0"
                          style="max-height: 200px; height: 24px; overflow-y: hidden;">
                </textarea>
                <button @click="sendQuestion" type="button"
                        class="absolute  p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100  enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                         stroke-linejoin="round" class="h-4 w-4 mr-1" height="1em" width="1em"
                         xmlns="http://www.w3.org/2000/svg">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </div>
        </div>
    </form>
    <div class="px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3"><span>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <a
            href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noreferrer"
            class="underline">ChatGPT May 24 Version</a></span></div>
</template>

<script>
import {ref} from "vue";
import {useStore} from "vuex";

export default {
    name: "Footerbar",
    setup() {
        const question = ref("")
        const store = useStore()
        const isResponse = ref(false)
        const sendQuestion = () => {
            store.dispatch('variable/sendQuestions', question.value)
            isResponse.value = true
        }
        return {question,isResponse, sendQuestion}
    }
}
</script>

<style scoped>

</style>