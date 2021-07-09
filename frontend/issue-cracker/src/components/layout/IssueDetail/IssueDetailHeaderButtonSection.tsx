import React from 'react';
import IssueDetailTitleEditCompleteButton from './IssueDetailTitleEditCompleteButton';
import IssueDetailTitleEditButton from './IssueDetailTitleEditButton';

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
