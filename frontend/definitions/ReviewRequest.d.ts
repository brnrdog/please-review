declare namespace ReviewRequest {
  let id: number;
  let title: string;
  let repositoryUrl: string;
  let repository: string;
  let additions: number;
  let deletions: number;
  let reviews: number;
  let user: typeof User;
  let reviewers: typeof User[];
  let requestedReviewers: typeof User[];
}
