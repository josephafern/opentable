@bookings.each do |booking|
    json.set! booking.id do
        json.extract! booking, :id, :maker_id, :restaurant_id, :date, :time, :guests
    end
end