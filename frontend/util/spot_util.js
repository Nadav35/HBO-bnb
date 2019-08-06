const homeType = ['Entire Loft', 'Studio', 'Private Room', 'Wooden Cabin', 'Penthouse'];
const bedrooms = [1, 2, 3, 4, 5, 6];
const baths = [1, 2, 3, 4];
const guests = [1, 2, 3, 4];

export const spotInfo = (id, ownerId, price) => {
  const info = {
    homeType: homeType[id % homeType.length],
    bedrooms: bedrooms[ownerId % bedrooms.length],
    baths: baths[price % baths.length],
    guests: guests[id % guests.length]
  };
  return info;
};