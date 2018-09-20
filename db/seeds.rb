# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Spot.delete_all
Review.delete_all

fileUser = File.open('app/assets/images/shows/big_love/bill.jpg')
user = User.create!(
  username: "Bill Henrickson",
  email: "bill@yahoo.com",
  password: "123456"
)
user.photo.attach(io: fileUser, filename: "bill.jpg")

fileUser1 = File.open('app/assets/images/shows/boardwalk/nucky.jpg')
user1 = User.create!(
  username: "Nucky Thompson",
  email: "nucky@yahoo.com",
  password: "123456"
)
user1.photo.attach(io: fileUser1, filename: "nucky.jpg")

fileUuser2 = File.open('app/assets/images/shows/curb/larry.jpg')
user2 = User.create!(
  username: "Larry David",
  email: "larry@yahoo.com",
  password: "123456"
)
user2.photo.attach(io: fileUuser2, filename: "larry.jpg")

fileUser3 = File.open('app/assets/images/shows/curb/funk.jpg')
user3 = User.create!(
  username: "Marty Funkhouser",
  email: "funk@yahoo.com",
  password: "123456"
)
user3.photo.attach(io: fileUser3, filename: "funk.jpg")

fileUser4 = File.open('app/assets/images/shows/deadwood/al.jpg')
user4 = User.create!(
  username: "Al Swearengen",
  email: "al@yahoo.com",
  password: "123456"
)
user4.photo.attach(io: fileUser4, filename: "al.jpg")

fileUser5 = File.open('app/assets/images/shows/deadwood/cy.jpg')
user5 = User.create!(
  username: "Cy Tolliver",
  email: "cy@yahoo.com",
  password: "123456"
)
user5.photo.attach(io: fileUser5, filename: "cy.jpg")

fileUser6 = File.open('app/assets/images/shows/six_feet/david.jpg')
user6 = User.create!(
  username: "David Fisher",
  email: "david@yahoo.com",
  password: "123456"
)
user6.photo.attach(io: fileUser6, filename: "david.jpg")

fileUser7 = File.open('app/assets/images/shows/silicon_valley/erlich.jpg')
user7 = User.create!(
  username: "Erlich Bachman",
  email: "erlich@yahoo.com",
  password: "123456"
)
user7.photo.attach(io: fileUser7, filename: "erlich.jpg")

fileUser8 = File.open('app/assets/images/shows/entourage/vince.jpg')
user8 = User.create!(
  username: "Vincent Chase",
  email: "vince@yahoo.com",
  password: "123456"
)
user8.photo.attach(io: fileUser8, filename: "vince.jpg")

fileUser9 = File.open('app/assets/images/shows/entourage/ari.jpg')
user9 = User.create!(
  username: "Ari Gold",
  email: "ari@yahoo.com",
  password: "123456"
)
user9.photo.attach(io: fileUser9, filename: "ari.jpg")

fileUser10 = File.open('app/assets/images/shows/the_wire/jimmy.jpg')
user10 = User.create!(
  username: "Jimmy McNulty",
  email: "jimmy@yahoo.com",
  password: "123456"
)
user10.photo.attach(io: fileUser10, filename: "jimmy.jpg")

fileUser11 = File.open('app/assets/images/shows/the_wire/omar.jpg')
user11 = User.create!(
  username: "Omar Little",
  email: "omar@yahoo.com",
  password: "123456"
)
user11.photo.attach(io: fileUser11, filename: "omar.jpg")

fileUser12 = File.open('app/assets/images/shows/sopranos/tony.jpg')
user12 = User.create!(
  username: "Tony Soprano",
  email: "tony@yahoo.com",
  password: "123456"
)
user12.photo.attach(io: fileUser12, filename: "tony.jpg")

fileUser13 = File.open('app/assets/images/shows/sopranos/pauly.jpg')
user13 = User.create!(
  username: "Paulie Gualtieri",
  email: "paulie@yahoo.com",
  password: "123456"
)
user13.photo.attach(io: fileUser13, filename: "pauly.jpg")

fileUser14 = File.open('app/assets/images/shows/silicon_valley/gavin1.jpg')
user14 = User.create!(
  username: "Gavin Belson",
  email: "gavin@yahoo.com",
  password: "123456"
)
user14.photo.attach(io: fileUser14, filename: "gavin.jpg")

fileUser15 = File.open('app/assets/images/shows/oz/adebisi2.jpg')
user15 = User.create!(
  username: "Simon Adebisi",
  email: "simon@yahoo.com",
  password: "123456"
)
user15.photo.attach(io: fileUser15, filename: "adebisi2.jpg")

