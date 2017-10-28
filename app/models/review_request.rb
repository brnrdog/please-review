# Review request model
class ReviewRequest < ApplicationRecord
  belongs_to :user
  enum status: [:open, :closed]
end
