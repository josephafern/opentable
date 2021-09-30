json.extract! @restaurant, :id, :name, :description, :owner_id, :cuisine, :price
json.image url_for(@restaurant.photo)