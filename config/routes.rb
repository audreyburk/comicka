Rails.application.routes.draw do
  namespace :api, default: {format: :json} do
    resources :users, only: [:create]
    resource  :session, only: [:create, :destroy, :show]
    resources :comics, only: [:create, :destroy, :show, :index, :update]
    resources :pages, only: [:create, :destroy, :update]
  end
  root to: "static_pages#root"

  # TODO: Why must I go to /api/comics/1.json?
  #       sans json, tries to render html
  #       probably defaults specifies html through browser
  # TODO: uh-oh, :comic_id won't always start at one
  #       ugh, ask Brooke about how to do this.
  # TODO: but that's okay! keep it pretty in react
  # TODO: what's this session#show business?
end
