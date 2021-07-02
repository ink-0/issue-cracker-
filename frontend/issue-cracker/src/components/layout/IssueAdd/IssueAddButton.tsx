import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TextGroup from '../../common/group/TextGroup';
import ButtonGroup from '../../common/group/ButtonGroup';
import CloseIcon from '@material-ui/icons/Close';
import {
  BUTTON_SIZE as BS,
  TYPE as T,
  PATH as P,
  BUTTON_NAME as BN,
  URL as U,
} from '../../../utils/const';
import { issueAddData } from '../../../store/Recoil';
import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router';

const IssueAddButton = (): JSX.Element => {
  const issueAdd = useRecoilValue(issueAddData);
  // const userToken = useRecoilValue(token);
  const userToken = localStorage.getItem('token');
  console.log('issueAdd', issueAdd);
  const history = useHistory();
  const handleClickCompleteButton = async () => {
    return await fetch(U.ISSUES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        title: '이슈 제목2',
        comment: '이슈 내용',
        assignees: [
          {
            email: 'noel@codesquad.com',
            name: 'neo',
            avatarUrl: 'profiel.image.url',
          },
          {
            email: 'pyro@codesquad.com',
            name: 'san',
            avatarUrl: 'profiel.image.url',
          },
        ],
        labels: [
          {
            id: '5',
            title: '라벨',
            description: '설명',
            backgroundColorHexa: '#111',
            textColorHexa: '#112',
          },
        ],
        milestoneId: 1,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => console.log('Success:', JSON.stringify(response)))
      .catch((error) => console.error('Error:', error));
  };
  return (
    <IssueAddButtonStyle>
      <Link to={P.ISSUE_LIST}>
        <CancelButton>
          <WriteCancelButton />
          <TextGroup
            type={T.SMALL}
            content={BN.WRITING_CANCEL}
            color="#6E7191"
          />
        </CancelButton>
      </Link>
      <ButtonGroup
        type={BS.MEDIUM}
        name={BN.COMPLETE}
        onClick={handleClickCompleteButton}
        color="#fff"
      />
    </IssueAddButtonStyle>
  );
};

export default IssueAddButton;

const IssueAddButtonStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CancelButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
`;

const WriteCancelButton = styled(CloseIcon)`
  color: #6e7191;
  font-size: 12px;
  margin: 3px;
`;
