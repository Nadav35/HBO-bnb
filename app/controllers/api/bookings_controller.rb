class Api::BookingsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false

  def index
    @spots = current_user.booked_spots
    render 'api/spots/index'

  end

  def create
    @booking = Booking.new(booking_params)
    @booking.booker_id = current_user.id
    @booking.spot_id = params[:spot_id]
    if @booking.save
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status: 422
    end

  end

  def show
    @booking = Booking.find(params[:id])
    render 'api/bookings/show'

  end

  def update
    @booking = Booking.find(params[:id])
    if @booking.update_attributes(booking_params)
      render 'api/bookings/booking'
    else
      render json: @booking.errors.full_messages, status: 401
    end

  end

  def delete
    @booking = Booking.find(params[:id])
    @spot.destroy
    render 'api/bookings/booking'
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date,
      :num_guests)
  end
end
