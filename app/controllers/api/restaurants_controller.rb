class Api::RestaurantsController < ApplicationController
    
    def index
        @restaurants = Restaurant.all
        render :index
    end
    
    def show
        @restaurant = Restaurant.find(params[:id])
        render :show
    end

    def create
        @restaurant = Restaurant.new(rest_params)
        if @restaurant.save
            render json: {}
        else
            render json: {}
        end
    end

    private
    def rest_params
        params.require(:restaurant).permit(:name, :owner_id, :description, :cuisine)
    end
end
