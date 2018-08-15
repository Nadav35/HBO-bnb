export const fetchSpots = filters => {
  return $.ajax({
    method: 'GET',
    url: '/api/spots',
    data: filters
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
export const editSpot = (spotId, formData) => {
  return $.ajax({
      method: 'PATCH',
      url: `/api/spots/${spotId}`,
      data: formData,
      contentType: false,
      processData: false
  });
};
