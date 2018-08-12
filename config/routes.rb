Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show, :create, :destroy, :update] do
      resources :reviews, only: [:index, :create]
      resources :bookings, only: [:create]
    end

    resources :reviews, only: [:update, :destroy]
    resources :bookings, only: [:index, :destroy, :update, :show]
  end
end
