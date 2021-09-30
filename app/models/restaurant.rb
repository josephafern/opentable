class Restaurant < ApplicationRecord
    validates_presence_of :name, :owner_id, :description, :cuisine
    
    has_one_attached :photo

    
end
