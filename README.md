# Table of Contents
# Table of Contents
- [Table of Contents](#table-of-contents)
- [Table of Contents](#table-of-contents-1)
  - [Introduction](#introduction)
  - [Dialogue Section](#dialogue-section)
  - [Voting Section](#voting-section)
  - [Roadmap](#roadmap)
  - [Mobile Apps](#mobile-apps)
  - [Website setup](#website-setup)
    - [Install dependencies](#install-dependencies)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Lints and fixes files](#lints-and-fixes-files)
    - [Build docker image with version](#build-docker-image-with-version)
    - [Dealing with env variables](#dealing-with-env-variables)

## Introduction
The initial model of Iranians.vote consists of two parts: “Dialogue” and “Trustworthy Voting.” Trustworthiness includes guaranteeing vote non-repeatability, voter uniqueness, complete protection of voter identity and privacy, and transparency in result calculation.

## Dialogue Section
[Nextodon](https://github.com/tcfev/Nextodon) is a social network compatible with Fediverse and Mastodon with additional features that facilitate structured group dialogue. Nextodon provides written discussion capabilities, basic polling features, and a basic infrastructure for crypto economy.

## Voting Section
Digital discussions (from Nextodon or other platforms) can be brought to [Iranians.vote](https://iranians.vote) to find social choices and reach reliable conclusions through polling.

## Roadmap
* Add newsletter, and collaboration infrastructure for the entire platform  
* Playground for familiarization with processes and testing games  
* Implement experimental platform in a democracy (goe26) and analyze and publish findings

## Mobile Apps
* [Iranians Vote Android App](https://github.com/tcfev/iranians-vote-android)
* [Iranians Vote iOS App](https://github.com/tcfev/iranians-vote-ios)

---
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

