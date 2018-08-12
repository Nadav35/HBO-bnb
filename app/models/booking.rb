# == Schema Information
#
# Table name: bookings
#
#  id         :bigint(8)        not null, primary key
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  num_guests :integer          not null
#  spot_id    :integer          not null
#  booker_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  validates :start_date, :end_date, :num_guests, :spot_id, presence: true

  # maybe add validations to check that check in is before check out
  # and that the place isnt booked already
  belongs_to :spot
  belongs_to :booker,
    primary_key: :id,
    foreign_key: :booker_id,
    class_name: :User

  # has_many :spots,
  #   through: :booker,
  #   source: :spots


end
