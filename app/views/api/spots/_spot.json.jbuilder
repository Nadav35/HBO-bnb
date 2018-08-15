json.extract! spot, :id, :title, :description,
  :lng, :lat, :location, :price,
  :owner_id, :average_rating
json.imgUrl url_for(spot.photo)
