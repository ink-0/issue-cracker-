import React from 'react';
import styled from 'styled-components';
import SideBar from '../../../../common/sideBar/SideBar';
import { IssueDataProps } from '../../../../../utils/types/IssueDataType';

const IssueDetailSidebar = ({
  state,
}: {
  state: IssueDataProps;
}): JSX.Element => {
  return (
    <IssueDetailSidebarStyle>
      <React.Suspense fallback={null}>
        <SideBar {...{ state }} />
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
