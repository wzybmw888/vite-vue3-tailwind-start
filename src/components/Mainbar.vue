<template>
    <div class="">
        <div v-if="messages.length===1">
            <chat-box></chat-box>
        </div>
        <div v-else class="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
            <div class="flex-1 overflow-hidden">
                <div class="react-scroll-to-bottom--css-xflni-79elbk h-full dark:bg-gray-800">
                    <div class="react-scroll-to-bottom--css-xflni-1n7m0yu">
                        <div class="chatgpt flex flex-col text-sm dark:bg-gray-800">
                            <template v-for="message in messages.slice(1,)" :key="message.question">
                                <chat-box2 :question="message.question"></chat-box2>
                                <chat-box-response :response="message.response"></chat-box-response>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {reactive,  watch} from "vue";
import {useStore} from "vuex";

import ChatBox from "./ChatBox.vue";
import ChatBox2 from "./ChatBoxQuestion.vue";
import ChatBoxResponse from "./ChatBoxResponse.vue";

const store = useStore();
const messages = reactive([{}])
console.log(messages.slice(-1))
watch(
    () => store.state.variable.questions,
    (newQuestions) => {
        messages.push({
            "question": newQuestions,
            "response": "This is the response from ChatGPT"
        })
        console.log(messages)
    }
);


</script>
