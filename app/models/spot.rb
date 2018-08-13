# == Schema Information
#
# Table name: spots
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text             not null
#  owner_id    :integer          not null
#  img_url     :string
#  lng         :float            not null
#  lat         :float            not null
#  location    :string           not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Spot < ApplicationRecord
  validates :title, :description, :lng,
    :lat, :location, :price, presence: true

  # after_initialize :ensure_photo
  after_initialize :ensure_img_url

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :reviews
  has_many :bookings
  has_one_attached :photo

  def average_rating
    reviews.average(:rating)
  end

  private

  def ensure_img_url
    self.img_url ||= "https://s3-us-west-1.amazonaws.com/hbobnb-dev/5gVFEjKoFrUiHh4Qni6qKfUm"

  end



  # if not an object seeded with pic or for user not uploading image, set a deault img
  # def ensure_photo
  #   if !self.photo.attached? && !self.img_url
  #     self.photo.attach(io: File.open("/Users/nadavnoy/Desktop/AirBnB1/Airbnb-clone/app/assets/images/shows/silicon_valley/gavin_house.jpg"),
  #     filename: "house")
  #   end
  # end


end
