import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import CommonButton from '../../../common/CommonButton';
import TextGroup from '../../../common/group/TextGroup';
import { TYPE as T, BUTTON_NAME as BN } from '../../../../utils/const';

const LabelEditButton = (): JSX.Element => {
  const handleClickEditButton = () => {
    console.log('edit');
  };

  return (
    <CommonButton
      icon={<EditIcon style={{ color: '#1E4174', fontSize: 16 }} />}
      text={<TextGroup type={T.SMALL} content={BN.EDIT} color="#1E4174" />}
      onClick={handleClickEditButton}
      id={1}
    />
  );
};

export default LabelEditButton;
