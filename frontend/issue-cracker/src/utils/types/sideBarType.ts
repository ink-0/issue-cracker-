export interface AssigneeProps {
  id: string;
  name: string;
  profileImageUrl: string;
  emails: string[];
}

export interface LabelProps {
  id: number;
  title: string;
  description: string;
  backgroundColorHexa: string;
  textColorHexa: string;
}
export interface MilestoneProps {
  id?: number;
  title?: string;
  description?: string;
  due_date?: string;
}

export interface DMilestoneProps {
  description: string;
  dueDate: string;
  status: string;
  title: string;
}

export interface AssigneeDataProps {
  checkedAssignee?: AssigneeProps[];
  assignees?: AssigneeProps[];
  userData?: AssigneeProps[];
}
export interface LabelDataProps {
  checkedLabel?: LabelProps[];
  labelData?: LabelProps[];
}

export interface MilestoneDataProps {
  checkedMilestone?: MilestoneProps[];
  milestoneData?: MilestoneProps[];
}

export interface dropCheckStateProps {
  assignee: AssigneeProps[];
  label: LabelProps[];
  milestone: MilestoneProps[];
}
