import React from 'react';
import ThemeToggler from '../Components/Atoms/Buttons/ThemeToggler';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Atoms|Buttons/Theme Toggler',
    component: ThemeToggler,
    decorators: [withKnobs]
};

export const Default = () => {
    const isDarkMode = boolean('Dark Mode', false);
    return <ThemeToggler initChecked={isDarkMode} onChange={action('onChange')} />;
};

export const BrightMode = () => (
    <ThemeToggler initChecked={true} onChange={action('onChange')} />
);

export const DarkMode = () => (
    <ThemeToggler initChecked={false} onChange={action('onChange')} />
);
