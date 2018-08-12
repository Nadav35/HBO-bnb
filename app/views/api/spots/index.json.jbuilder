json.set! :spots do
  @spots.each do |spot|
    json.set! spot.id do
      json.partial! '/api/spots/spot', spot: spot
      json.reviewIds []
    end
  end

end

json.set! :users do
  @spots.each do |spot|
    json.set! spot.owner.id do
      json.partial! '/api/users/user', user: spot.owner
    end
  end
end

json.set! :bookings do
  @spots.each do |spot|
    spot.bookings.each do |booking|
      json.set! booking.id do
        json.partial! '/api/bookings/booking', booking: booking
      end
    end
  end
end
