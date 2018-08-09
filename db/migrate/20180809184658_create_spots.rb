class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.text :description, null: false, index: true
      t.integer :owner_id, null: false, index: true
      t.string :img_url, null: false, index: true
      t.float :lng, null: false
      t.float :lat, null: false
      t.string :location, null: false, index: true
      t.float :price, null: false, index: true
      t.timestamps
    end
    add_index :spots, :title, unique: true
    add_index :spots, [:lng, :lat], unique: true
  end
end
