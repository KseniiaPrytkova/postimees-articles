<template>
  <section>
      <Article
        v-for="(article, index) of articles"
        :key="index"
        :header="article.headline"
        :image="article.thumbnail.sources.landscape.large"
        :content="article.articleLead[0].html"
        :counter="index + 1"
      />
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
      console.log(this.$store.getters['articles/articles'])
        return this.$store.getters['articles/articles']
    }
  }
}
</script>

