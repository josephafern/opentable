class Review < ApplicationRecord
    validates_presence_of :author_id, :restaurant_id, :rating, :title, :body

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    
    belongs_to :restaurant,
        foreign_key: :restaurant_id,
        class_name: :Restaurant
end
