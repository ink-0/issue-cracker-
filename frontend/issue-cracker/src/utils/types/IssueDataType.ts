import { MilestoneInfo } from './milestoneDataType';
import { AssigneeProps, LabelProps } from './sideBarType';

export interface IssueDataProps {
  issueId: number;
  milestoneInfo: MilestoneInfo;
  title: string;
  content: string;
  status: string;
  writer: AssigneeProps;
  createdDateTime: string;
  assignees: AssigneeProps[];
  labels: LabelProps[];
  comments?: CommentsProps[];
}

export interface CommentsProps {
  id: number;
  writer: {
    id: string;
    avatarUrl: string;
  };
  content: string;
  dateTime: string;
}
