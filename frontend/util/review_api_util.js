export const createReview = (spotId, review) => {
  return $.ajax({
      method: 'POST',
      url: `/api/spots/${spotId}/reviews`,
      data: { review }
  });
};

export const editReview = review => {
  return $.ajax({
      method: 'PATCH',
      url: `/api/reviews/${review.id}`,
      data: { review }
  });
};

export const deleteReview = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`
  });
};
