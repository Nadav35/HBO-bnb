# HBO-BnB
[HBO-BnB live](https://hbo-bnb.herokuapp.com/#/)

HBO-BnB is a full-stack web application, inspired by AirBnB and some of HBO's most popular TV shows. It makes use of Ruby on Rails for its backend, PostgreSQL for its database and React.js and redux for the frontend.

While i am overall happy with the end results and managed to implement all the features i wanted to within the 10 days timeframe that was allotted for the project, I will get back to it at a later time to add some more features.

![splash gif](https://github.com/Nadav35/Airbnb-clone/blob/master/app/assets/images/screenshots/splash-gif.gif)

## Features
  * Users can login and signup using secure frontend to backend user authentication with BCrypt
  * Logged in users can create new listings, edit and delete them.
  * Users have the option of uploading photos, using Amazon Web Services cloud and Ruby's native ActiveStorage.
  * Users can Leave reviews for an existing listing.
  * Users can make book one or more listings.
  * Users can search for listings worldwide. This is done using Google Maps API and React-GeoSuggest search bar.

## index page
The index page contains a navigation bar at the top with a search bar, all the listings that are
currently in the database, and a Google Map by the listings, with a marker for each one.
The user has the option to manually search for listings by dragging
the Map in different direction. Doing this will trigger the database each time, and only listing
that are within the bounds of the map will get rendered.

![splash-page](https://github.com/Nadav35/Airbnb-clone/blob/master/app/assets/images/screenshots/splash.png) 
![spots and map](https://github.com/Nadav35/Airbnb-clone/blob/master/app/assets/images/screenshots/spots.png)

## Search Page
A search will redirect the user to a page showing all the relevant results.
This was accomplished by grabbing the latitude and longitude of the location inputed by
the user, passing it inside the url:
```javascript
onSuggestSelect(suggest) {
  if (suggest && suggest.placeId) {
    this.setState( { spot: '' } );
    this.props.history.replace({
      pathname: '/search',
      search: `lat=${suggest.location.lat}&lng=${suggest.location.lng}`
    });
  }
}
```

They were then parsed and used to set the new bounds for the map, after which
another call to the database was made to fetch only the listings within the new bounds.
```javascript
componentDidMount() {
  if (this.props.lat) {
    this.map = new google.maps.Map(this.mapNode,
    {
      center: {
        lat: parseInt(this.props.lat),
        lng: parseInt(this.props.lng)
      },
      zoom: 8
    });
    const bounds = this.getBounds();
    this.props.updateFilter('bounds', bounds);
  } else {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }
  this.MarkerManager = new MarkerManager(this.map);
  this.MarkerManager.updateMarkers(this.props.spots);
  this.registerListeners();
}
```
![places found](https://github.com/Nadav35/Airbnb-clone/blob/master/app/assets/images/screenshots/search-results.png)
![no places found](https://github.com/Nadav35/Airbnb-clone/blob/master/app/assets/images/screenshots/search-result2.png)

