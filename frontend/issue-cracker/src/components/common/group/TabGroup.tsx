import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import FlagIcon from '@material-ui/icons/Flag';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { milestoneListState, milestoneListData } from '../../../store/Recoil';
import TextGroup from '../group/TextGroup';
import CountGroup from '../group/CountGroup';
import { TEXT as TT, TYPE as T, PATH as P } from '../../../utils/const';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Milestones,
  MilestoneDataProps,
  MilestoneProps,
} from '../../../utils/types/commonTypes';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '40px',
      color: 'gray',
    },
  })
);

const TabGroup = (): JSX.Element => {
  // const classes = useStyles();
  // const milestone = useRecoilValue(milestoneListState);
  // console.log('MIELS확인', milestone);
  // const milestones = milestone.milestones;
  // const milestoneCount:number = milestones.length;
  const classes = useStyles();
  const milestone = useRecoilValue<Milestones | null>(milestoneListData);
  console.log('MIELS확인', milestone);
  const milestones: MilestoneDataProps[] = milestone.milestones;
  const milestoneCount: number = milestones.length;

  const [milestoneData, setMilestoneData] = useRecoilState(milestoneListState);
  const;
  return (
    <div className={classes.root}>
      <CustomTabGroup
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        <Button
          className={classes.button}
          startIcon={<LocalOfferIcon />}
          component={Link}
          to={P.ISSUE_LABELLIST}
        >
          <TextGroup type={T.SMALL} content={TT.LABEL} color="#6E7191" />
          <CountGroup count={0} color="#6E7191" />
        </Button>

        <Button
          className={classes.button}
          startIcon={<FlagIcon />}
          component={Link}
          to={P.ISSUE_MILESTONE}
        >
          <TextGroup type={T.SMALL} content={TT.MILESTONE} color="#6E7191" />
          <CountGroup count={milestoneCount} color="#6E7191" />
        </Button>
      </CustomTabGroup>
    </div>
  );
};

export default TabGroup;

const CustomTabGroup = styled(ButtonGroup)`
  a {
    border: 1px solid ${({ theme }) => `${theme.colors.gray3}`};
    border-radius: 16px;
  }

  button {
    border-color: ${({ theme }) => `${theme.colors.gray3}`};
    color: ${({ theme }) => `${theme.colors.gray3}`};
    padding: 0px 15px;

    :hover {
      border-color: ${({ theme }) => `${theme.colors.gray3}`};
      background: transparent;
    }
  }

  margin: 0;
  margin-right: 20px;
`;
