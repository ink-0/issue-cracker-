import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import LabelBox from './LabelBox';
import InputColorBox from './InputColorBox';
import InputContentBox from './InputContentBox';
import TextGroup from '../../../common/group/TextGroup';
import { labelAddInputState } from '../../../../store/Recoil';
import {
  TYPE as T,
  LABEL as L,
  BUTTON_SIZE as BS,
  BUTTON_NAME as BN,
  URL as U,
} from '../../../../utils/const';
import { Issue as S } from '../../../styles/CommonStyles';
import { getPost } from '../../../../utils/restAPI';
import LabelEditCompleteButton from './LabelEditCompleteButton';
import LabelEditCancelButton from './LabelEditCancelButton';

const LabelEdit = (): JSX.Element => {
  // const setLabelEditState = useSetRecoilState(labelEditState);
  const userToken = localStorage.getItem('token');
  const labelAddInput = useRecoilValue(labelAddInputState);

  return (
    <LabelEditStyle>
      <LabelEditHeader>
        <TextBox>
          <TextGroup type={T.LARGE} content={L.EDIT} color="#14142B" />
        </TextBox>
      </LabelEditHeader>
      <LabelEditCell>
        <LabelContainer>
          <LabelBox />
        </LabelContainer>
        <InputContainer>
          <InputContentBox />
          <InputColorBox />
        </InputContainer>
      </LabelEditCell>
      <ButtonContainer>
        <LabelEditCancelButton />
        <LabelEditCompleteButton />
      </ButtonContainer>
    </LabelEditStyle>
  );
};

export default LabelEdit;

const LabelEditStyle = styled.div``;

const LabelEditHeader = styled(S.IssueTableHeader)`
  background: #fff;
  height: fit-content;
  padding-bottom: 30px;
  border-top: none;
  border-bottom: none;
  border-radius: 0;
`;

const LabelEditCell = styled(S.IssueCell)`
  justify-content: center;
  height: fit-content;
  padding-bottom: 10px;

  :nth-child(2) {
    border-bottom: none;
  }
`;
const ButtonContainer = styled(S.IssueCell)`
  justify-content: flex-end;
  height: fit-content;
  padding: 20px;

  :last-child {
    border-radius: 0;
  }
`;

const TextBox = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`;

const LabelContainer = styled.div`
  width: 30%;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
`;
