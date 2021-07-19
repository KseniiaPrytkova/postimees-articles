<template>
  <section>
    <h1>{{pageTitle}}</h1>

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
  async asyncData({$axios}) {
    const articles = await $axios.$get('https://services.postimees.ee/rest/v1/sections/81/editorsChoice/articles?limit=5')
    return {articles}
  },
  data: () => ({
    pageTitle: 'Articles'
  })
}
</script>
