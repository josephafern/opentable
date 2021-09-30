class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.text :description, null: false
      t.string :cuisine, null: false
      t.timestamps
    end
  end
end
