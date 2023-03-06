class House < ApplicationRecord
  belongs_to :user
  has_many :offers, dependent: :destroy
  has_many :users, through: :offers
end
