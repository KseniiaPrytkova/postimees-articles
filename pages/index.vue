<template>
  <section>
    <!-- <h1>{{pageTitle}}</h1> -->
<!-- <div> -->
      <Article
        v-for="(article, index) of articles"
        :key="index"
        :headline="article.headline"
        :image="article.thumbnail.sources.landscape.large"
      />
<!-- </div> -->
  </section>
</template>

<script>
import Article from '@/components/Article'

export default {
  async fetch({store}) {
    if (store.getters['articles/articles'].length === 0) {
        await store.dispatch('articles/fetch')
    }
  },
  components: {
      Article
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

