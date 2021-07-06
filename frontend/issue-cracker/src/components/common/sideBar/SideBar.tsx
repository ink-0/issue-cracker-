import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Issue as S } from '../../styles/CommonStyles';
import { TYPE as T, SIDEBAR_TYPE as ST, TOKEN } from '../../../utils/const';
import TextGroup from '../group/TextGroup';
import AddIcon from '@material-ui/icons/Add';
import jwtDecode from 'jwt-decode';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import {
  decodedToken,
  dropAssigneeState,
  dropCheckState,
  dropLabelState,
  dropMilestoneState,
} from '../../../store/Recoil';
import SideBarDrop from './SideBarDrop';
import AssigneeData from './data/AssigneeData';
import LabelData from './data/LabelData';
import MilestoneData from './data/MilestoneData';
import AssigneeContent from './content/AssigneeContent';
import LabelContent from './content/LabelContent';
import MilestoneContent from './content/MilestoneContent';
import { issueFormState } from '../../../store/Recoil';

interface TokenProps {
  name: string;
  avatarUrl: string;
}

const SideBar = (): JSX.Element => {
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

  const issueFormData = useRecoilValue(issueFormState);

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
        avatarUrl: decoded.avatarUrl,
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

  return (
    <SideBarStyle>
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
          <AssigneeContent {...{ checkedAssignee }} />
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
    </SideBarStyle>
  );
};

export default SideBar;

const SideBarStyle = styled.div``;

const SideBarCell = styled(S.IssueCell)`
  min-height: 96px;
  height: fit-content;
  padding: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;

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
