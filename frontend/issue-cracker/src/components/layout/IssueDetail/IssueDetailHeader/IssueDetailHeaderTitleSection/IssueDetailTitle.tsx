import React from 'react';
import TextGroup from '../../../../common/group/TextGroup';
import { TYPE as T } from '../../../../../utils/const';

const IssueDetailTitle = ({ content }: { content: string }): JSX.Element => {
  return <TextGroup type={T.LARGE} content={content} color="#222" />;
};

export default IssueDetailTitle;
