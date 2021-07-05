import React from 'react';
import styled from 'styled-components';
import IssueDetailInputContent from './IssueDetailInputContent';
import IssueDetailDisplay from './IssueDetailDisplay';
import { IssueDataProps } from '../../../../../utils/types/IssueDataType';

const IssueDetailInput = ({
  state,
}: {
  state: IssueDataProps;
}): JSX.Element => {
  return (
    <IssueDetailInputStyle>
      <IssueDetailDisplay />
      <IssueDetailInputContent />
    </IssueDetailInputStyle>
  );
};

export default IssueDetailInput;

const IssueDetailInputStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`;
