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

## Vuex - we want to store an array of articles not just in a component, each time loading them when we visit the page, but store them in state (in store/ folder)
if we have an array there already - we will not request data from server

## TODO:
- ~~add navbar;~~ [**DONE** ];
- ~~add data loading from server(endpoint);~~ [**DONE** ];
- fix navbar - move social media icons closer;
- fix navbar - choose a font;
- fix navbar - fix text size;
- fix navbar - render repeating elements (social media icons) in for loop;
- use @ in paths