class Api::SpotsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  def index
    @spots = Spot.all
    # @spots = spots.includes(:owner)
    render :index

  end

  def create
    @spot = Spot.new(spot_params)
    @spot.owner_id = current_user.id
    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def show
    @spot = Spot.find(params[:id])
    render :show
  end

  def update
    @spot = Spot.find(params[:id])
    if @spot.update_attributes(spot_params)
      render :show
    else
      render json: @spot.errors.full_messages, status: 401
    end

  end

  def destroy
    debugger
    @spot = Spot.find(params[:id])
    @spot.destroy

    render :show

  end

  private

  def spot_params
    params.require(:spot).permit(:title, :description,
      :img_url, :lng, :lat, :location, :price)
  end
end
