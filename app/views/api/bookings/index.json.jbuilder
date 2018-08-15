json.set! :bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.partial! 'booking', booking: booking
    end
  end
end
#
# end
#
# json.set! :users do
#   @bookings.each do |booking|
#     json.set! booking.booker.id do
#       json.partial! '/api/users/user', user: booking.booker
#     end
#   end
#
# end
#
# json.set! :spots do
#
#
# end
json.set! :spots do
  @spots.each do |spot|
    json.set! spot.id do
      json.partial! 'api/spots/spot', spot: spot
    end
  end
end
