import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useRecoilValue } from 'recoil';
import { labelAddState } from '../../../../store/Recoil';
import useFetch from '../../../../utils/useFetch';
import LabelTableHeader from './LabelTableHeader';
import LabelCell from './LabelCell';
import LabelEdit from '../LabelEdit';
import { labelEditIdState } from '../../../../store/Recoil';
import { LabelProps } from '../../../../utils/types/commonTypes';
import { URL as U } from '../../../../utils/const';

const LabelTable = (): JSX.Element => {
  const labelAdd = useRecoilValue(labelAddState);

  const labelEditId = useRecoilValue(labelEditIdState);

  const labelList = useFetch(U.LABELS, [labelAdd]);
  const labels = labelList?.labels;
  console.log('뿌려주는', labels);
  return (
    <IssueTableContainer>
      <LabelTableHeader />
      {labels?.map((label: LabelProps) => (
        <>
          <LabelCell key={uuidv4()} {...{ label }} />
          {labelEditId === label.id && <LabelEdit />}
        </>
      ))}
    </IssueTableContainer>
  );
};

export default LabelTable;

const IssueTableContainer = styled.div``;
