# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  img_url         :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 , allow_nil: true }

  # after_initialize :ensure_photo
  after_initialize :ensure_session_token
  after_initialize :ensure_img_url

  attr_reader :password

  has_many :spots,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Spot
  has_many :bookings,
    primary_key: :id,
    foreign_key: :booker_id,
    class_name: :Booking

  has_many :booked_spots,
    through: :bookings,
    source: :spot

  has_many :reviews,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: :Review

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

  # def ensure_img_url
    # self.img_url ||= "assets/shows/silicon_valley/erlich.jpg"
    # self.imaeg_url = "assets/shows/silicon_valley/erlich.jpg" if !self.photo.attached?
    # if self.photo.attached?
    #   self.img_url = rails_blob_path(self.photo, disposition: "attachment")
    #   debugger
    # else
    #   self.photo.attach(io: File.open("/Users/nadavnoy/Desktop/AirBnB1/Airbnb-clone/app/assets/images/peter.png"),
    #   filename: "peter")
    #   self.img_url = rails_blob_path(self.photo, disposition: "attachment")
    # end
  # end

  def ensure_img_url
    self.img_url ||= "https://s3-us-west-1.amazonaws.com/hbobnb-dev/3bTxpVWbZZvo1Z1uuPw7jz72"

  end

  # def ensure_photo
  #
  #   # if not an object  seeded with pic or for user not uploading image, set a deault img
  #   if !self.photo.attached? && !self.img_url
  #     self.photo.attach(io: File.open("/Users/nadavnoy/Desktop/AirBnB1/Airbnb-clone/app/assets/images/peter.png"),
  #     filename: "peter")
  #   end
  # end

  # def ensure_photo
  #   unless self.photo.attached?
  #     errors[:photo] << "must be attached"
  #   end
  # end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end


end
