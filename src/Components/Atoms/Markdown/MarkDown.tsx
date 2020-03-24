import * as React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

const Container = styled(ReactMarkdown)`
    * {
        margin-bottom: .5em;
        line-height: 1.3;
    }
    h1 {
        font-size: 48px;
        border-bottom: 1px solid;
    }

    h2 {
        font-size: 40px;
        border-bottom: 1px solid;
    }

    h3 { 
        font-size: 24px;
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
        
    }
    code {
        font-size: 16px;
        background-color: #1e4640;
        font-family: consolas;
        padding: 6px 6px 4px;
        border-radius: 4px;
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
        margin-bottom: .5em;
    }

    blockquote {

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