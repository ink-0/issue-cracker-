import React from 'react';
import IssueDetailTitleEditButton from './IssueDetailTitleEditButton';
import IssueDetailTitleEditCompleteButton from './IssueDetailTitleEditCompleteButton';

const IssueDetailHeaderButtonSection = ({
  state,
  id,
}: {
  state: boolean;
  id: number;
}): JSX.Element => {
  return (
    <>
      {state ? (
        <IssueDetailTitleEditCompleteButton {...{ id }} />
      ) : (
        <IssueDetailTitleEditButton />
      )}
    </>
  );
};

export default IssueDetailHeaderButtonSection;
