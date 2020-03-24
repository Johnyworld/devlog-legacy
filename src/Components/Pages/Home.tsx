import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Content from '../../Layout/Content';
import Aside from '../../Layout/Aside';
import Main from '../../Layout/Main';
import Menu from '../Atoms/Menu/Menu';
import Title from '../Atoms/Typography/Title';
import { getExternalLinkList } from '../../Data/list';
import Markdown from '../Atoms/Markdown';

const source = `
# HELLO
## HHH
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
Normal \`Tefxtg 한글도\` Hello World
- List 1
- List 2
1. List 1
2. List 2

> hello
> world

*Italic*
**Strong**
***StringItalic***
_asdfasfd_
~~asdfadfs~~

\`\`\`
const hello = 'hello';
console.log(hello);
const hi = ({ dhdhdh }) => {
    const aaa = 3;
    const bbb = true;

    if ( hello ) {
        return true
    }
}
\`\`\`
`;

const Home: React.FC = () => {
    const { t } = useTranslation();
    const list = getExternalLinkList(t);

    return (
        <Content>
            <Aside>
                <Title text={t('external')} color='light' size='regular' line />
                <Menu list={list} />
            </Aside>
            <Main>
                <Title text='Welcome to my development blog' color='strongest' size='title' />
                <Markdown source={source} />
            </Main>
        </Content>
    );
};

export default Home;