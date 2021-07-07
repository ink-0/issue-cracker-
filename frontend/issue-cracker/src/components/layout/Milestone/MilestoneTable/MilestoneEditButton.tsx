import React from 'react';
import CommonButton from '../../../common/CommonButton';
import EditIcon from '@material-ui/icons/Edit';
import TextGroup from '../../../common/group/TextGroup';
import { TYPE as T, BUTTON_NAME as BN } from '../../../../utils/const';

const MilestoneEditButton = (): JSX.Element => {
  const handleClickEditButton = () => {
    console.log('edit');
  };

  return (
    <CommonButton
      icon={<EditIcon style={{ color: '#6E7191', fontSize: 16 }} />}
      text={<TextGroup type={T.SMALL} content={BN.EDIT} color="#6E7191" />}
      onClick={handleClickEditButton}
      id={1}
    />
  );
};

export default MilestoneEditButton;
