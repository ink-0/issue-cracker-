import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import IssueDetailTitle from './IssueDetailTitle';
import { Line as S } from '../../styles/CommonStyles';
import IssueDetailBox from './IssueDetailBox';
import { IssueDataProps } from '../../../utils/types/IssueDataType';
import { useSetRecoilState } from 'recoil';
import { dropCheckState, issueDetailID } from '../../../store/Recoil';

const IssueDetail = (): JSX.Element => {
  const { state } = useLocation<number>();
  // const setCheckData = useSetRecoilState(dropCheckState);
  const setIssueDetailID = useSetRecoilState(issueDetailID);

  useEffect(() => {
    // setCheckData({
    //   assignee: state.assignees,
    //   label: state.labels,
    //   milestone: [sta4te.milestoneInfo],
    // });

    setIssueDetailID(state);
  }, [state]);

  return (
    <>
      <IssueDetailStyle>
        <IssueDetailTitle {...{ state }} />
        <S.TableLine />
        <IssueDetailBox {...{ state }} />
      </IssueDetailStyle>
    </>
  );
};

export default IssueDetail;

const IssueDetailStyle = styled.div``;
