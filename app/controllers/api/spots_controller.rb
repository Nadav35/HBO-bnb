class Api::SpotsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  def index
    # @spots = Spot.all
    # @spots = spots.includes(:owner)


    @spots = bounds ? Spot.in_bounds(bounds) : Spot.all
    #
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
    @spot = Spot.find(params[:id])
    @spot.destroy



  end

  private

  def spot_params
    params.require(:spot).permit(:title, :description,
      :img_url, :lng, :lat, :location, :price, :photo)
  end

  def bounds
    params[:bounds]

  end
end
