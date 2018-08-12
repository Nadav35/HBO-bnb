if user.img_url
  json.extract! user, :id, :username, :img_url
else
  json.extract! user, :id, :username
  json.uploadedImgUrl url_for(user.photo)
end
