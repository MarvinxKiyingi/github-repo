export const sessionStorageKey = 'displayedValue';
export const getSessionStorage = parseInt(sessionStorage.getItem(sessionStorageKey)!);

export const gitHubRepos = [
  'eslint/eslint',
  'noaignite/front-end-questions',
  'babel/babel',
  'webpack/webpack',
  'storybooks/storybook',
  'facebook/react',
  'reactjs/redux',
  'expressjs/express',
];

export interface IUserData {
  full_name?: string;
  description?: string;
  stargazers_count?: number;
}
export const userDataInitialValue: IUserData = {
  full_name: '',
  description: '',
  stargazers_count: 0,
};

export interface IFaildMessage {
  message?: string;
}
