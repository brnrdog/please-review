class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :profile_url
      t.string :avatar_url
      t.string :username

      t.timestamps
    end
  end
end
