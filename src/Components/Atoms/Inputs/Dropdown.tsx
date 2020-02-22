import * as React from 'react';
import { useCallback, useState } from 'react';
import styled, { DefaultTheme, StyledComponent } from 'styled-components';

interface widthProps {
    long?: 'short' | 'middle' | 'long' | 'full';
    listFit?: boolean;
}

export interface ListItemProps {
    id: string;
    text: string;
}

interface Props extends widthProps {
    list: ListItemProps[];
    placeholder?: string;
    /** Dropdown 리스트의 내용이 많아지면 검색이 필요할 수 있습니다. 검색이 가능해집니다. */
    defaultValue?: string | number;
    /** Dropdown 리스트의 내용이 많아지면 검색이 필요할 수 있습니다. 검색이 가능해집니다. */
    searchable?: boolean;
    /** 선택했던 값이나, 검색어 등을 지울 수 있는 버튼이 활성화됩니다. searchable이 true면 deletable은 자동으로 true가 됩니다. */
    deletable?: boolean;
    /** 리스트 메뉴를 선택할 때 마다 onChange로 들어오는 함수에 { id:str, text:str } 객체로 반환합니다. 선택됐던 것을 삭제 할 경우, id와 text가 빈 string 으로 반환됩니다.*/
    onChange: ({ id, text }: ListItemProps) => void;
}

const Container = styled.div`
    position: relative;
`;

const InputWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

const Input: StyledComponent<'input', DefaultTheme, widthProps, never> = styled.input`
    ${props => props.theme.inputNormal}
    color: ${props => props.theme.color.strongest};
    background-color: ${props => props.theme.color.lightest};
    width: ${(props: widthProps) =>
        props.long === 'short'
            ? `9em;`
            : props.long === 'middle'
            ? `12em;`
            : props.long === 'long'
            ? `16em;`
            : props.long === 'full'
            ? `100%;`
            : null};
    cursor: pointer;
`;

const ClearButton = styled.button`
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    width: 1.2em;
    height: 1.2em;
    font-size: 1.4rem;
    border: none;
    border-radius: 0.6em;
    background: ${props => props.theme.color.lighter};
    outline: none;
    cursor: pointer;
`;

const ListContainer = styled.ul`
    position: absolute;
    top: 3em;
    border-radius: 1em;
    overflow: hidden;
    font-size: 1.4rem;
    background-color: ${props => props.theme.color.lightest};
    box-shadow: 0 0.3em 0.3em rgba(0, 0, 0, 0.05);
`;

const ListItem: StyledComponent<'li', DefaultTheme, widthProps, never> = styled.li`
    padding: 0.8em 1em;
    cursor: pointer;
    transition: 0.3s;
    width: ${(props: widthProps) =>
        !props.listFit
            ? `auto;`
            : props.long === 'short'
            ? `9em;`
            : props.long === 'middle'
            ? `12em;`
            : props.long === 'long'
            ? `16em;`
            : props.long === 'full'
            ? `100%;`
            : null};
    &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.color.lighter};
    }
    &:hover {
        background-color: ${props => props.theme.color.lighter};
    }
`;

/**
 * ### Dropdown Component
 *
 * - Props interface 설명 참고.
 * - 직접 타이핑으로 검색후 선택이 가능합니다.
 * - 검색은 `id`와 `text` 모두 적용됩니다.
 */
const Dropdown: React.FC<Props> = ({
    list,
    placeholder,
    long,
    listFit,
    defaultValue,
    searchable,
    deletable,
    onChange
}: Props) => {
    const defaultItem = defaultValue
        ? list.find(item => item.id === defaultValue)
        : undefined;
    const [showList, setShowList] = useState(false);
    const [selected, setSelected] = useState(defaultItem ? defaultItem : undefined);
    const [term, setTerm] = useState('');
    const [hovering, setHovering] = useState(true);

    const onSelect = useCallback(
        ({ id, text }: ListItemProps) => {
            onChange({ id, text });
            setSelected({ id, text });
            setTerm('');
            setShowList(false);
            setHovering(false);
        },
        [onChange]
    );

    const onClear = useCallback(
        e => {
            e.stopPropagation();
            onChange({ id: '', text: '' });
            setSelected(undefined);
            setTerm('');
            setShowList(false);
        },
        [onChange]
    );

    return (
        <Container>
            <InputWrapper>
                <Input
                    value={selected ? selected.text : term}
                    placeholder={placeholder}
                    readOnly={!searchable || selected ? true : false}
                    long={long}
                    onFocus={() => {
                        setShowList(true);
                    }}
                    onBlur={() => {
                        if (!hovering) setShowList(false);
                    }}
                    onChange={({ target }) => setTerm(target.value)}
                />

                {(searchable || deletable) && (selected || term) ? (
                    <ClearButton onClick={onClear} />
                ) : null}
            </InputWrapper>

            {showList && (
                <ListContainer>
                    {list.map(item => {
                        const isIncludeOfId = item.id
                            .toLowerCase()
                            .includes(term.toLowerCase());
                        const isIncludeOfText = item.text
                            .toLowerCase()
                            .includes(term.toLowerCase());
                        return isIncludeOfId || isIncludeOfText ? (
                            <ListItem
                                onClick={() => onSelect({ id: item.id, text: item.text })}
                                key={item.id}
                                listFit={listFit}
                                long={long}
                                onMouseEnter={() => setHovering(true)}
                                onMouseOut={() => setHovering(false)}>
                                {item.text}
                            </ListItem>
                        ) : null;
                    })}
                </ListContainer>
            )}
        </Container>
    );
};

Dropdown.defaultProps = {
    long: 'middle',
    listFit: false,
    searchable: false,
    deletable: false
};

export default Dropdown;
