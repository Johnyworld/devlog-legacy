export interface Props {
    size?: 'small' | 'medium' | 'large';
    text?: string;

    /** width를 100%로 고정 */
    fluid?: boolean;
    disabled?: boolean;
    primary?: boolean;

    /** 테두리와 버튼 글자만 보이는 투명한 버튼 */
    line?: boolean;
    onClick: (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
