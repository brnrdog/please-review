declare namespace ReviewRequest {
  let id: number;
  let title: string;
  let repositoryURL: string;
  let repository: string;
  let user: typeof User;
  let reviewers: typeof User[];
  let requestedReviewers: typeof User[];
}
