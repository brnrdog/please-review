class CreateReviewRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :review_requests do |t|
      t.string :title
      t.string :repository_url
      t.references :user, foreign_key: true
      t.integer :commits
      t.integer :deletions
      t.integer :additions
      t.string :repository_url

      t.timestamps
    end
  end
end
