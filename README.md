# Table of Contents
- [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Roadmap](#roadmap)
  - [Mobile Apps](#mobile-apps)
  - [Dialogue Section](#dialogue-section)
  - [Voting Section](#voting-section)
    - [Anonymous Voting System](#anonymous-voting-system)
      - [Roadmap](#roadmap-1)
    - [Identity Verification using passport](#identity-verification-using-passport)
    - [Secure Profile Creation](#secure-profile-creation)
    - [Smart Contract Integration](#smart-contract-integration)
    - [Data Security](#data-security)
    - [Anonymous Voting](#anonymous-voting)
  - [Website setup](#website-setup)
    - [Install dependencies](#install-dependencies)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Lints and fixes files](#lints-and-fixes-files)
    - [Build docker image with version](#build-docker-image-with-version)
    - [Dealing with env variables](#dealing-with-env-variables)

## Introduction
The initial model of Iranians.vote consists of two parts: “Dialogue” and “Trustworthy Voting.” Trustworthiness includes guaranteeing vote non-repeatability, voter uniqueness, complete protection of voter identity and privacy, and transparency in result calculation.

## Roadmap
* Add newsletter, and collaboration infrastructure for the entire platform  
* Playground for familiarization with processes and testing games  
* Implement experimental platform in a democracy (goe26) and analyze and publish findings

## Mobile Apps
* [Iranians Vote Android App](https://github.com/tcfev/iranians-vote-android)
* [Iranians Vote iOS App](https://github.com/tcfev/iranians-vote-ios)
  
## Dialogue Section
[Nextodon](https://github.com/tcfev/Nextodon) is a social network compatible with Fediverse and Mastodon with additional features that facilitate structured group dialogue. Nextodon provides written discussion capabilities, basic polling features, and a basic infrastructure for crypto economy.

## Voting Section
Digital discussions (from Nextodon or other platforms) can be brought to [Iranians.vote](https://iranians.vote) to find social choices and reach reliable conclusions through polling.


### Anonymous Voting System
Our voting system incorporates a robust privacy-preserving architecture that leverages biometric documents and zero-knowledge proofs (ZKP) to enable secure, anonymous voting while maintaining voter authenticity. We currently support biometric passports. [(ICAO's Doc 9303)](https://www.icao.int/publications/documents/9303_p9_cons_en.pdf)

#### Roadmap
- Add support for Iranian National ID card
- Add support for German National ID card (Ausweis)
  
### Identity Verification using passport
- Uses biometric passport data as the foundation for voter authentication
- Validates passport authenticity through digital signatures without exposing personal data
- Employs zero-knowledge proofs to verify voter eligibility while preserving privacy

### Secure Profile Creation
- Generates digital voter profiles using passport biometric data as identifiers
- Creates anonymous digital credentials that can’t be linked to individual voters
- Validates passport authenticity using ZKP technology without revealing personal information

### Smart Contract Integration
- Implements blockchain-based smart contracts for transparent vote recording
- Uses three-contract architecture:
  - Investment contract (INV) for transaction fee management
  - Registration contract (REG) for anonymous voter registration
  - Voting contract (VOT) for anonymous ballot casting and tallying

### Data Security
- All verification happens locally without transmitting personal data
- No personal information is stored or accessible by external parties
- Uses cryptographic techniques to ensure vote secrecy while maintaining verifiability

### Anonymous Voting
- Employs a nullifier-based system to prevent double voting while maintaining anonymity
- Separates registration transactions from voting transactions to prevent correlation
- Allows voters to cast ballots from any device using secure credentials without exposing identity

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

