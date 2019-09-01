Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:create, :show, :index, :update, :destroy] do 
      resources :steps, only: [:create, :show, :index, :update, :destroy]
    end 
  end

  root to: 'static_pages#root'

end
