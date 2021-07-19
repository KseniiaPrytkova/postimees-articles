# postimees-articles

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