import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import FlagTwoToneIcon from '@material-ui/icons/FlagTwoTone';
import IssueHeaderButton from '../../../common/IssueHeaderButton';
import ClosedIconGroup from '../../../common/group/ClosedIconGroup';
import CountGroup from '../../../common/group/CountGroup';
import TextGroup from '../../../common/group/TextGroup';
import { Issue as S } from '../../../styles/CommonStyles';
import { TEXT as TT, TYPE as T } from '../../../../utils/const';
import { milestoneListState } from '../../../../store/Recoil';
import { getMilestoneCount } from '../../../../utils/util';

const MilestoneTableHeader = (): JSX.Element => {
  const milestone = useRecoilValue(milestoneListState);
  const milestones = milestone.milestones;
  console.log(milestones);
  const openMilestoneCount = getMilestoneCount(milestones, 'OPEN');
  const closeMilestoneCount = getMilestoneCount(milestones, 'CLOSE');

  return (
    <S.IssueTableHeader>
      <MilestoneTableHeaderWrapper>
        <IssueHeaderButton
          icon={<FlagTwoToneIcon />}
          text={
            <TextGroup
              type={T.SMALL}
              content={TT.OPEN_MILESTONE}
              color="#222"
            />
          }
          count={<CountGroup count={openMilestoneCount} color="#222" />}
        />
        <IssueHeaderButton
          icon={<ClosedIconGroup type={'disabled'} />}
          text={
            <TextGroup
              type={T.SMALL}
              content={TT.CLOSED_MILESTONE}
              color="#6E7191"
            />
          }
          count={<CountGroup count={closeMilestoneCount} color="#6E7191" />}
        />
      </MilestoneTableHeaderWrapper>
    </S.IssueTableHeader>
  );
};

export default MilestoneTableHeader;

const MilestoneTableHeaderWrapper = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: flex-start;
`;
