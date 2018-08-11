class Api::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  def create
    @review = Review.new(review_params)
    @review.reviewer_id = current_user.id
    @review.spot_id = params[:spot_id]

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  # def index
  #   @reviews = Spot.find(params[:spot_id]).reviews.includes(:reviewer)
  #
  # end

  def update

  end

  def destroy

  end

  def review_params
    params.require(:review).permit(:rating, :description)
  end

end