fileSpot = File.open('app/assets/images/shows/big_love/house1.jpg')
spot = Spot.create!(
  lat: 40.7608,
  lng: -111.8910,
  location: "Salt Lake City, Utah",
  price: 150,
  description: "Come and visit the-sometimes sunny Utah and get into the
  Moromon-zone with the Hendrickson’s. Whether you want to go and visit Utah’s
  beautiful parks, catch a basketball game or play with the Alpacas (yes, we have alpacas),
  our house is a great place from which to start your journey. Come, hike, bike, ride four
  wheelers, fishing, boating, skiing and much more. And please,
  leave your judgement at the door!!! We’re polygamists and are proud of it.",
  title: "A re-modeled compound with one husband, 2 houses and 3 wives. What can go wrong?",
  host_message: "Me, Bill, and my 3 wives and 12 or 13 kids kids would
  absolutely love to have you in our humble homes. Give us a chance and you
  won’t regret it. If you are a woman, we are currently trying to add a 4th
  so you know…. Something to keep in mind.",
  owner_id: user.id
)
spot.photo.attach(io: fileSpot, filename: "house1.jpg")

fileSpot1 = File.open('app/assets/images/shows/boardwalk/ritz1.jpg')
spot1 = Spot.create!(
  lat: 39.3643,
  lng: -74.4229,
  location: "Atlantic City, New Jersey",
  price: 1450,
  description: "Go back in time and come enjoy the lavishing lifestyle of
  New Jersey’s early 20th century 1%. Women still aren’t allowed to vote and
  we are mostly segregated, but hey, we have the best salt-water taffy in the
  world. Be advised, there will be the occasional gunfire, but don’t sweat it.
  We have an amazing safe-room right behind our golden-showers.",
  title: "Come and stay in the 21 floor of Atlantic city’s Ritz Carlton with its
  biggest gangster…. We mean, with the respectable city treasurer.",
  host_message: " I own Atlantic City baby. Come and stay with me and you are
  absolutely guaranteed to have the time of your life, here with me.
  Booze is now illegal unfortuatenly, wink-wink, so you will have to bring
  your own. Don’t let Richard and his mask scare you, he is actually an awesome guy.",
  owner_id: user1.id
)
spot1.photo.attach(io: fileSpot1, filename: "ritz1.jpg")

fileSpot2 = File.open('app/assets/images/shows/curb/house.jpg')
spot2 = Spot.create!(
  lat: 34.0736,
  lng: -118.4004,
  location: "Beverly Hills, California",
  price: 5000,
  description: "He may be rich, he may be obnoxious, he may be annoying as hell,
  but hey, he created Seinfeld. This middle-aged, bold Jewish guy from New York
  may seem a tad quirky, but he is actually an amazing host. Just last year he
  hosted a family that has endured a devastating hurricane. They ended up
  choosing to move out to live in a trailer rather than stay with him in the
  same house, but he’s trying. Beware, he is easily irritated and hates tips,
  both leaving and receiving. Enjoy your stay.",
  title: "Come and hang-out with the amazing Larry David",
  host_message: "I feel pretty pretty pretty strongly about
  not wanting to have you in my home. Just sayin’",
  owner_id: user2.id
)
spot2.photo.attach(io: fileSpot2, filename: "house.jpg")

fileSpot3 = File.open('app/assets/images/shows/curb/funkhouse.jpg')
spot3 = Spot.create!(
  lat: 34.1490,
  lng: -118.4514,
  location: "Sherman Oaks, California",
  price: 75,
  description: "who can turn down a visit to greater Los Angeles, to
  hang out with the one and only Marty Funkhouser. This sweet,
  gently kind-hearted middle-aged guy had recently became an orphan,
  per him. That started a fight with his good friend Larry David about
  whether or not a 70 year-old with no parents is technically an orphan,
  but that’s a fight for another day. The guest bedroom has brand new sheets,
  and there’s a house-cleaner every other day.",
  title: "The Funkman’s awesome bungalow",
  host_message: "It’s me, Super Dave/The Funkman.
  If you will choose to stay with me you won’t only get
  to enjoy the company of my best friend LD who actually
  hates my guts, I will also teach you a neat trick that
  will transform your golf game.",
  owner_id: user3.id
)
spot3.photo.attach(io: fileSpot3, filename: "funkhouse.jpg")

