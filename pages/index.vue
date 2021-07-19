<template>
  <section>
    <h1>Articles</h1>

    <ul>
      <li v-for="article of articles" :key="article.id">
          <a href="#" @click.prevent="openArticle(article)">{{article.headline}}</a>
          <!-- Article {{article}} -->
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: () => ({
    articles: []
  }),
  async mounted() {
    this.articles = await this.$axios.$get('https://services.postimees.ee/rest/v1/sections/81/editorsChoice/articles?limit=5')
  }
}
</script>
