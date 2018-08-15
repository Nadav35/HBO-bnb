# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 , allow_nil: true }

  after_initialize :ensure_photo
  after_initialize :ensure_session_token

  attr_reader :password

  has_many :spots,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Spot,
    dependent: :destroy
  has_many :bookings,
    primary_key: :id,
    foreign_key: :booker_id,
    class_name: :Booking,
    dependent: :destroy

  has_many :booked_spots,
    through: :bookings,
    source: :spot

  has_many :reviews,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: :Review,
    dependent: :destroy

  has_one_attached :photo

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_photo
    if !self.photo.attached?
      file = File.open('app/assets/images/shows/curb/larry.jpg')
      self.photo.attach(io: file, filename: "larry.jpg")
    end
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end


end
