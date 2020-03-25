import * as React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

const Container = styled(ReactMarkdown)`
    * {
        line-height: 1.3;
        margin: 1em 0;

        &:first-child { margin-top: 0 }
        &:last-child { margin-bottom: 0 }

    }

    h1, h2, h3, h4, h5, h6 {
        &:not(:first-child) {
            margin-top: 1.25em;
        }
    }

    h1 {
        font-size: 48px;
    }

    h2 {
        font-size: 40px;
    }

    h3 { 
        font-size: 28px;
    }

    h4 { 
        font-size: 18px;
    }

    h5 { 
        font-size: 16px;
    }

    h5 { 
        font-size: 14px;
    }

    p {
        font-size: 18px;
        line-height: 1.8;

        code {
            font-size: 16px;
            background-color: ${props=> props.theme.color.highlighter};
            font-family: consolas;
            padding: 6px 6px 4px;
            border-radius: 4px;
        }
    }

    ul, ol {
        padding-inline-start: 2.5em;
    }

    ul li {
        list-style-type: decimal;
    }

    ol li {
        list-style-type: disc;
    }

    li {
    }

    blockquote {
        background-color: ${props=> props.theme.color.lightest};
        border-left: 4px solid ${props=> props.theme.color.primary_weak};
        color: ${props=> props.theme.color.strong};
        padding:  1em;

        h1, h2, h3 { color: ${props=> props.theme.color.strongest} }
    }
`;

interface Props {
    source: string;
}

const Markdown: React.FC<Props> = ({ source }: Props) => {
    return (
        <Container source={source} renderers={{ code: CodeBlock }} />
    )
}

export default Markdown;