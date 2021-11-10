class Api::ReviewsController < ApplicationController

    def index
        if params[:user_id]
            @reviews = Review.where(author_id: params[:user_id]);
        elsif params[:restaurant_id]
            @reviews = Review.where(restaurant_id: params[:restaurant_id])
        end
        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        elsif @review.title == ''
            render json: ['Please enter a valid title'], status: 422
        else
            render json: ['Invalid Params'], status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy
            render :show
        else
            render json: ['Couldn\'t destroy review.'], status: 404
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: ['Invalid params'], status: 422
        end
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    private
    def review_params
        params.require(:review).permit(:author_id, :restaurant_id, :rating, :title, :body)
    end
end
