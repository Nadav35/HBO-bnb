# json.partial! '/api/spots/spot', spot: @spot

json.set! :spot do
  json.partial! '/api/spots/spot', spot: @spot
end

json.set! :user do
  json.partial! '/api/users/user', user: @spot.owner
end
# json.spot do
#
#   json.reviewIds @spot.reviews.pluck(:id)
# end

# json.reviews do
#   @spot.reviews.each do |review|
#     json.set! review.id do
#       json.partial! 'api/reviews/review', review: review
#     end
#   end
# end

# json.set! :spots do
#   @spots.each do |spot|
#     json.set! spot.id do
#       json.partial! 'spot', spot: spot
#       json.reviewIds []
#     end
#   end
#
# end
#
# json.set! :users do
#   @spots.each do |spot|
#     json.set! spot.owner.id do
#       json.partial! '/api/users/user', user: spot.owner
#     end
#   end
# end
