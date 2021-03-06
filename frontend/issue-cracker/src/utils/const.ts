// Logo
export const LOGO_TITLE = 'Issue Cracker..๐ช';
const DEPLOY = 'http://issue-tracker.pyro-squad.com';
// const LOCAL = 'http://localhost:8080';
// const LOCAL_LOGIN = 'http://localhost:3000';
const DEPLOY_ID = '2a42dd1b1e2aad1238e9';
const DEVELOPE_ID = 'e0ec416c1189c6a7f776';
const LOGIN_URL = DEPLOY;
const BASE_URL = DEPLOY;
const CLIENT_ID = BASE_URL === DEPLOY ? DEPLOY_ID : DEVELOPE_ID;
//url
export const URL = {
  AUTH: `${BASE_URL}/api/web/auth`,
  LOGIN: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=read:user,user:email&redirect_uri=${LOGIN_URL}/authentication`,
  FORM: `${BASE_URL}/api/web/issues/form`,
  ISSUES: `${BASE_URL}/api/web/issues`,
  LABELS: `${BASE_URL}/api/web/labels`,
  MILESTONE: `${BASE_URL}/api/web/milestones`,
};
//path
export const PATH = {
  ROOT: '/',
  LOGIN: '/login',
  AUTH: '/authentication',
  MAIN: '/main',
  ISSUE_LIST: '/main/issue-list',
  ISSUE_ADD: '/main/issue-add',
  ISSUE_DETAIL: '/main/issue-detail/:id',
  ISSUE_LABELLIST: '/main/label-list',
  ISSUE_MILESTONE: '/main/milestone',
};

// LogIn
export const LOGIN = {
  ID: '์์ด๋',
  PASSWORD: '๋น๋ฐ๋ฒํธ',
  GITHUB_LOGIN: 'GitHub ๊ณ์ ์ผ๋ก ๋ก๊ทธ์ธ',
  DEFAULT_LOGIN: '์์ด๋๋ก ๋ก๊ทธ์ธ',
};

// ButtonName
export const BUTTON_NAME = {
  ADD: '์ถ๊ฐ',
  DELETE: '์ญ์ ',
  COMPLETE: '์๋ฃ',
  CANCEL: '์ทจ์',
  CLOSE: '๋ซ๊ธฐ',
  EDIT: 'ํธ์ง',
  WRITING_ISSUE: '์ด์์์ฑ',
  WRITING_CANCEL: '์์ฑ ์ทจ์',
  DELETE_ISSUE: '์ด์ ์ญ์ ',
};

// ButtonSize
export const BUTTON_SIZE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL_FILL: 'smallFill',
  SMALL_BORDER: 'smallBorder',
  MEDIUM_TEXT: 'mediumText',
  SMALL_TEXT: 'smallText',
};

// TEXTs

export const TEXT = {
  OPEN_ISSUE: '์ด๋ฆฐ ์ด์',
  CLOSED_ISSUE: '๋ซํ ์ด์',
  ASSIGNEE: '๋ด๋น์',
  LABEL: '๋ ์ด๋ธ',
  MILESTONE: '๋ง์ผ์คํค',
  WRITER: '์์ฑ์',
  OPEN_MILESTONE: '์ด๋ฆฐ ๋ง์ผ์คํค',
  CLOSED_MILESTONE: '๋ซํ ๋ง์ผ์คํค',
  EDIT_TITLE: '์ ๋ชฉ ํธ์ง',
  EDIT_COMPLETE: 'ํธ์ง ์๋ฃ',
  EDIT_CANCEL: 'ํธ์ง ์ทจ์',
  CLOSE_ISSUE: '์ด์ ๋ซ๊ธฐ',
};
export const SIDEBAR_TYPE = {
  ASSIGNEE: '๋ด๋น์',
  LABEL: '๋ ์ด๋ธ',
  MILESTONE: '๋ง์ผ์คํค',
};

// Filter
export const FILTER = {
  FILTER: 'ํํฐ',
  WRITTEN_ISSUE: '๋ด๊ฐ ์์ฑํ ์ด์',
  ASSIGNED_ISSUE: '๋์๊ฒ ํ ๋น๋ ์ด์',
  COMMENTED_ISSUE: '๋ด๊ฐ ๋๊ธ์ ๋จ๊ธด ์ด์',
  ISSUE_TABLE_HEADER_LIST: [
    TEXT.ASSIGNEE,
    TEXT.LABEL,
    TEXT.MILESTONE,
    TEXT.WRITER,
  ],
};

export const LABEL = {
  ADD: '์๋ก์ด ๋ ์ด๋ธ ์ถ๊ฐ',
  EDIT: '๋ ์ด๋ธ ํธ์ง',
  NAME: '๋ ์ด๋ธ ์ด๋ฆ',
  DESC: '์ค๋ช(์ ํ)',
  BACKGROUND_COLOR: '๋ฐฐ๊ฒฝ์์',
  TEXT_COLOR: 'ํ์คํธ ์์',
};

export const MILESTONE = {
  TITLE: '๋ง์ผ์คํค ์ ๋ชฉ',
  ADD: '์๋ก์ด ๋ง์ผ์คํค ์ถ๊ฐ',
  EDIT: '๋ง์ผ์คํค ์์ ',
  NAME: '๋ง์ผ์คํค ์ด๋ฆ',
  DESC: '์ค๋ช(์ ํ)',
  DUE: '์๋ฃ์ผ(์ ํ) ex. YYYY-MM-DD',
  COMPLETE: '์๋ฃ์ผ ์ผ์ ',
};

export const TYPE = {
  XSMALL: 'xSmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  OPEN: 'open',
  CLOSED: 'closed',
};

export const TOKEN = 'token';

// temp
export const FILTER_DROPDOWN = ['Tami', 'Raccoon', 'Noel', 'Neo', 'Pyro'];
export const SIDEBAR_MENU = [TEXT.ASSIGNEE, TEXT.LABEL, TEXT.MILESTONE];
