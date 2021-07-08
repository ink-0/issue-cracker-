import React from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import IssueDetailTitle from './IssueDetailTitle';
import IssueDetailBox from './IssueDetailBox';
import useFetch from '../../../utils/useFetch';
import { issueDetailState } from '../../../store/Recoil';
import { Line as S } from '../../styles/CommonStyles';
import { URL as U } from '../../../utils/const';

const IssueDetail = (): JSX.Element => {
  const location = useLocation<{ id: number }>();
  const issueDetailUrl = U.ISSUES + '/' + location.state.id;
  const issueDetails = useFetch(issueDetailUrl, []);
  const [issueDetail, setIssueDetail] = useRecoilState(issueDetailState);
  setIssueDetail(issueDetails);

  return (
    <>
      {issueDetail && (
        <IssueDetailStyle>
          <IssueDetailTitle />
          <S.TableLine />
          <IssueDetailBox />
        </IssueDetailStyle>
      )}
    </>
  );
};

export default IssueDetail;

const IssueDetailStyle = styled.div``;
