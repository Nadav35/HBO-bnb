class Api::BookingsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false

  def index
    @spots = current_user.booked_spots
    @bookings = current_user.bookings
    render :index

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
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status: 401
    end

  end

  def destroy
    booking = Booking.find(params[:id])
    booking.destroy

  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date,
      :num_guests)
  end
end
