export interface widthProps {
    long?: 'short' | 'middle' | 'long';
    listFit?: boolean;
    /** 가로 사이즈가 가득찹니다. */
    fluid?: boolean;
}

export interface ListItemProps {
    id: string;
    text: string;
}

export interface Props extends widthProps {
    list: ListItemProps[];
    placeholder?: string;
    /** Dropdown 리스트의 내용이 많아지면 검색이 필요할 수 있습니다. 검색이 가능해집니다. */
    initValue?: string | number;
    /** Dropdown 리스트의 내용이 많아지면 검색이 필요할 수 있습니다. 검색이 가능해집니다. */
    searchable?: boolean;
    /** 선택했던 값이나, 검색어 등을 지울 수 있는 버튼이 활성화됩니다. searchable이 true면 deletable은 자동으로 true가 됩니다. */
    deletable?: boolean;
    /** 리스트 메뉴를 선택할 때 마다 onChange로 들어오는 함수에 { id:str, text:str } 객체로 반환합니다. 선택됐던 것을 삭제 할 경우, id와 text가 빈 string 으로 반환됩니다.*/
    onChange: ({ id, text }: ListItemProps) => void;
}

