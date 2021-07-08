import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import ButtonGroup from '../../../common/group/ButtonGroup';
import { BUTTON_SIZE as BS, BUTTON_NAME as BN } from '../../../../utils/const';
import { useSetRecoilState } from 'recoil';
import { labelEditIdState } from '../../../../store/Recoil';

const LabelEditCompleteButton = (): JSX.Element => {
  const setLabelEditId = useSetRecoilState(labelEditIdState);

  const handleClickCompleteButton = () => {
    // getPost(U.LABELS, userToken, labelAddInput);
    setLabelEditId(0);
  };

  return (
    <ButtonBox onClick={handleClickCompleteButton}>
      <ButtonGroup
        type={BS.SMALL_FILL}
        name={BN.COMPLETE}
        icon={<AddIcon style={{ fontSize: 16 }} />}
      />
    </ButtonBox>
  );
};

export default LabelEditCompleteButton;

const ButtonBox = styled.div`
  display: flex;
  margin-left: 8px;
`;
