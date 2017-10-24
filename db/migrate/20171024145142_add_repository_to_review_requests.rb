class AddRepositoryToReviewRequests < ActiveRecord::Migration[5.1]
  def change
    add_column :review_requests, :repository, :string
  end
end
