
const state = {
  questions: ''
}

const mutations = {
  SET_QUESTIONS(state, value) {
    state.questions = value
  },
}

const actions = {
  sendQuestions(context,questions){
      context.commit("SET_QUESTIONS",questions)
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};