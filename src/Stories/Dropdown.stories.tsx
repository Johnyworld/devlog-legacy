import React from 'react';
import Dropdown from '../Components/Atoms/Inputs/Dropdown';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Atoms|Inputs/Dropdown',
    component: Dropdown,
    decorators: [withKnobs]
};

export const Default = () => {
    const searchable = boolean('Searchable', true);
    const deletable = boolean('Deletable', true);
    const placeholder = text('Placeholder', 'Placeholder');

    const list = [
        { id: '1', text: 'Korea' },
        { id: '2', text: 'USA' },
        { id: '3', text: 'China' },
        { id: '4', text: 'Japan' },
        { id: '5', text: 'Singapore' },
        { id: '6', text: 'Canada' }
    ];

    return (
        <Dropdown
            list={list}
            listFit
            long='long'
            placeholder={placeholder}
            searchable={searchable}
            deletable={deletable}
            onChange={action('onChange')}
        />
    );
};
