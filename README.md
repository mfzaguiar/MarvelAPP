<h1 align="center">
  <img alt="Marvel Heroes" title="Fitness Calculator" src=".github/icon.png" width="150" />
</h1>

<h2 align="center">
  Marvel Heroes App
</h2>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361" />

</p>

## :iphone: About

This is a personal project built for learning purposes. It uses the official Marvel API

## Functionalities

- List of 5 heroes
- Hero Search
- Comics Search
- Acess comics external links using webview

## Built with

- React Native
- ES6
- Reactotron
- Styled Components
- Lottie Animations

## :framed_picture: Application Screens

<h1 align="center">
<img src=".github/showApp.gif" width="200"  alt="App gif">
<img src=".github/home.png" width="200"  alt="Home Screen">
<img src=".github/heroDetails.png" width="200"  alt="Hero Details">
<img src=".github/heroSearch.png" width="200"  alt="Hero Search">
<img src=".github/comicSearch.png" width="200"  alt="Comic Search">
<img src=".github/comicDetails.png" width="200"  alt="comicDetails">
<img src=".github/webView.png" width="200"  alt="Web View">
</h1>

## How to install

<strong>1.</strong> Get your developer [**api key**](https://developer.marvel.com/)

<strong>2.</strong> Clone project and install dependencies

```
$ git clone https://github.com/mfzaguiar/MarvelAPP.git
$ cd MarvelAPP
$ yarn
```

<strong>3.</strong> Rename the file .env.example to .env and put your public key and hash

obs: [**md5 hash generator**](https://passwordsgenerator.net/md5-hash-generator/)

```
# PUBLIC API KEY
API_KEY=

# HASH - (timestamp + private key + public api key)
HASH=

# Timestamp - use the same hash timestamp
TIMESTAMP=


```

<strong> 4. </strong> For Android run:

```
react-native run-android

```

# Author

- [**Matheus Aguiar**](https://www.linkedin.com/in/mfzaguiar/)
