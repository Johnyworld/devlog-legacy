import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Text from '../../Atoms/Typography/Text';

const MainLogo = () => {
  const { t } = useTranslation();
  return (
    <Link to='/'>
      <Text text={t('hello')} weight='bold' size='large' />
    </Link>
  )
}

export default MainLogo;