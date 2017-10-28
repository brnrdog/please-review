# Controller responsible to close a review request
class Api::V1::CloseReviewRequestController < ApplicationController
  before_action :set_review_request
  skip_before_action :verify_authenticity_token

  def update
    @review_request.update(status: 1)
    render json: @review_request.to_camel_case_json
  end

  private

  def set_review_request
    @review_request = ReviewRequest.find(params[:id])
  end
end
