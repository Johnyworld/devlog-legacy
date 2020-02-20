import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import ToggleButton from './ToggleButton';

export default {
  title: 'Atoms|Buttons/Toggle Button',
  component: ToggleButton,
};

export const buttons = () => {
  return (
    <>
      <ToggleButton checked={true} onClick={action('clicked')} />
      <ToggleButton checked={false} onClick={action('clicked')} />
    </>
  );
} 
