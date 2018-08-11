class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false, index: true
      t.text :description, null: false
      t.integer :reviewer_id, null: false
      t.integer :spot_id, null: false

      t.timestamps
    end
    add_index :reviews, [:reviewer_id, :spot_id], unique: true
  end
end
