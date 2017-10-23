Rails.application.routes.draw do
  root to: 'application#index'

  get '/auth/:provider/callback', to: 'api/v1/sessions#create'
  get '/review-requests', to: 'application#index'
  get '/login', to: 'application#index'
end
