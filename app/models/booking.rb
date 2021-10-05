class Booking < ApplicationRecord
    validates_presence_of :maker_id, :restaurant_id, :date, :time, :guests
    
    belongs_to :restaurant,
        foreign_key: :restaurant_id,
        class_name: :Restaurant

    belongs_to :maker,
        foreign_key: :maker_id,
        class_name: :User

end
