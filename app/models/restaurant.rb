class Restaurant < ApplicationRecord
    validates_presence_of :name, :owner_id, :description, :cuisine
    
    has_one_attached :photo

    has_many :reservations,
        foreign_key: :restaurant_id,
        class_name: :Booking
    
end
