class AddColumnsToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :ratings, :integer, array: true, default: []
    add_column :restaurants, :price, :string
  end
end
