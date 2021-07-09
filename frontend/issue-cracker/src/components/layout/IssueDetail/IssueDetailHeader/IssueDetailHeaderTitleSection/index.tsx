import React from 'react';
import IssueDetailTitle from './IssueDetailTitle';
import IssueDetailTitleEdit from './IssueDetailTitleEdit';

const IssueDetailHeaderTitleSection = ({
  state,
  content,
}: {
  state: boolean;
  content: string;
}): JSX.Element => {
  return (
    <>
      {state ? <IssueDetailTitleEdit /> : <IssueDetailTitle {...{ content }} />}
    </>
  );
};

export default IssueDetailHeaderTitleSection;
