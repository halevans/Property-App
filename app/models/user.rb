class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :api


  has_many :houses, dependent: :destroy
  has_many :offers, dependent: :destroy
  has_many :offered_houses, through: :offers, source: :house
end
