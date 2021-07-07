import React from 'react';
import CommonButton from '../../../common/CommonButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import TextGroup from '../../../common/group/TextGroup';
import { TYPE as T, BUTTON_NAME as BN } from '../../../../utils/const';

const MilestoneDeleteButton = (): JSX.Element => {
  const handleClickDeleteButton = () => {
    console.log('Delete');
  };

  return (
    <CommonButton
      icon={<DeleteOutlineIcon style={{ color: '#FF3B30', fontSize: 16 }} />}
      text={<TextGroup type={T.SMALL} content={BN.DELETE} color="#FF3B30" />}
      onClick={handleClickDeleteButton}
    />
  );
};

export default MilestoneDeleteButton;
