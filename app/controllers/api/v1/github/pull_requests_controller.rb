class Api::V1::Github::PullRequestsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: client.pull_requests(repository, state: 'open')
  end

  private

  def client
    @client ||= Octokit::Client.new(access_token: current_user.token)
  end

  def repository
    params.permit(:repository)
  end
end
