class UpdateBookings < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :time_of_res
    add_column :bookings, :date, :string, null: false
    add_column :bookings, :time, :string, null: false
    add_column :bookings, :guests, :integer, null: false
  end
end
