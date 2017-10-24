# Controller responsible to fetch repositories from GitHub API.
class Api::V1::Github::RepositoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: client.repositories.map(&:attrs)
  end

  private

  def client
    Octokit.auto_paginate = true
    @client ||= Octokit::Client.new(access_token: current_user.token)
  end
end
