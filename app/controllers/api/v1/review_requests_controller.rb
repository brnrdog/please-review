# Controller responsible to handle review requests related actions.
class Api::V1::ReviewRequestsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @review_request = ReviewRequest.create(title: pull_request.title) do |r|
      repo = pull_request.head.repo
      r.additions = pull_request.additions
      r.deletions = pull_request.deletions
      r.commits = pull_request.commits
      r.repository = repo.full_name
      r.repository_url = repo.html_url
      r.user = current_user
    end
    render json: @review_request.to_json
  end

  def index
    @review_requests = ReviewRequest.all
    render json: @review_requests.to_json
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
