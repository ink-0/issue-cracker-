import React, { FC } from 'react';
import styled from 'styled-components';
import { BUTTON_SIZE as BS, BUTTON_NAME as BN } from '../../../../utils/const';
import ButtonGroup from '../../../common/group/ButtonGroup';
import TapGroup from '../../../common/group/TabGroup';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useRecoilState } from 'recoil';
import { milestoneAddState } from '../../../../store/Recoil';

const MilestoneNav: FC = () => {
  const [milestoneAdd, setMilestoneAdd] = useRecoilState(milestoneAddState);

  const handleClickbutton = () => setMilestoneAdd((prev) => !prev);

  return (
    <MilestoneNavDiv>
      <MilestoneNavContainer>
        <TabBox>
          <React.Suspense fallback={null}>
            <TapGroup />
          </React.Suspense>
        </TabBox>
        {milestoneAdd ? (
          <ButtonBox onClick={handleClickbutton}>
            <ButtonGroup
              type={BS.SMALL_FILL}
              name={BN.DELETE}
              icon={<DeleteOutlineIcon style={{ fontSize: 16 }} />}
            />
          </ButtonBox>
        ) : (
          <ButtonBox onClick={handleClickbutton}>
            <ButtonGroup
              type={BS.SMALL_FILL}
              name={BN.ADD}
              icon={<AddIcon style={{ fontSize: 16 }} />}
            />
          </ButtonBox>
        )}
      </MilestoneNavContainer>
    </MilestoneNavDiv>
  );
};

export default MilestoneNav;

const MilestoneNavDiv = styled.div`
  margin-bottom: 20px;
`;

const MilestoneNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabBox = styled.div`
  display: flex;
  align-items: baseline;
`;

const ButtonBox = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: flex-end;
`;
