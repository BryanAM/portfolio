# React Starter ⚛️
Get to coding faster with my flavor 🍦 and structure  🏗️ of [react](https://reactjs.org/docs/getting-started.html). 

### Table Of Contents
- [Getting Started](#getting-started)
- [CLI Commands](#cli-commands)
- [Internationalization](#internationalization)
- [Theming](#theming)
- [Animations](#animations)
- [Routing](#routing)
- [Other Technologies](#technologies)
- [File Structure](#file-structure)

# Getting Started
Clone the project to your local machine
```zsh
git clone https://github.com/BryanAM/react-starter.git
```

Install dependencies
 
```zsh
yarn
```

# CLI Commands

# Internationalization
This app uses [react-i18next](https://react.i18next.com/getting-started) for internationalization. react-i18next uses a config file found in `src/i18next/index.js`. The translation files are json and are found here: `src/i18next/locales`. Add or remove files as necessary. You'll need to update the config file imports and defaults to fit your app's needs.

The generic useage for the translation is to import the `useTranslation` hook and declare it in a destructured array. There is an example in `App.js`.

#### Inferring a translated string
```
{t('json.path.to.translated.string')}
```

# Theming

# Animations

# Routing 

# Other Technologies

#### internationalization
- [react-i18next](https://react.i18next.com/getting-started)
- [i18next](https://www.i18next.com)
- [i18next-browser-languagedetector](https://react.i18next.com/legacy-v9/step-by-step-guide#c-auto-detect-the-user-language)

# File Structure

