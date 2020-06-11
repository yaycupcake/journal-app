# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :posts do
    resources :comments
  end

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
end
