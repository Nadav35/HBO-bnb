class ChangeImgUrlSpotColumn < ActiveRecord::Migration[5.2]
  def change
    change_column_null :spots, :img_url, true
  end
end
