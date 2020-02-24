import React from 'react';
import Dropdown from '../Components/Atoms/Inputs/Dropdown';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Atoms|Inputs/Dropdown',
    component: Dropdown,
    decorators: [withKnobs]
};

const list = [
    { id: '1', text: 'Korea' },
    { id: '2', text: 'USA' },
    { id: '3', text: 'China' },
    { id: '4', text: 'Japan' },
    { id: '5', text: 'Singapore' },
    { id: '6', text: 'Canada' }
];

export const Default = () => {
    const fluid = boolean('Full width', false);
    const searchable = boolean('Searchable', true);
    const deletable = boolean('Deletable', true);
    const listFit = boolean('List is fited with input', true);
    const placeholder = text('Placeholder', 'Placeholder');
    const options = {
        Short: 'short',
        Middle: 'middle',
        Long: 'long'
    };
    const long: any = select<string>('Size', options, 'middle');

    return (
        <Dropdown
            list={list}
            listFit={listFit}
            long={long}
            placeholder={placeholder}
            fluid={fluid}
            searchable={searchable}
            deletable={deletable}
            onChange={action('onChange')}
        />
    );
};

export const Size = () => (
    <>
        <Dropdown
            list={list}
            fluid={true}
            initValue={'1'}
            onChange={action('onChange')}
        />
        <Dropdown
            list={list}
            long={'long'}
            initValue={'2'}
            onChange={action('onChange')}
        />
        <Dropdown
            list={list}
            long={'middle'}
            initValue={'3'}
            onChange={action('onChange')}
        />
        <Dropdown
            list={list}
            long={'short'}
            initValue={'4'}
            onChange={action('onChange')}
        />
    </>
);
