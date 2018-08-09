class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.all
    # @spots = spots.includes(:owner)
    render :index

  end

  def create

  end

  def show

  end

  def update

  end

  def destroy

  end
end
