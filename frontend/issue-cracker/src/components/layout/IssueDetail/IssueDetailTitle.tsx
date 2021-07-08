import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { useRecoilValue, useRecoilState } from 'recoil';
import TextGroup from '../../common/group/TextGroup';
import LabelLargeGroup from '../../common/group/LabelLargeGroup';
import IssueClosedIcon from '../../styles/svg/IssueClosedIcon';
import { issueDetailState } from '../../../store/Recoil';
import { getElapsedTime } from '../../../utils/util';
import { TYPE as T, TEXT as TT, URL as U } from '../../../utils/const';
import IssueDetailTitleEdit from './IssueDetailTitleEdit';
import {
  issueEditTitleState,
  issueEditInputState,
} from '../../../store/Recoil';
import { getPut } from '../../../utils/restAPI';

const IssueDetailTitle = (): JSX.Element => {
  const issueDetails = useRecoilValue<any | null>(issueDetailState);
  const [issueEditTitle, setIssueEditTitle] =
    useRecoilState(issueEditTitleState);

  // const { issueId, status, title, writer, comments } = issueDetails;
  const isOpen = issueDetails?.status === 'OPEN' ? true : false;
  const [issueState, setIssueState] = useState(isOpen);
  const elapsedTime = getElapsedTime(issueDetails?.createdDateTime);
  const issueEditInput = useRecoilValue(issueEditInputState);
  const editRef = useRef<HTMLInputElement>(null);
  const handleClickIssueButton = () => setIssueState(false);

  const handleClickEditButton = () => setIssueEditTitle((prev) => !prev);

  const handleClickCompleteButton = () => {
    const issueEditUrl = U.ISSUES + '/' + issueDetails.issueId;
    const userToken = localStorage.getItem('token');
    getPut(issueEditUrl, userToken, issueEditInput);
    setIssueEditTitle((prev) => !prev);
  };

  useEffect(() => {
    const handleClickBody = (e: { target: HTMLInputElement }) => {
      if (editRef.current && !editRef.current.contains(e.target)) {
        setIssueEditTitle((prev) => !prev);
      }
      console.log(e.target);
      console.log('current', editRef.current);
      // setIssueEditTitle((prev) => !prev);
    };
    window.addEventListener('mousedown', handleClickBody);

    return () => window.removeEventListener('mousedown', handleClickBody);
  }, [editRef]);

  return (
    <IssueDetailTitleStyle>
      <TitleUpperBox>
        <TextBox>
          {issueEditTitle ? (
            <IssueDetailTitleEdit />
          ) : (
            <TextGroup
              type={T.LARGE}
              content={issueDetails?.title}
              color="#222"
            />
          )}
          <TextGroup
            type={T.LARGE}
            content={`#${issueDetails?.issueId}`}
            color="#6E7191"
          />
        </TextBox>

        <ButtonBox ref={editRef}>
          {issueEditTitle ? (
            <TitleEditButton
              startIcon={<TitleEditIcon />}
              color="primary"
              onClick={handleClickCompleteButton}
            >
              <TextGroup
                type={T.SMALL}
                content={TT.EDIT_COMPLETE}
                color="#007AFF"
              />
            </TitleEditButton>
          ) : (
            <TitleEditButton
              startIcon={<TitleEditIcon />}
              color="primary"
              onClick={handleClickEditButton}
              id={'editButton'}
            >
              <TextGroup
                type={T.SMALL}
                content={TT.EDIT_TITLE}
                color="#007AFF"
              />
            </TitleEditButton>
          )}
          <TitleEditButton
            onClick={handleClickIssueButton}
            startIcon={
              <IssueClosedIcon
                color="#007AFF"
                style={{ width: 16, height: 16 }}
              />
            }
            color="primary"
          >
            <TextGroup
              type={T.SMALL}
              content={TT.CLOSED_ISSUE}
              color="#007AFF"
            />
          </TitleEditButton>
        </ButtonBox>
      </TitleUpperBox>
      <TitleLowerBox>
        <ButtonBox>
          {issueState ? (
            <LabelLargeGroup type={T.OPEN} />
          ) : (
            <LabelLargeGroup type={T.CLOSED} />
          )}
        </ButtonBox>
        <TextBox>
          {issueState ? (
            <TextGroup
              type={T.SMALL}
              content={`이 이슈가 ${elapsedTime}에 ${issueDetails?.writer?.name}님에 의해 열렸습니다 ∙ 코멘트 ${issueDetails?.comments?.length}개`}
              color="#6E7191"
            />
          ) : (
            <TextGroup
              type={T.SMALL}
              content={`이 이슈가 ${elapsedTime}에 ${issueDetails?.writer?.name}님에 의해 닫혔습니다 ∙ 코멘트 ${issueDetails?.comments?.length}개`}
              color="#6E7191"
            />
          )}
        </TextBox>
      </TitleLowerBox>
    </IssueDetailTitleStyle>
  );
};

export default IssueDetailTitle;

const IssueDetailTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleUpperBox = styled.div`
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
