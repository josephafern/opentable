json.extract! @restaurant, :id, :name, :description, :owner_id, :cuisine, :price
json.image url_for(@restaurant.photo)

json.reviews do
    @restaurant.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :author_id, :rating, :title, :body
        end
    end
end