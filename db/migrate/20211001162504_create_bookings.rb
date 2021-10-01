class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :maker_id, null: false
      t.integer :restaurant_id, null: false
      t.datetime :time_of_res, null: false
      t.timestamps
    end
  end
end
