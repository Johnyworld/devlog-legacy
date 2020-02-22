const setBackgroundColor = () => {
    // 다크모드로 시작할 경우 백그라운드 색 깜빡이는 문제를 해결합니다.
    const bodyStyle = document.querySelector('body').style;
    const darkMode = localStorage.getItem('darkMode');

    if (darkMode) bodyStyle.backgroundColor = '#151515';
    else bodyStyle.backgroundColor = '#eee';

    setTimeout(() => {
        bodyStyle.backgroundColor = '';
    }, 300);
};

setBackgroundColor();
