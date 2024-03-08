import './core/styles/main.css';

import { App } from 'vue';

import PMButton from './components/PMButton/PMButton.vue';

export { PMButton };

export default {
  install: (app: App) => {
    app.component('MyBrandButton', PMButton);
  },
};