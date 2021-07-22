<template>
  <section>
    <h1>{{pageTitle}}</h1>

    <ul>
      <li v-for="article of articles" :key="article.id">
          <a href="postimees.ee/" @click.prevent="openArticle(article)">{{article.headline}}</a>
          <p>{{article.articleLead[0].html}}</p>
          <!-- Article {{article}} -->
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async fetch({store}) {
    if (store.getters['articles/articles'].length === 0) {
        await store.dispatch('articles/fetch')
    }
  },
  data: () => ({
    pageTitle: 'Articles'
  }),
  computed: {
    articles() {
        return this.$store.getters['articles/articles']
    }
  }
}
</script>
