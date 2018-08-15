class AddHostMessageToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :host_message, :string
  end
end
