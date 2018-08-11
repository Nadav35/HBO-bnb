# == Schema Information
#
# Table name: reviews
#
#  id          :bigint(8)        not null, primary key
#  rating      :integer          not null
#  description :text             not null
#  reviewer_id :integer          not null
#  spot_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
  validates :rating, :description, presence: true

  after_initialize :ensure_description

  belongs_to :reviewer,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: :User

  belongs_to :spot

  private

  def ensure_description
    self.description ||= Faker::RickAndMorty.quote
  end
end
