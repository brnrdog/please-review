class AddReviewUrlToReviewRequests < ActiveRecord::Migration[5.1]
  def change
    add_column :review_requests, :review_url, :string
  end
end
