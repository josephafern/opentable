Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :bookings, only: [:update, :index, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:create, :show, :index] do
      collection do
        get :search, to: 'restaurants#search', as: 'search'
      end
    end
    resources :bookings, only: [:create]
  end
end
