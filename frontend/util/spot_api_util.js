export const fetchSpots = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/spots'
  });
};

export const fetchSpot = id => {
  return $.ajax({
      method: 'GET',
      url: `/api/spots/${id}`
  });
};

export const createSpot = formData => {
  return $.ajax({
      method: 'POST',
      url: '/api/spots',
      data: formData,
      contentType: false,
      processData: false
  });
};

export const deleteSpot = id => {
  return $.ajax({
      method: 'DELETE',
      url: `/api/spots/${id}`
  });
};
export const editSpot = spot => {
  return $.ajax({
      method: 'PATCH',
      url: `/api/spots/${spot.id}`
  });
};