fileSpot4 = File.open('app/assets/images/shows/deadwood/gem.jpg')
spot4 = Spot.create!(
  lat: 44.3767,
  lng: -103.7296,
  location: "Deadwood, South Dakota",
  price: 9.99,
  description: "The year is 1876. The civil war has just ended, and camp
  Deadwood still hasn’t been annexed to the U.S. which means, we
  basically have no laws here. So, if you’re a crazy anarchist who enjoys
  lots of booze and being embroiled in mud most day, the Gem Saloon is the
  spot for you. Be warned though, our host is deadly with a knife from close
  range and likes to use the F-word. A lot!!! Welcome to Deadwood.",
  title: "The Gem Saloon. A luxurious, mid 19th century saloon/brothel house in lovely Deadwood",
  host_message: "Welcome to fuc#%@ Deadwood. Booze is half off on Tuesdays
  and if you’re looking for some good times, go and see Trixie. Stay out
  of Tollivers, those fuc$%%$ will rip you off. If there are problems, Dan is here!!",
  owner_id: user4.id
)
spot4.photo.attach(io: fileSpot4, filename: "gem.jpg")

fileSpot5 = File.open('app/assets/images/shows/deadwood/bella.jpg')
spot5 = Spot.create!(
  lat: 44.3550,
  lng: -103.7211,
  location: "Deadwood, South Dakota",
  price: 14.99,
  description: "Come and experience Deadwood with me and my lovely “assistant”,
  Joanie. We are a legitimate establishment, our card games are fair and honest,
  but beware, the last guy that tried to rip me off is in Woo’s pigs belly now.",
  title: "The Bella Union Saloon. Our card games are rigged and we sometimes
  have running water, but at least we have beds.",
  host_message: "Not much to say here. My place is the newest, my ladies
  are the prettiest, and my main dealer Eddie, who I’m pretty sure is
  ripping me off, is actually a dealer in real life too.",
  owner_id: user5.id
)
spot5.photo.attach(io: fileSpot5, filename: "bella.jpg")

fileSpot6 = File.open('app/assets/images/shows/six_feet/house.jpg')
spot6 = Spot.create!(
  lat: 34.0521,
  lng: -118.2431,
  location: "Los Angeles, California",
  price: 90,
  description: "Only with us you are absolutely guaranteed not to be bothered
  by any weird noises during your stay. Plus, our dad’s ghost shows up every
  now and then which is totally awesome.",
  title: "We absolutely guarantee that the nighbors won’t bother you.
  Welcome to the Fisher’s Funeral Home.",
  host_message: "Hi, I’m David Fisher and I will be your host. We have a
  special that runs only this week, come and stay with us and you can
  participate and view me as I embalm bodies. If you ever thought about
  a career change, now is the time.",
  owner_id: user6.id
)
spot6.photo.attach(io: fileSpot6, filename: "house.jpg")

fileSpot7 = File.open('app/assets/images/shows/silicon_valley/svhouse2.jpg')
spot7 = Spot.create!(
  lat: 37.3866,
  lng: -122.0832,
  location: "Mountain view, California",
  price: 40,
  description: "Our place lies in the middle of beautiful Mountain View.
  There is about 5 of us that will be sharing the house with you. If
  you will agree to be our friend we can teach you how to code. If you
  are a guy, no girls please. If you are a girl, you better pass.
  Tbh, those guys are hella weird.",
  title: "Yo Yo Yo, come and stay in the most insane incubator in the
  bay area. Erlich has an unlimited supply of weed, and Jared speaks
  German in his sleep and freaks people out. You’ll absolutely love it.",
  host_message: "Hi, I’m Erlich Bachman, your host for your stay.
  Just in case you’re interested, I am currently also recruiting
    new investors for a new company I want to create. I want to
    open a place where you will teach people how to code, basically
    from scratch, in a period of 3 months. As an investor, you will
    have full access to the on-site cameras to watch those poor fuck%$#
    being tortured. It will be amazing!!",
  owner_id: user7.id
)
spot7.photo.attach(io: fileSpot7, filename: "house2.jpg")

fileSpot8 = File.open('app/assets/images/shows/entourage/vince_house.jpg')
spot8 = Spot.create!(
  lat: 34.0511,
  lng: -118.2431,
  location: "Los Angeles, California",
  price: 1250,
  description: Faker::ChuckNorris.fact,
  title: "Come and stay with Vince and the Boys",
  host_message: Faker::DumbAndDumber.quote,
  owner_id: user8.id
)
spot8.photo.attach(io: fileSpot8, filename: "vince_house.jpg")

