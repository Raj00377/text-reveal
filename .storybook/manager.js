import { addons } from '@storybook/manager-api';
import myTheme from './myTheme';

addons.setConfig({
  theme: myTheme,
});

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', 'https://raw.githubusercontent.com/Raj00377/text-reveal/update/assets/assets/favicon/android-chrome-512x512.png');
document.head.appendChild(link);