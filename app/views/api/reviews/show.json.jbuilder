json.review do
  json.partial! 'api/reviews/review', review: @review
end

json.average_rating @review.spot.average_rating

json.reviewer do
  json.partial! 'api/users/user', user: @review.reviewer
end
