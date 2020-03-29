export interface ContainerProps {
    checked: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface Props {
    className?: string;
    initChecked: boolean;
    /** Check를 바꿀 때 마다 onChange로 들어오는 함수에 boolean값을 전달합니다. */
    onChange: (checked: boolean) => void;
}

export const defaultProps = {
    initChecked: true
}
