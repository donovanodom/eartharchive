Rails.application.routes.draw do
  scope '/v1' do
    resources :users
    post '/signup', to: 'users#create'
    post '/password-score', to: 'users#password_score'
  end
end
