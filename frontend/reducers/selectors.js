
export const findHost = (entities, spotId) => {
  // debugger
  return entities.users[entities.spots[spotId].ownerId];
};
