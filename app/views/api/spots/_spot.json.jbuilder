
if spot.img_url
  json.extract! spot, :id, :title, :description,
    :lng, :lat, :location, :price, :owner_id,
    :img_url, :average_rating

else
  json.extract! spot, :id, :title, :description,
    :lng, :lat, :location, :price,
    :owner_id, :average_rating
  json.uploadedImgUrl url_for(spot.photo)
end
