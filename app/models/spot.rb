# == Schema Information
#
# Table name: spots
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text             not null
#  owner_id    :integer          not null
#  img_url     :string           not null
#  lng         :float            not null
#  lat         :float            not null
#  location    :string           not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Spot < ApplicationRecord
  validates :title, :description, :img_url, :lng,
    :lat, :location, :price, presence: true

    after_initialize :ensure_img_url

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :reviews

  private

  def ensure_img_url
    self.img_url ||= "assets/shows/deadwood/gem.jpg"
  end
end
