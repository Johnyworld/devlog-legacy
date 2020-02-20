import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import ThemeModeButton from './ThemeModeButton';

export default {
  title: 'Atoms|Buttons/ThemeModeButton',
  component: ThemeModeButton,
  decorators: [withKnobs],
};

const CHANGE_BRIGHT_MODE = 'CHANGE_BRIGHT_MODE';

export const themeModeButton = () => {
  const modeStore = {
    brightMode: boolean('isBrightMode', false)
  }

  const onChange = action(CHANGE_BRIGHT_MODE)

  return (
      <button onClick={onChange}>{ modeStore.brightMode ? 'Bright mode' : 'Dark mode' }</button>
  );
} 
