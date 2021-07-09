import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import TextGroup from '../../../../common/group/TextGroup';
import { TYPE as T, BUTTON_NAME as BN } from '../../../../../utils/const';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const IssueDeleteButton = (): JSX.Element => {
  return (
    <IssueDeleteButtonDiv>
      <IssueDeleteButtoStyle
        startIcon={
          <DeleteOutlineIcon style={{ fontSize: '14px', color: '#FF3B30' }} />
        }
        color="primary"
      >
        <TextGroup type={T.XSMALL} content={BN.DELETE_ISSUE} color="#FF3B30" />
      </IssueDeleteButtoStyle>
    </IssueDeleteButtonDiv>
  );
};

export default IssueDeleteButton;

const IssueDeleteButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const IssueDeleteButtoStyle = styled(Button)`
  height: 40px;
  margin: 10px;
`;
