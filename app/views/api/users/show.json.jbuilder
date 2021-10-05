json.extract! @user, :id, :username
json.reservations do
    @user.reservations.each do |res|
        json.set! res.id do
            json.extract! res, :maker_id, :restaurant_id, :date, :time, :guests
        end
    end
end