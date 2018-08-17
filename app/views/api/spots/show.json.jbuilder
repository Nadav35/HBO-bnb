# json.partial! '/api/spots/spot', spot: @spot

json.set! :spot do
  json.partial! '/api/spots/spot', spot: @spot
end

# json.set! :user do
#   json.partial! '/api/users/user', user: @spot.owner
# end

json.set! :reviews do
  @spot.reviews.each do |review|
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
    end
  end
end

arr = []
@spot.reviewers.each do |reviewer|
  # json.set! reviewer.id do
  arr.push(reviewer) unless arr.include?(reviewer)
    # json.partial! '/api/users/user', user: reviewer

end

arr.push(@spot.owner) unless arr.include?(@spot.owner)

json.set! :users do
  arr.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end
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
