class OffersController < ApplicationController
  def index
    @offers = Offer.all

    render json: @offers
  end
end
