@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :cuisine, :price
    
    json.image url_for(restaurant.photo)
  end
end