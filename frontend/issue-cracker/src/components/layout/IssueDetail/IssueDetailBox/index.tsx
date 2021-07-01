import React from 'react';
import styled from 'styled-components';
import IssueDetailInput from './IssueDetailInput';
import { IssueDataProps } from '../../../../utils/types/IssueDataType';
import IssueDetailSidebar from '../IssueDetailBox/IssueDetailSidebar';

const IssueDetailBox = ({ state }: { state: IssueDataProps }): JSX.Element => {
  return (
    <IssueDetailBoxStyle>
      <IssueDetailInput {...{ state }} />
      <IssueDetailSidebar {...{ state }} />
    </IssueDetailBoxStyle>
  );
};

export default IssueDetailBox;

const IssueDetailBoxStyle = styled.div`
  display: flex;
`;
