class AddReviewsAndChangedFilesToReviewRequests < ActiveRecord::Migration[5.1]
  def change
    add_column :review_requests, :reviews, :integer
    add_column :review_requests, :changed_files, :integer
  end
end
