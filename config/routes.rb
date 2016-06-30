Rails.application.routes.draw do
  namespace :api, default: {format: :json} do
    resources :users, only: [:create]
    resource  :session, only: [:create, :destroy, :show]
    resources :comics, only: [:create, :destroy, :show, :index, :update]
    resources :pages, only: [:create, :destroy, :update]
  end
  root to: "static_pages#root"

  # TODO: what's this session#show business?
end
