import merge from 'lodash/merge';

export const findHost = (entities, spot) => {
  return spot ? entities.users[entities.spots[spot.id].ownerId] : null;
};
export const formatBookings = (bookings) => {

  let newBookings;
  const months = ["January", "February", "March",
    "April", "May", "June", "July", "August",
    "September", "October", "Novemeber", "December"];
  if (Object.values(bookings).length === 0) {
    return [];
  } else {
    newBookings = Object.values(merge({}, bookings));
    Object.values(newBookings).forEach((booking, idx) => {
      let startDate = new Date(booking.startDate);
      let endDate = new Date(booking.endDate);
      let newStart = `${months[startDate.getMonth()]} ${startDate.getDate()}, ${startDate.getFullYear()}`;
      let newEnd = `${months[endDate.getMonth()]} ${endDate.getDate()}, ${endDate.getFullYear()}`;
      newBookings[idx].startDate = newStart;
      newBookings[idx].endDate = newEnd;
    });
  }
  return newBookings;

};
