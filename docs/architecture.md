
# Architecture

```
vue-naruto-boilerplate
├─ .env.development
├─ .env.mock
├─ .env.production
├─ .husky
│    └─ commit-msg
├─ .vscode
│    ├─ extensions.json
│    └─ settings.json
├─ docs
│    └─ architecture.md
├─ public
│    ├─ favicon.ico
│    ├─ index.html
│    └─ mockServiceWorker.js
├─ src
│    ├─ App.vue
│    ├─ app.config.json
│    ├─ layouts
│    ├─ main.js
│    ├─ mocks
│    ├─ plugins
│    ├─ routes
│    ├─ stores
│    └─ views
└─ vue.config.js
```

## `.env.[development | mock | production]`

Project environment variables, See [Vue CLI Modes and Environment Variables](https://cli.vuejs.org/guide/mode-and-env.html) for more.


## .husky

Husky configuration.

## .vscode

Project configuration about VSCode IDE.

## docs

Documentations.

## public

Build system will skip processing assets in this folder.  

## src

Source code folders.

### App.vue

Root vue component.

### app.config.json

App specific metadata, such as html title and project description.

### layouts

Views layout.

### main.js

The entry point to our application, where we create global Vue instance and mount it to the DOM.

### mocks

Mocks api handlers lives, see [msw basis](https://mswjs.io/docs/basics) for more.

### plugins

Global plugins lives.

### routes

Vue router routes config lives, see [Vue-Router doc](https://router.vuejs.org/guide/essentials/named-routes.html) for more.

### stores

Global state management lives. See the [pinia doc](https://pinia.vuejs.org/introduction.html) for more.

### views

Global page container views lives.

## vue.config.js

Vue CLI config, See [Vue CLI Config](https://cli.vuejs.org/config/) for more.

