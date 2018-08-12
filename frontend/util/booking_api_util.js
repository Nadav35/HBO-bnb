export const fetchBookings = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/bookings'
  });
};

export const deleteBooking = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookings/${id}`
  });
};

export const createBooking = (spotId, booking) => {
  return $.ajax({
    method: 'POST',
    url: `/api/spots/${spotId}/bookings`,
    data: {booking}
  });
};

export const editBooking = (booking) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/bookings/${booking.id}`
  });
};
