import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import FlagTwoToneIcon from '@material-ui/icons/FlagTwoTone';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import TextGroup from '../../../common/group/TextGroup';
import CommonButton from '../../../common/CommonButton';
import ProgressBar from '../../../common/ProgressBar';
import {
  getDate,
  getIssueCount,
  getProgressRate,
} from '../../../../utils/util';
import {
  milestoneAddState,
  milestoneEditState,
} from '../../../../store/Recoil';
import useFetch from '../../../../utils/useFetch';
import { MilestoneDataProps } from '../../../../utils/types/commonTypes';
import { Issue as S } from '../../../styles/CommonStyles';
import {
  TYPE as T,
  BUTTON_NAME as BN,
  URL as U,
} from '../../../../utils/const';
import MilestoneEditButton from './MilestoneEditButton';
import MilestoneCloseButton from './MilestoneCloseButton';
import MilestoneDeleteButton from './MilestoneDeleteButton';

const MilestoneCell = (): JSX.Element => {
  const milestoneAdd = useRecoilValue(milestoneAddState);
  const milestone = useFetch(U.MILESTONE, [milestoneAdd]);
  const setMilestoneEdit = useSetRecoilState(milestoneEditState);
  const milestones = milestone?.milestones;

  const handleClickEditButton = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.id);
    setMilestoneEdit((prev) => !prev);
  };

  const handleClickDeleteButton = () => {
    console.log('delete');
  };

  return (
    <>
      {milestones?.map((milestone: MilestoneDataProps) => {
        const openIssue = getIssueCount(milestone.issues, 'OPEN');
        const closeIssue = getIssueCount(milestone.issues, 'CLOSE');
        const progressRate = getProgressRate(openIssue, closeIssue);

        return (
          <MilestoneCellStyle
            key={uuidv4()}
            id={`${milestone.id}`}
            onClick={handleClickEditButton}
          >
            <LeftBox>
              <LeftUpper>
                <CommonButton
                  icon={
                    <FlagTwoToneIcon
                      style={{
                        width: '16px',
                        height: '16px',
                        color: '#007AFF',
                      }}
                    />
                  }
                  text={
                    <TextGroup
                      type={T.MEDIUM}
                      content={milestone.milestoneInfo.title}
                      color="#222"
                    />
                  }
                />

                {milestone.milestoneInfo.dueDate && (
                  <CommonButton
                    icon={
                      <CalendarTodayTwoToneIcon
                        style={{ fontSize: 'small', color: '#6E7191' }}
                      />
                    }
                    text={
                      <TextGroup
                        type={T.SMALL}
                        content={getDate(milestone.milestoneInfo.dueDate)}
                        color="#6E7191"
                      />
                    }
                  />
                )}
              </LeftUpper>
              <LeftLower>
                <TextGroup
                  type={T.SMALL}
                  content={milestone.milestoneInfo.description}
                  color="#6E7191"
                />
              </LeftLower>
            </LeftBox>
            <RightBox>
              <RightUpper>
                <MilestoneCloseButton />
                <MilestoneEditButton />
                <MilestoneDeleteButton />
              </RightUpper>
              <RightCenter>
                <ProgressBar value={progressRate} />
              </RightCenter>
              <RightLower>
                <TextGroup
                  type={T.SMALL}
                  content={`${progressRate}%`}
                  color="#6E7191"
                />
                <IssueButtonBox>
                  <TextGroup
                    type={T.SMALL}
                    content={`열린이슈(${openIssue})`}
                    color="#6E7191"
                  />
                  &nbsp;
                  <TextGroup
                    type={T.SMALL}
                    content={`닫힌이슈(${closeIssue})`}
                    color="#6E7191"
                  />
                </IssueButtonBox>
              </RightLower>
            </RightBox>
          </MilestoneCellStyle>
        );
      })}
    </>
  );
};

export default MilestoneCell;

const MilestoneCellStyle = styled(S.IssueCell)`
  align-items: center;
  padding: 0px 25px;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftUpper = styled.div`
  display: flex;
  padding: 3px 0px;
  cursor: pointer;
`;
const LeftLower = styled.div`
  padding: 3px 10px;
  cursor: pointer;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightUpper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const RightCenter = styled.div`
  padding: 5px 0px;
  min-width: 245px;
`;

const RightLower = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IssueButtonBox = styled.div`
  display: flex;
`;
