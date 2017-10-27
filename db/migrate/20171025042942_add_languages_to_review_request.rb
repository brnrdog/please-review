class AddLanguagesToReviewRequest < ActiveRecord::Migration[5.1]
  def change
    add_column :review_requests, :languages, :string
  end
end
