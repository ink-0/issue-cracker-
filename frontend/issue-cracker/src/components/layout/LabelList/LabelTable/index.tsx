import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import LabelTableHeader from './LabelTableHeader';
import LabelCell from './LabelCell';
import { labelListState } from '../../../../store/Recoil';
import { LabelProps } from '../../../../utils/types/sideBarType';

const LabelTable = (): JSX.Element => {
  const labelList = useRecoilValue(labelListState);
  const labelListArr = labelList?.labels;

  return (
    <IssueTableContainer>
      <LabelTableHeader />
      {labelListArr?.map((label: LabelProps) => (
        <LabelCell key={uuidv4()} {...{ label }} />
      ))}
    </IssueTableContainer>
  );
};

export default LabelTable;

const IssueTableContainer = styled.div``;
