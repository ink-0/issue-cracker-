import { IssueDataProps } from './IssueDataType';

export interface MilestoneInfo {
  description: string;
  dueDate: string;
  title: string;
  status: string;
}

export interface MilestoneDataProps {
  id: number;
  issues: IssueDataProps[];
  milestoneInfo: MilestoneInfo;
}
