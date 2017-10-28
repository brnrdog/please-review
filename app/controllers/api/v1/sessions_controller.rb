# Controller responsible to handle user session management
class Api::V1::SessionsController < ApplicationController
  def create
    @user = User.find_or_create_from_auth_hash(auth_hash)
    @user.update(token: auth_hash['credentials']['token'])
    session[:current_user] = @user
    cookies[:current_user] = @user.to_camel_case_json.to_json
    redirect_to root_path
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end
end
