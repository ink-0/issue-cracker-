import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import TextGroup from '../../../../common/group/TextGroup';
import { TYPE as T, BUTTON_NAME as BN } from '../../../../../utils/const';

const IssueDeleteButton = (): JSX.Element => {
  return (
    <IssueDeleteButtonDiv>
      <IssueDeleteButtoStyle
        startIcon={<IssueDeleteIcon style={{ fontSize: '14px' }} />}
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
  align-items: flex-end;
`;

const IssueDeleteButtoStyle = styled(Button)`
  width: 60px;
  height: 40px;
  margin: 5px;
`;
const IssueDeleteIcon = styled(DeleteIcon)`
  color: #ff3b30;
`;