fileSpot9 = File.open('app/assets/images/shows/entourage/ari_house.jpg')
spot9 = Spot.create!(
  lat: 34.0588,
  lng: -118.2420,
  location: "Los Angeles, California",
  price: 550,
  description: Faker::BackToTheFuture.quote,
  title: "Ari Gold is in the house",
  host_message: Faker::BojackHorseman.quote,
  owner_id: user9.id
)
spot9.photo.attach(io: fileSpot9, filename: "ari_house.jpg")

fileSpot10 = File.open('app/assets/images/shows/the_wire/jimmy_house.jpg')
spot10 = Spot.create!(
  lat: 39.290386,
  lng: -76.612190,
  location: "Baltimore, Maryland",
  price: 75,
  description: Faker::BackToTheFuture.quote,
  title: "Bed and Breakfast at Jimmy's",
  host_message: Faker::BojackHorseman.quote,
  owner_id: user10.id
)
spot10.photo.attach(io: fileSpot10, filename: "jimmy_house.jpg")

fileSpot11 = File.open('app/assets/images/shows/the_wire/omar_house.jpg')
spot11 = Spot.create!(
  lat: 39.290381,
  lng: -76.612160,
  location: "Baltimore, Maryland",
  price: 40,
  description: Faker::Hobbit.quote,
  title: "Omar is here!!!",
  host_message: Faker::GreekPhilosophers.quote,
  owner_id: user11.id
)
spot11.photo.attach(io: fileSpot11, filename: "omar_house.jpg")

fileSpot12 = File.open('app/assets/images/shows/sopranos/bada.jpg')
spot12 = Spot.create!(
  lat: 40.058323,
  lng: -74.405663,
  location: "North Caldwell, New Jersey",
  price: 500,
  description: Faker::Lebowski.quote,
  title: "Spend a lovely weekend with the Sopranos",
  host_message: Faker::HowIMetYourMother.quote ,
  owner_id: user12.id
)
spot12.photo.attach(io: fileSpot12, filename: "bada.jpg")

fileSpot13 = File.open('app/assets/images/shows/sopranos/pauly_apt.jpg')
spot13 = Spot.create!(
  lat: 40.728157,
  lng: -74.077644,
  location: "Jersey City, New Jersey",
  price: 120,
  description: Faker::RickAndMorty.quote,
  title: "Book with Paulie for 2 nights and get the 3rd for free",
  host_message: Faker::Simpsons.quote ,
  owner_id: user13.id
)
spot13.photo.attach(io: fileSpot13, filename: "pauly_apt.jpg")

fileSpot14 = File.open('app/assets/images/shows/silicon_valley/gavin_house.jpg')
spot14 = Spot.create!(
  lat: 37.3812,
  lng: -122.0827,
  location: "Mountain view, California",
  price: 999,
  description: Faker::SiliconValley.quote,
  title: Faker::SiliconValley.app,
  host_message: Faker::SiliconValley.motto,
  owner_id: user14.id
)
spot14.photo.attach(io: fileSpot14, filename: "gavin_house.jpg")

fileSpot15 = File.open('app/assets/images/shows/oz/pris.jpg')
spot15 = Spot.create!(
  lat: 40.793128,
  lng: -73.886010,
  location: "Oswald State Correctional Facility, New York",
  price: 1,
  description: Faker::StarWars.quote,
  title: "Simon Adebisi wants you to be his friend",
  host_message: Faker::StarWars.wookiee_sentence,
  owner_id: user15.id
)
spot15.photo.attach(io: fileSpot15, filename: "pris.jpg")

review = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot.id
)
review1 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot1.id
)
review2 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot2.id
)
review3 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot3.id
)
review4 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot4.id
)
review5 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot5.id
)
review6 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot6.id
)
review7 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot7.id
)
review8 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot8.id
)
review9 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot9.id
)
review10 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot10.id
)
review11 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot11.id
)
review12 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot12.id
)
review13 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot13.id
)
review14 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot14.id
)

review15 = Review.create!(
  rating: rand(1..5),
  description: "pretty, pretty, pretty good",
  reviewer_id: user2.id,
  spot_id: spot15.id
)

review16 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot.id
)
review17 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot1.id
)
review18 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot2.id
)
review19 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot3.id
)
review20 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot4.id
)
review21 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot5.id
)
review22 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot6.id
)
review23 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot7.id
)
review24 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot8.id
)
review25 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot9.id
)
review26 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot10.id
)
review27 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot11.id
)
review28 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot12.id
)
review29 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot13.id

)
review30 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot14.id
)

review31 = Review.create!(
  rating: rand(1..5),
  description: Faker::SiliconValley.quote,
  reviewer_id: user7.id,
  spot_id: spot15.id
)
