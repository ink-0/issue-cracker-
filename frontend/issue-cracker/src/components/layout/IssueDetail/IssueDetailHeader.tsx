import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { useRecoilValue, useRecoilState } from 'recoil';
import { issueDetailState } from '../../../store/Recoil';
import { issueEditTitleState } from '../../../store/Recoil';
import IssueDetailIssueId from './IssueDetailIssueId';
import IssueDetailTitleEditCompleteButton from './IssueDetailTitleEditCompleteButton';
import IssueDetailTitleEditButton from './IssueDetailTitleEditButton';
import IssueDetailIssueCloseButton from './IssueDetailIssueCloseButton';
import IssueDetailDescription from './IssueDetailDescription';
import IssueDetailBadge from './IssueDetailBadge';
import IssueDetailHeaderTitleSection from './IssueDetailHeaderTitleSection';
import IssueDetailHeaderButtonSection from './IssueDetailHeaderButtonSection';

const IssueDetailHeader = (): JSX.Element => {
  const issueDetails = useRecoilValue<any | null>(issueDetailState);
  const [issueEditTitle, setIssueEditTitle] =
    useRecoilState(issueEditTitleState);
  // const { issueId, status, title, writer, comments } = issueDetails;
  const editRef = useRef<HTMLInputElement>(null);

  const isOpen = issueDetails?.status === 'OPEN' ? true : false;
  const [issueState, setIssueState] = useState(isOpen);

  useEffect(() => {
    const handleClickBody = (e: MouseEvent) => {
      // if (editRef.current && !editRef.current.contains(e.target)) {
      //   setIssueEditTitle((prev) => !prev);
      // }
      console.log(e.target);
      console.log('current', editRef.current);
      // setIssueEditTitle((prev) => !prev);
    };
    window.addEventListener('mousedown', handleClickBody);

    return () => window.removeEventListener('mousedown', handleClickBody);
  }, [editRef]);

  return (
    <IssueDetailHeaderStyle>
      <IssueDetailHeaderUpperBox>
        <TextBox>
          <IssueDetailHeaderTitleSection
            state={issueEditTitle}
            content={issueDetails?.title}
          />
          <IssueDetailIssueId content={issueDetails?.issueId} />
        </TextBox>

        <ButtonBox ref={editRef}>
          <IssueDetailHeaderButtonSection
            state={issueEditTitle}
            id={issueDetails?.issueId}
          />
          <IssueDetailIssueCloseButton callback={setIssueState} />
        </ButtonBox>
      </IssueDetailHeaderUpperBox>
      <TitleLowerBox>
        <ButtonBox>
          <IssueDetailBadge state={issueState} />
        </ButtonBox>
        <TextBox>
          <IssueDetailDescription
            state={issueState}
            issueDetails={issueDetails}
          />
        </TextBox>
      </TitleLowerBox>
    </IssueDetailHeaderStyle>
  );
};

export default IssueDetailHeader;

const IssueDetailHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const IssueDetailHeaderUpperBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TitleLowerBox = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  div {
    :last-child {
      margin-left: 5px;
    }
  }
`;

const ButtonBox = styled.div`
  margin-right: 10px;
  display: flex;
`;

const TitleEditButton = styled(Button)`
  width: 120px;
  height: 40px;
  margin: 5px;
  border: 1px solid #007aff;
  border-radius: 16px;
`;

const TitleEditIcon = styled(EditIcon)`
  font-size: 10px;
  color: #007aff;
`;
