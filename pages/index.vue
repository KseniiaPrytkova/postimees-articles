<template>
  <section>
      <Article
        v-for="(article, index) of articles"
        :key="index"
        :header="article.headline"
        :image="article.thumbnail.sources.landscape.large"
        :content="formatArticleLeads[index]"
        :counter="index + 1"
        :id="article.id"
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
  computed: {
    articles() {
        // console.log(this.$store.getters['articles/articles'])
        return this.$store.getters['articles/articles']
    },
    formatArticleLeads() {
        const articleLeadFormatted = this.articles.map(article => {
          if (!article.articleLead || article.articleLead.length === 0)
            // so default value of prop will be displayed
            return ;

          let lead = article.articleLead[0].html
          lead = lead.replace(/(<([^>]+)>)/ig, '')

          return lead
        })

        return articleLeadFormatted
    }
  }
}
</script>
