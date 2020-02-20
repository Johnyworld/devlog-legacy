import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import ThemeModeButton from './ThemeModeButton';
import ToggleButton from '../../Atoms/Buttons/ToggleButton';

export default {
  title: 'Molecules|Buttons/Theme Mode Toggle Button',
  component: ThemeModeButton,
  decorators: [withKnobs],
};

export const toggleButton = () => {
  const brightMode = boolean('Change Mode', false);

  return (
      <ToggleButton checked={brightMode} onClick={action('clicked')} />
  );
} 
