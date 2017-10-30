declare namespace ReviewRequest {
  let id: number;
  let title: string;
  let repositoryUrl: string;
  let repository: string;
  let reviewUrl: string;
  let additions: number;
  let deletions: number;
  let commits: number;
  let reviews: number;
  let user: typeof User;
  let languages: string;
  let reviewers: typeof User[];
  let requestedReviewers: typeof User[];
}
