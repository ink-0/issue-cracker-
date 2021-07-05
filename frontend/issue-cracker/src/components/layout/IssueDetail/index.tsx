import React from 'react';
import styled from 'styled-components';
import IssueDetailTitle from './IssueDetailTitle';
import { Line as S } from '../../styles/CommonStyles';
import IssueDetailBox from './IssueDetailBox';

const IssueDetail = (): JSX.Element => {
  return (
    <>
      <IssueDetailStyle>
        <IssueDetailTitle />
        <S.TableLine />
        <IssueDetailBox />
      </IssueDetailStyle>
    </>
  );
};

export default IssueDetail;

const IssueDetailStyle = styled.div``;
