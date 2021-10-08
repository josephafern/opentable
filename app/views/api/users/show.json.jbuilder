json.extract! @user, :id, :username
json.reservations do
    @user.reservations.each do |res|
        json.set! res.id do
            json.extract! res, :id, :maker_id, :restaurant_id, :date, :time, :guests
        end
    end
end

json.reviews do
    @user.reviews.each do |rev|
        json.set! rev.id do
            json.extract! rev, :id, :author_id, :restaurant_id, :rating, :title, :body
        end
    end
end