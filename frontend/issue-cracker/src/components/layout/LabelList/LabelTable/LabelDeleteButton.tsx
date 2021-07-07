import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CommonButton from '../../../common/CommonButton';
import TextGroup from '../../../common/group/TextGroup';
import { TYPE as T, BUTTON_NAME as BN } from '../../../../utils/const';

const LabelDeleteButton = (): JSX.Element => {
  const handleClickDeleteButton = () => {
    console.log('Delete');
  };

  return (
    <CommonButton
      icon={<DeleteOutlineIcon style={{ color: '#EE7785', fontSize: 16 }} />}
      text={<TextGroup type={T.SMALL} content={BN.DELETE} color="#EE7785" />}
      onClick={handleClickDeleteButton}
      id={1}
    />
  );
};

export default LabelDeleteButton;
