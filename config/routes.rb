Rails.application.routes.draw do
  get 'pages/home'
  get 'pages/restricted'
  devise_for :users, 
             controllers: { tokens: 'tokens' }

  resources :users
  resources :houses
  resources :offers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
