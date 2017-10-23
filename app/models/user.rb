# User model
class User < ApplicationRecord
  def self.find_or_create_from_auth_hash(auth)
    find_or_create_by(uid: auth['uid']) do |user|
      user.username = auth['info']['nickname']
      user.profile_url = auth['info']['urls']['GitHub']
      user.avatar_url = auth['info']['image']
      user.token = auth['credentials']['token']
    end
  end
end
