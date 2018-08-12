# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Spot.delete_all

user = User.create!(
  username: "guest",
  email: "guest@guest.com",
  password: "123456",
  img_url: "assets/shows/silicon_valley/erlich.jpg"
)


user1 = User.create!(
  username: "Erlich",
  email: "erlich@guest.com",
  password: "123456",
  img_url: "assets/shows/silicon_valley/gavin3.jpg"
)

8.times do
  Spot.create!(description: Faker::SiliconValley.quote,
    lng: Faker::Number.normal(50, 80),
    lat: Faker::Number.normal(50, 80),
    location: Faker::WorldCup.city,
    title: Faker::Coffee.notes,
    price: Faker::Number.between(80,299),
    owner_id: user1.id)
  end



8.times do
  Spot.create!(description: Faker::SiliconValley.quote,
    lng: Faker::Number.normal(50, 80),
    lat: Faker::Number.normal(50, 80),
    location: Faker::WorldCup.city,
    title: Faker::Coffee.notes,
    price: Faker::Number.between(80,299),
    owner_id: user.id)
  end
