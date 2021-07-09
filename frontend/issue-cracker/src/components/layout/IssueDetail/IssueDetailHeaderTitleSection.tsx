import React from 'react';
import IssueDetailTitleEdit from './IssueDetailTitleEdit';
import IssueDetailTitle from './IssueDetailTitle';

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
