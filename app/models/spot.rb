# == Schema Information
#
# Table name: spots
#
#  id           :bigint(8)        not null, primary key
#  title        :string           not null
#  description  :text             not null
#  owner_id     :integer          not null
#  lng          :float            not null
#  lat          :float            not null
#  location     :string           not null
#  price        :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  host_message :string
#

class Spot < ApplicationRecord
  validates :title, :description, :lng,
    :lat, :location, :price, presence: true
  validates :lng, uniqueness: {scope: :lat, message: "and Lat combo taken" }

  after_initialize :ensure_photo

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :reviews, dependent: :destroy
  has_many :bookings, dependent: :destroy
  has_one_attached :photo

  has_many :reviewers,
    through: :reviews,
    source: :reviewer

  def average_rating
    reviews.average(:rating)
  end

  def self.in_bounds(bounds)

    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng < ? ", bounds[:northEast][:lng])
      .where("lng > ?", bounds[:southWest][:lng])
  end

  def ensure_photo
    if !self.photo.attached?
      file = File.open('app/assets/images/shows/curb/house.jpg')
      self.photo.attach(io: file, filename: "house.jpg")
    end
  end

end
