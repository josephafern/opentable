class Api::BookingsController < ApplicationController
    
    def index
        @bookings = Booking.where(maker_id: params[:user_id])
        render :index
    end

    def create
        @booking = current_user.reservations.new(booking_params)
        if @booking.save
            render :show
        else
            render json: ['Invalid params'], status: 422
        end
    end

    def show
        @booking = Booking.find(params[:id])
        render :show
    end

    def destroy
        @booking = Booking.find(params[:id])
        if @booking.destroy
            render :show
        else
            render json: ['Couldn\'t destroy booking.'], status: 404
        end
    end

    def update
        @booking = Booking.find(params[:id])
        if @booking.update(booking_params)
            render :show
        else
            render json: ['Invalid params'], status: 422
        end
    end

    private
    def booking_params
        params.require(:booking).permit(:maker_id, :restaurant_id, :date, :time, :guests)
    end
end

#success message rendered upon booking creation, update booking through user profile