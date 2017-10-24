# Application Controller
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    return nil unless session[:current_user]
    User.find(session[:current_user]['id'])
  end
end
