export const state = () => ({
    articles: []
})

// changes the state, mutations are objects
export const mutations = {
    setArticles(state, articles) {
        state.articles = articles
    }
}

// here we will describe action that will load data from the server 
export const actions = {
    async fetch({commit}) {
        const articles = await this.$axios.$get('https://services.postimees.ee/rest/v1/sections/81/editorsChoice/articles?limit=5')
        commit('setArticles', articles)
    }
}

// s - state
export const getters = {
    articles: s => s.articles
}