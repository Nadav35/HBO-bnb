class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.datetime :start_date, null: false, index: true
      t.datetime :end_date, null: false, index: true
      t.integer :num_guests, null: false, index: true
      t.integer :spot_id, null: false
      t.integer :booker_id, null: false


      t.timestamps
    end
  end
end
