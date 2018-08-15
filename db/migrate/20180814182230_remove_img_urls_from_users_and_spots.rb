class RemoveImgUrlsFromUsersAndSpots < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, :img_url, :string
    remove_column :users, :img_url, :string
  end
end
