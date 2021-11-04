class Api::RestaurantsController < ApplicationController
    
    def index
        @restaurants = Restaurant.all
        render :index
    end
    
    def show
        @restaurant = Restaurant.includes(:reviews).where(id: params[:id]).first
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

     def search
        queryInfo = params[:query]
        @restaurants = Restaurant.where('name ILIKE ? OR cuisine ILIKE ?', "%#{queryInfo}%", "%#{queryInfo}%")
        if params[:query] == ''
            @restaurants = []
            render :index
        elsif @restaurants.length > 0
            render :index
        else
            render json: ["Uh oh! We we're unable to find any restaurants matching this information. Please try another query."], status: 404
        end
    end

    private
    def rest_params
        params.require(:restaurant).permit(:name, :owner_id, :description, :cuisine)
    end
end
