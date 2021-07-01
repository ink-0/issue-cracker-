import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import IssueDetailTitle from './IssueDetailTitle';
import { Line as S } from '../../styles/CommonStyles';
import IssueDetailBox from './IssueDetailBox';
import { IssueDataProps } from '../../../utils/types/IssueDataType';

const IssueDetail = (): JSX.Element => {
  const { state } = useLocation<IssueDataProps>();
  console.log(state);
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
