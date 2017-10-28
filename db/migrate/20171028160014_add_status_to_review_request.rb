class AddStatusToReviewRequest < ActiveRecord::Migration[5.1]
  def change
    add_column :review_requests, :status, :integer, default: 0
  end
end
