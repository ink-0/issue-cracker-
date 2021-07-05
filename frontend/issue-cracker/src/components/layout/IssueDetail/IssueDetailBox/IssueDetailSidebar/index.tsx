import React, { useEffect } from 'react';
import styled from 'styled-components';
import SideBar from '../../../../common/sideBar/SideBar';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { issueDetailState, dropCheckState } from '../../../../../store/Recoil';
const IssueDetailSidebar = (): JSX.Element => {
  const issueDetail = useRecoilValue(issueDetailState);
  const setDropCheck = useSetRecoilState(dropCheckState);

  useEffect(() => {
    setDropCheck({
      assignee: issueDetail.assignees,
      label: issueDetail.labels,
      milestone: [issueDetail.milestoneInfo],
    });
  }, []);

  return (
    <IssueDetailSidebarStyle>
      <React.Suspense fallback={null}>
        <SideBar />
      </React.Suspense>
    </IssueDetailSidebarStyle>
  );
};

export default IssueDetailSidebar;

const IssueDetailSidebarStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 300px;
  padding: 10px;
`;
