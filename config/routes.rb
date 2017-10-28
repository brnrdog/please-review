Rails.application.routes.draw do
  root to: 'application#index'

  namespace :api do
    namespace :v1 do
      namespace :github do
        resources :repositories, only: :index
        resources :pull_requests, only: :index
        resources :close_review_request, only: :update
      end

      resources :review_requests, only: [:create, :index]
    end
  end

  get '/auth/:provider/callback', to: 'api/v1/sessions#create'
  get '/review-requests', to: 'application#index'
  get '/login', to: 'application#index'
end
