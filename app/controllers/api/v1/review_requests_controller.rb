# Controller responsible to handle review requests related actions.
class Api::V1::ReviewRequestsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @resource = ReviewRequest.create(title: pull_request.title) do |review_req|
      repo = pull_request.head.repo
      review_req.additions = pull_request.additions
      review_req.deletions = pull_request.deletions
      review_req.commits = pull_request.commits
      review_req.repository = repo.full_name
      review_req.repository_url = repo.html_url
      review_req.user = current_user
    end
    render json: @resource.to_json
  end

  private

  def pull_request
    repository = pull_request_params[:repository]
    number = pull_request_params[:number]

    @pull_request ||= client.pull_request(repository, number)
  end

  def client
    @client ||= Octokit::Client.new(access_token: current_user.token)
  end

  def pull_request_params
    params.require(:pull_request).permit(:repository, :number)
  end
end
