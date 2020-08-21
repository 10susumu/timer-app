Rails.application.routes.draw do
  root "timer#index"
  resources :timer
end
