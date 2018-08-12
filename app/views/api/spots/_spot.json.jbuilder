
if spot.img_url
  json.extract! spot, :id, :title, :description,
    :lng, :lat, :location, :price, :owner_id, :img_url
else
  json.extract! spot, :id, :title, :description,
    :lng, :lat, :location, :price, :owner_id
  json.uploadedImgUrl url_for(spot.photo)
end
