import * as React from 'react';
import { useCallback, useState } from 'react';
import { Props, ListItemProps } from './DropdownTypes';
import { Container, InputWrapper, Input, ClearButton, ListContainer, ListItem } from './DropdownStyles';

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
    initValue,
    fluid,
    searchable,
    deletable,
    onChange
}: Props) => {
    const defaultItem = initValue ? list.find(item => item.id === initValue) : undefined;
    const [showList, setShowList] = useState(false);
    const [selected, setSelected] = useState(defaultItem ? defaultItem : undefined);
    const [term, setTerm] = useState('');
    const [hovering, setHovering] = useState(false);

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
            <InputWrapper fluid={fluid}>
                <Input
                    value={selected ? selected.text : term}
                    placeholder={placeholder}
                    readOnly={!searchable || selected ? true : false}
                    long={long}
                    fluid={fluid}
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
                                fluid={fluid}
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
