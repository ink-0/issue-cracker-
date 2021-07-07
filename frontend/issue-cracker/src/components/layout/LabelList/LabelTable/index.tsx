import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import LabelTableHeader from './LabelTableHeader';
import LabelCell from './LabelCell';
import { labelAddState } from '../../../../store/Recoil';
import { LabelProps } from '../../../../utils/types/commonTypes';
import useFetch from '../../../../utils/useFetch';
import { URL as U } from '../../../../utils/const';

const LabelTable = (): JSX.Element => {
  const labelAdd = useRecoilValue(labelAddState);
  const labelList = useFetch(U.LABELS, [labelAdd]);
  const labels = labelList?.labels;

  return (
    <IssueTableContainer>
      <LabelTableHeader />
      {labels?.map((label: LabelProps) => (
        <LabelCell key={uuidv4()} {...{ label }} />
      ))}
    </IssueTableContainer>
  );
};

export default LabelTable;

const IssueTableContainer = styled.div``;
