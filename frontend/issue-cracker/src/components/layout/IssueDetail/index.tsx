import React, { useEffect } from 'react';
import styled from 'styled-components';
import IssueDetailTitle from './IssueDetailTitle';
import { Line as S } from '../../styles/CommonStyles';
import IssueDetailBox from './IssueDetailBox';
import { useRecoilValue } from 'recoil';
import { issueDetailState } from '../../../store/Recoil';

const IssueDetail = (): JSX.Element => {
  // const setCheckData = useSetRecoilState(dropCheckState);
  const issueDetailList = useRecoilValue(issueDetailState);
  console.log(issueDetailList);
  const state = {
    issueId: 1,
    milestoneInfo: {
      title: '마일스톤1',
      description: '마일스톤1 설명',
      dueDate: '2021-07-05T03:09:31',
    },
    title: '이슈제목1',
    content: '이슈내용1',
    status: 'OPEN',
    writer: {
      id: 'noel',
      name: 'san',
      profileImageUrl:
        'http://postfiles16.naver.net/20140606_111/sjinwon2_1402052862659ofnU1_PNG/130917_224626.png?type=w1',
      emails: ['a', 'b'],
    },
    createdDateTime: '2021-07-05T03:09:31',
    assignees: [
      {
        id: 'pyro',
        name: '파이로',
        profileImageUrl:
          'http://postfiles16.naver.net/20140606_111/sjinwon2_1402052862659ofnU1_PNG/130917_224626.png?type=w1',
        emails: ['a@b.com'],
      },
      {
        id: 'san',
        name: '노을',
        profileImageUrl:
          'http://postfiles16.naver.net/20140606_111/sjinwon2_1402052862659ofnU1_PNG/130917_224626.png?type=w1',
        emails: ['a@b.com'],
      },
    ],
    labels: [
      {
        id: 1,
        title: '라벨1 제목',
        description: '라벨1 설명',
        backgroundColorHexa: '#FFFFF',
        textColorHexa: '#FFFFF',
      },
      {
        id: 2,
        title: '라벨2 제목',
        description: '라벨2 설명',
        backgroundColorHexa: '#FFFFF',
        textColorHexa: '#FFFFF',
      },
    ],
  };
  useEffect(() => {
    // setCheckData({
    //   assignee: state.assignees,
    //   label: state.labels,
    //   milestone: [sta4te.milestoneInfo],
    // });
  }, []);

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
