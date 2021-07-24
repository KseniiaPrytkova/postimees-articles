# postimees-articles

## Set up project:
- create Nuxt.js project (https://github.com/nuxt/create-nuxt-app):
```
$ npm init nuxt-app@latest <my-project>
```

- connect Bootstrap to the project (https://getbootstrap.com/docs/3.4/):
```
$ npm i bootstrap
```
and in `nuxt.config.js`:
```
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],
```
build:
```
$ npm run dev
```

- add first component (Navbar):
`cd components` ---> `touch Navbar.vue`
``` vue
<template>
    <!-- Image and text -->
    <nav class="navbar navbar-light bg-primary">
        <a class="navbar-brand" href="#">
            <img src="../static/logo.png" class="d-inline-block align-top" alt="Postimees">
        </a>
    </nav>
</template>
```
and connect it with layout (default.vue):
``` vue
<template>
    <div>
        <Navbar />

        <main>
            <div class="container">
                <nuxt />
            </div>
        </main>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    components: {
        Navbar
    }
}
</script>
```

## Modules:
https://github.com/nuxt-community/awesome-nuxt (here are modules we can use)

- axios (https://axios.nuxtjs.org/setup)
module providing the ability to work with asynchronous AJAX requests in promises mode; `$axios` - system variable

```
$ npm install @nuxtjs/axios
```
connect this module with the application; in `nuxt.config.js`:
```
  modules: [
    '@nuxtjs/axios'
  ],
```

## Vuex
We want to store an array of articles not just in a component, each time loading them when we visit the page, but store them in state (in `store/ folder`).
If we have an array there already - we will not request data from server.
`store/articles.js`:
``` vue 
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
```

## Change default font for the whole project:
Took similar to `tabac sans bold` from google fonts: https://fonts.google.com/specimen/Arapey?category=Serif#standard-styles

`Select this style` -> right panel: `@import` and `CSS rules`

in `layouts/default.vue`:
``` vue
<style>
    @import url('https://fonts.googleapis.com/css2?family=Arapey&family=Cinzel:wght@500&family=Cormorant+Garamond&family=Festive&family=Open+Sans:wght@300&display=swap');
    html, body {
        font-family: 'Arapey', serif;
    }
</style>
```

## TODO:
- ~~add navbar;~~ [**DONE** ];
- ~~add data loading from server(endpoint);~~ [**DONE** ];
- fix navbar - move social media icons closer;
- fix navbar - choose a font;
- fix navbar - fix text size;
- fix navbar - render repeating elements (social media icons) in for loop;
- use @ in paths (nuxt root folder pointer);
- ~~jumbotron - style round button on click; add path;~~ [**DONE** ];
- ~~jumbotron - add data component for mobile; format text for mobile;~~ [**DONE** ];
- find `tabac sans bold`;
- one code style - use bootstrap classes (`p-0` instead of `padding: 0`);
- style elements like on layouts (padding, spacing etc);
- ~~delete `<p>` from string with article content;~~ [**DONE** ];
- apply different images for corresponding screen sizes;
- ~~add links to articles;~~ [**DONE** ];
- ~~add chess order(like on template);~~ [**DONE** ];
- add custom date format;
- add aditional icon on jumbotron when mobile;
- ~~darken pictures, if a light picture will come from the server text will not be visible;~~ [**DONE** ];
- find out how to not dublicate circle svg
- write test cases;
- deploy on herokuapp;
