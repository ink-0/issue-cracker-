import { atom, selector } from 'recoil';
import {
  AssigneeProps,
  dropCheckStateProps,
  LabelProps,
  MilestoneProps,
} from '../utils/types/sideBarType';
import { URL as U } from '../utils/const';

// Login
export const token = atom({
  key: 'token',
  default: null,
});

export const decodedToken = atom({
  key: 'decodedToken',
  default: {
    name: '',
    avatarUrl: '',
  },
});

//SideBar
export const issueFormState = selector({
  key: 'issueFormState',
  get: async () => {
    const response = await fetch(U.FORM);
    const data = await response.json();
    return data;
  },
});

export const dropAssigneeState = atom({
  key: 'dropAssigneeState',
  default: false,
});
export const dropLabelState = atom({
  key: 'dropLabelState',
  default: false,
});
export const dropMilestoneState = atom({
  key: 'dropMilestoneState',
  default: false,
});

export const dropCheckState = atom<dropCheckStateProps>({
  key: 'dropCheckState',
  default: {
    assignee: [],
    label: [],
    milestone: [],
  },
});

//IssueList

export const issueListAtom = atom({
  key: 'issueListAtom',
  default: null,
});

export const issueListState = selector({
  key: 'issueListState',
  get: async () => {
    const response = await fetch(U.ISSUES);
    const data = await response.json();
    return data;
  },
});

// MilestoneList

export const milestoneAddState = atom({
  key: 'milestoneAddState',
  default: false,
});

export const milestoneListState = selector({
  key: 'milestoneListState',
  get: async () => {
    const response = await fetch(U.MILESTONE);
    const data = await response.json();
    return data;
  },
});

// LabelList

export const labelAddState = atom({
  key: 'labelAddState',
  default: false,
});

// //IssueAdd
interface IssueAddStateInputProps {
  title: string;
  comment: string;
}

export const issueAddInputState = atom<IssueAddStateInputProps>({
  key: 'issueAddInputState',
  default: {
    title: '',
    comment: '',
  },
});

export const issueAddState = selector({
  key: 'issueAddState',
  get: ({ get }) => {
    const inputData = get(issueAddInputState);
    const dropCheck = get(dropCheckState);
    const assigneesIdList = dropCheck.assignee.map((ele) => ele.id);
    const labelsIdList = dropCheck.label.map((ele) => ele.id);
    const milestonesIdList = dropCheck.milestone?.map((ele) => ele?.id);
    return {
      title: inputData.title,
      comment: inputData.comment,
      assigneesId: assigneesIdList,
      labelsId: labelsIdList,
      milestoneId: milestonesIdList[0],
    };
  },
});

// IssueData
export const issueDetailState = selector({
  key: 'issueDetailState',
  get: async ({ get }) => {
    const issueID = get(issueDetailID);
    const response = await fetch(`${U.ISSUES}/${issueID}`);
    const data = await response.json();
    return data;
  },
});

//IssueDetailID
export const issueDetailID = atom({
  key: 'issueDetailID',
  default: 0,
});

//GET :DATA
//POST :DATA
// POST IssueAdd POST

// export const issueAddPostData = selector({
//   key: 'issueAddPostData',
//   get: async ({ get }) => {
//     const userToken = get(token);
//     const userIssueAddData = get(issueAddData);
//     return await fetch(U.ISSUES, {
//       method: 'POST',
//       body: JSON.stringify(userIssueAddData),
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userToken}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((response) => console.log('Success:', JSON.stringify(response)))
//       .catch((error) => console.error('Error:', error));
//   },
// });

// interface issuePostProps {
//   title: string;
//   comment: string;
//   assigneesId: string[];
//   labelsId: number[];
//   milestoneId: number;
// }

// export const issuePost = atom<issuePostProps>({
//   key: 'issuePost',
//   default: {
//     title: '',
//     comment: '',
//     assigneesId: [],
//     labelsId: [],
//     milestoneId: 0,
//   },
// });
//
