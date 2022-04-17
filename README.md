# React Starter ⚛️
Get to coding faster with my flavor 🍦 and structure  🏗️ of [react](https://reactjs.org/docs/getting-started.html). 

![screen-gif](./starter.gif)


### Table Of Contents
- [Getting Started](#getting-started)
- [Internationalization](#internationalization)
- [Theming](#theming)
- [Other Technologies](#technologies)
- [File Structure](#file-structure)

# Getting Started
Fork the project to your repositories.
[About Forking Github](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

Install dependencies
```zsh
yarn
```

# Internationalization
Make your application easy to translate and keep commonly used phrases and words in one place with internationalization with [react-i18next](https://react.i18next.com/getting-started).


**Important Files**
- Configuration: `src/i18next/index.js` 
- Translation Files: `src/i18next/locales`

The following is a breif overview how react-i18next is handling translations, what is being imported and how to make updates. Details can be found on the official documentation.

1. Add the theme provider and config to your application root in `index.js`.
```javascript
...
// configuration file
import i18n from './i18next/index';
// i18next provider
import { I18nextProvider } from 'react-i18next';

const container = document.getElementById('root');
const root = createRoot(container);
const app = (
  <StrictMode>
    {/* Apply config to provider */}
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
```
2. Inorder to hook into the translation files in any component inside `<App />` you need to use the `useTranslation` hook provided by react-i18next. The `t` translation function pulls in your word or phrase and updates according to the selected translation file. 
```javascript
{t('json.path.to.translated.string')}
```

```javascript
import { useTranslation } from 'react-i18next';
import { Card } from './components/index';

function App() {
  // accessor hook for the translation file
  const [t] = useTranslation();

  return (
    <div>
      <Card>
        <h1> 
          {/* grab json string */}
          {t('common.welcome')}
        </h1>
      </Card>
    </div>
  );
}

export default App;
```
3. There is a simple built in change language function that currently switches between Japanese and English. The `changeLanguage` function comes from i18next, which is a co-library to react-i18next, already installed: `App.jsx`.
```javascript
  const changeLng = () => {
    // Selecting a new language
    const lng = i18n.language === 'en' ? 'jp' : 'en';
    // Updating the document tag
    document.documentElement.lang = lng;
    // Built in switcher
    i18n.changeLanguage(lng)
      .catch((err) => {
        console.log('something went wrong loading', err);
      });
  };
```

# Theming
The current theming and functionality is siloed inside `App.jsx`. If you desire to export your theme across your application I recommend using react context so you can get access to your theme at any level of the application. 

# Other Technologies

#### internationalization
- [react-i18next](https://react.i18next.com/getting-started)
- [i18next](https://www.i18next.com)
- [i18next-browser-languagedetector](https://react.i18next.com/legacy-v9/step-by-step-guide#c-auto-detect-the-user-language)
- [sass](https://sass-lang.com/)

# File Structure

