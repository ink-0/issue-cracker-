import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import TextGroup from '../../../../common/group/TextGroup';
import AddIcon from '@material-ui/icons/Add';
import { IssueDataProps } from '../../../../../utils/types/IssueDataType';
import { Issue as S } from '../../../../styles/CommonStyles';
import {
  TYPE as T,
  SIDEBAR_TYPE as ST,
  TOKEN,
} from '../../../../../utils/const';
import jwtDecode from 'jwt-decode';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import {
  decodedToken,
  dropAssigneeState,
  dropCheckState,
  dropLabelState,
  dropMilestoneState,
  issueForm,
} from '../../../../../store/Recoil';
import LabelData from '../../../../common/sideBar/data/LabelData';
import AssigneeData from '../../../../common/sideBar/data/AssigneeData';
import MilestoneData from '../../../../common/sideBar/data/MilestoneData';
import SideBarDrop from '../../../../common/sideBar/SideBarDrop';
import AssigneeContent from '../../../../common/sideBar/content/AssigneeContent';
import LabelContent from '../../../../common/sideBar/content/LabelContent';
import MilestoneContent from '../../../../common/sideBar/content/MilestoneContent';

interface TokenProps {
  name: string;
  profileImageUrl: string;
}

const IssueDetailSidebar = ({
  state,
}: {
  state: IssueDataProps;
}): JSX.Element => {
  const { assignees, labels, milestoneInfo } = state;

  const token = localStorage.getItem(TOKEN);
  const decoded = token && jwtDecode<TokenProps>(token);
  const setDecodedToken = useSetRecoilState(decodedToken);
  const [isDropAssignee, setIsDropAssignee] = useRecoilState(dropAssigneeState);
  const [isDropLabel, setIsDropLabel] = useRecoilState(dropLabelState);
  const [isDropMilestone, setIsDropMilestone] =
    useRecoilState(dropMilestoneState);

  const dropAssigneeElement = useRef<HTMLDivElement>(null);
  const dropLabelElement = useRef<HTMLDivElement>(null);
  const dropMilestoneElement = useRef<HTMLDivElement>(null);

  const issueFormData = useRecoilValue(issueForm);

  const dropAssigneeHandler = () => {
    setIsDropAssignee(!isDropAssignee);
  };
  const dropLabelHandler = () => {
    setIsDropLabel(!isDropLabel);
  };
  const dropMilestoneHandler = () => {
    setIsDropMilestone(!isDropMilestone);
  };

  useEffect(() => {
    decoded &&
      setDecodedToken({
        name: decoded.name,
        profileImageUrl: decoded.profileImageUrl,
      });

    const dropCloseHandler = (e: MouseEvent): void => {
      if (dropAssigneeElement.current?.contains(e.target as Node)) {
        setIsDropLabel(false);
        setIsDropMilestone(false);
        return;
      }
      if (dropLabelElement.current?.contains(e.target as Node)) {
        setIsDropAssignee(false);
        setIsDropMilestone(false);
        return;
      }
      if (dropMilestoneElement.current?.contains(e.target as Node)) {
        setIsDropAssignee(false);
        setIsDropLabel(false);
        return;
      }
      setIsDropAssignee(false);
      setIsDropLabel(false);
      setIsDropMilestone(false);
    };
    document.addEventListener('mousedown', dropCloseHandler);
    return () => {
      document.removeEventListener('mousedown', dropCloseHandler);
    };
  }, []);

  const [userData, labelData, milestoneData] = [
    issueFormData.assignees,
    issueFormData.labels,
    issueFormData.milestones,
  ];

  const checkedData = useRecoilValue(dropCheckState);

  const [checkedAssignee, checkedLabel, checkedMilestone] = [
    checkedData.assignee,
    checkedData.label,
    checkedData.milestone,
  ];

  return (
    <IssueDetailSidebarStyle>
      <SideBarCell>
        <SideBarTitle>
          <TextGroup type={T.SMALL} content={ST.ASSIGNEE} color="#6E7191" />
          <CustomAddIcon onClick={() => dropAssigneeHandler()} />
          <SideBarDropDiv ref={dropAssigneeElement}>
            {isDropAssignee && (
              <SideBarDrop
                type={ST.ASSIGNEE}
                dataComponent={<AssigneeData {...{ userData }} />}
              />
            )}
          </SideBarDropDiv>
        </SideBarTitle>
        <SideBarContent>
          <AssigneeContent {...{ assignees }} />
        </SideBarContent>
      </SideBarCell>
      <SideBarCell>
        <SideBarTitle>
          <TextGroup type={T.SMALL} content={ST.LABEL} color="#6E7191" />
          <CustomAddIcon onClick={() => dropLabelHandler()} />
          <SideBarDropDiv ref={dropLabelElement}>
            {isDropLabel && (
              <SideBarDrop
                type={ST.LABEL}
                dataComponent={<LabelData {...{ labelData }} />}
              />
            )}
          </SideBarDropDiv>
        </SideBarTitle>

        <SideBarContent>
          <LabelContent {...{ checkedLabel }} />
        </SideBarContent>
      </SideBarCell>
      <SideBarCell>
        <SideBarTitle>
          <TextGroup type={T.SMALL} content={ST.MILESTONE} color="#6E7191" />
          <CustomAddIcon onClick={() => dropMilestoneHandler()} />
          <SideBarDropDiv ref={dropMilestoneElement}>
            {isDropMilestone && (
              <SideBarDrop
                type={ST.MILESTONE}
                dataComponent={<MilestoneData {...{ milestoneData }} />}
              />
            )}
          </SideBarDropDiv>
        </SideBarTitle>
        <SideBarMilestoneContent>
          <MilestoneContent {...{ checkedMilestone }} />
        </SideBarMilestoneContent>
      </SideBarCell>
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

const SideBarCell = styled(S.IssueCell)`
  min-height: 96px;
  padding: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;

  :first-child {
    border-radius: 16px 16px 0px 0px;
    border: 1px solid #d9dbe9;
  }
`;

const CustomAddIcon = styled(AddIcon)`
  font-size: 16px;
  color: #6e7191;
  cursor: pointer;
`;

const SideBarTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 18px;
`;
const SideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  div {
    display: flex;
    margin: 4px 0px;
  }
`;

const SideBarMilestoneContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const SideBarDropDiv = styled.div`
  position: absolute;
  left: -7px;
  top: 30px;
  z-index: 10;
`;
