json.set! :spots do
  @spots.each do |spot|
    json.set! spot.id do
      json.partial! 'spot', spot: spot
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
