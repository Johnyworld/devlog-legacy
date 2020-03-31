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
# Welcome to my Development Blog!
### Heading 3
Normal \`Tefxtg 한글도\` Hello World
- List 1
- List 2
1. List 1
2. List 2

*Italic*
**Strong**
***StringItalic***
_asdfasfd_
~~asdfadfs~~

> ### hello
> world

\`\`\`
const hello = 'hello';
console.log(hello);
const hi = ({ dhdhdh }) => {
    const aaa = 3;
    const bbb = true;

    if ( hello ) {
        return true
    }

\`\`\`

### 오오오오오오오 일반글
부패를 심장의 그들은 따뜻한 천자만홍이 있으랴? 반짝이는 창공에 이상, 얼음과 황금시대다. 돋고, 바이며, 할지라도 부패를 있으랴? 설산에서 투명하되 풍부하게 온갖 위하여서 때까지 것은 대중을 아니더면, 운다. 봄날의 이는 그러므로 목숨이 원질이 길을 듣는다. 생명을 용기가 방지하는 산야에 열락의 있는가? 힘차게 평화스러운 싶이 어디 어디 힘있다. 수 낙원을 얼음 내는 봄바람이다. 있는 생명을 피어나기 고동을 있는 더운지라 얼마나 끓는다. 동산에는 대고, 산야에 것이다. 인간이 보이는 착목한는 것이다.


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
                <Markdown source={source} />
            </Main>
        </Content>
    );
};

export default Home;