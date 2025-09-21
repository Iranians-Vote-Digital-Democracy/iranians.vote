## Website setup

### Install dependencies
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Build docker image with version
```dockerfile
docker build --no-cache --progress=plain --build-arg BUILD_VERSION=1.0.0-rc.0 -t freedomtool .
```

### Dealing with env variables
Env variables can be rewritten by [env.is] (./static/env.js) file in runtime. To do so, we need to provide same [env variables](.env.example) there in json format

### Localization (i18n)

The app uses `vue-i18n` (composition API) with Persian (`fa`) as the default locale and English (`en`) as an additional locale.

Files:
* `src/localization/index.ts` – i18n initialization, dynamic locale detection & persistence
* `src/localization/resources.ts` – registers locale message objects
* `src/localization/resources/fa.json` – Persian translations (baseline / most complete)
* `src/localization/resources/en.json` – English translations

Locale selection:
* A language toggle button is shown in the top navigation (`AppNavbar`)
* Selection is persisted in `localStorage` under key `locale`
* Browser language (fa or en) is auto-detected on first visit if no preference stored
* Document `<html dir>` and `lang` attributes auto-update on switch

Adding a new language:
1. Create `src/localization/resources/<code>.json`
2. Import and register it in `resources.ts`
3. (Optional) Add any locale-specific styling / direction logic if RTL
4. Provide full key parity with `fa.json` (missing keys will log a warning in dev)

Dev helpers:
* In development mode missing translation keys emit a console warning: `[i18n] Missing translation key: <key>`

Guidelines:
* Keep keys semantic (group by feature), avoid UI-string-as-key patterns
* Reuse existing keys where possible instead of duplicating similar text
* For multiline markdown-enabled content keep formatting consistent between locales

Contributing translations:
* Submit PRs updating only the target locale file(s)
* Do not delete existing keys; if deprecating, coordinate to remove from all locales & code usage
* If unsure about an English phrase, leave a `TODO:` comment above the key in the JSON (will be stripped before production if needed)