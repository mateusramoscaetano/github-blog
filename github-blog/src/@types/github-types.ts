export type GithubIssueResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: GithubIssue[];
};

export type GithubIssue = {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: GithubUser;
  labels: string[];
  state: "open" | "closed";
  locked: boolean;
  assignee: GithubUser | null;
  assignees: GithubUser[];
  milestone: string | null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
  sub_issues_summary: SubIssuesSummary;
  active_lock_reason: string | null;
  body: string;
};

export type GithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: "User" | "Organization";
  user_view_type: string;
  site_admin: boolean;
};

export type SubIssuesSummary = {
  total: number;
  completed: number;
  percent_completed: number;
};
