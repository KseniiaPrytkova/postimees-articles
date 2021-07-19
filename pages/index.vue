<template>
  <section>
    <h1>Articles</h1>

    <ul>
      <li v-for="article of 5" :key="article">
          <!-- <a href="#" @click.prevent="openUser(user)">{{user.name}}</a> -->
          Article {{article}}
      </li>
    </ul>
  </section>
</template>

<script>
export default {}
</script>
