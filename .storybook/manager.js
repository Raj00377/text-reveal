import { addons } from '@storybook/manager-api';
import myTheme from './myTheme';

addons.setConfig({
  theme: myTheme,
});

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', 'https://raw.githubusercontent.com/Raj00377/text-reveal/update/readme/assets/text-reveal-with-bg.png');
document.head.appendChild(link);