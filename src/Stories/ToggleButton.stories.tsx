import React from 'react';
import ToggleButton from '../Components/Atoms/Buttons/ToggleButton';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Atoms|Buttons/Toggle Button',
  component: ToggleButton,
  decorators: [withKnobs],
};

export const Default = () => {
  const checked = boolean('Checked', false);
  return <ToggleButton checked={checked} onClick={action('onClick')} />

}

export const Checked = () => <ToggleButton checked={true} onClick={action('onClick')} />
export const Unchecked = () => <ToggleButton checked={false} onClick={action('onClick')} />