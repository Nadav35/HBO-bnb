
export const findHost = (entities, spot) => {
  return spot ? entities.users[entities.spots[spot.id].ownerId] : [];
};
