# Mysterium AI

## Connect to OpenAI
Place your OpenAI API key in a `.env` file as `VITE_OPENAI_API_KEY`.

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

### Format with Prettier
```sh
yarn format
```

## Documentation
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Vuetify](https://vuetifyjs.com/en/components/all/)
- [OpenAI](https://platform.openai.com/docs/api-reference/images)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)


## TODO
#### Easy
- [x] clear clues when you advance to the next phase
- [x] generate a new clue after you guess (whether or not the answer was right)
- [x] add keywords to rooms
- [ ] add some more characters
- [ ] add objects

#### Advanced
- [ ] display a loading indicator while the clue is generating (you'll need to create a new loading variable in the game store)
- [ ] add a notification that tells you if your guess was correct or not (or if you automatically moved on because there was only one guess left)
- [ ] add display for correct answers
- [ ] prevent player from guessing while clue is loading