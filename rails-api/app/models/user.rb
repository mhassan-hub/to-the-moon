class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
  validates :username, uniqueness: true
  validates :username, length: { minimum: 4 }
end