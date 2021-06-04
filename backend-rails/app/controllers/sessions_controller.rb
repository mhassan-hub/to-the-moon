class SessionsController < ApplicationController
  # def new
  # end

  # def create
  #   user = User.find_by_email(params[:email])
  #   # If the user exists AND the password entered is correct.
  #   if user && user.authenticate(params[:password])
  #     # Save the user id inside the browser cookie. This is how we keep the user 
  #     # logged in when they navigate around our website.
  #     session[:user_id] = user.id
  #     redirect_to '/'
  #   else
  #   # If user's login doesn't work, send them back to the login form.
  #     redirect_to '/login'
  #   end
  # end

  # def destroy
  #   session[:user_id] = nil
  #   redirect_to '/login'
  # end

  def create
    user = User.find_by(email: params["user"]["email"]).try(:authenticate, params["user"]["password"])

    if user
        session[:user_id] = user.id
        render json: {
            status: :created,
            logged_in: true,
            user: user
        } 
    else
        render json: { status: 401 }
    end
  end
end
