import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { ghcolors as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { brightTheme, darkTheme } from "./theme";
import { modeStore } from "../../../store";

interface Props {
    value: string;
}

const CodeBlock: React.FC<Props> = ({ value }: Props) => {
    return (
        <SyntaxHighlighter language='jsx' style={modeStore.darkMode ? darkTheme : brightTheme}>
            {value}
        </SyntaxHighlighter>
    );
}

export default CodeBlock;