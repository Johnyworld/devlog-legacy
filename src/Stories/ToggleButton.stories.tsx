import React from 'react';
import ThemeToggler from '../Components/Atoms/Buttons/ThemeToggler';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Atoms|Buttons/Theme Toggler',
  component: ThemeToggler,
  decorators: [withKnobs],
};

export const Default = () => {
  const isBrightMode = boolean('Bright Mode', true);
  return <ThemeToggler isBrightMode={isBrightMode} onClick={action('onClick')} />
}

export const BrightMode = () => <ThemeToggler isBrightMode={true} onClick={action('onClick')} />
export const DarkMode = () => <ThemeToggler isBrightMode={false} onClick={action('onClick')} />