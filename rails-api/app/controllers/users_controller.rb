class UsersController < ApplicationController
    
  def index
      @users = User.all
         if @users
            render json: {
            users: @users
         }
        else
            render json: {
            status: 500,
            errors: ['no users found']
        }
       end
  end
def show
     @user = User.find(params[:id])
         if @user
            render json: {
            user: @user
         }
         else
            render json: {
            status: 500,
            errors: ['user not found']
          }
         end
    end
    
    def create
       @user = User.new(user_params)
           if @user.save
               login!  
               render json: {
               status: :created,
               user: @user
           }
          else 
              render json: {
              status: 500,
              errors: @user.errors.full_messages
          }
          end
    end
    def submit_score
        @user = User.find(params[:id])

        if params[:high_score] > @user.high_score
        puts params[:high_score]
        @user.update(high_score: params[:high_score], email: @user.email, password: @user.password_digest,  username: @user.username)
        render json: {
            status: 200
        }
        end
    end

    def show_scores
        high_scores = User.all.select(:username, :high_score).order(high_score: :desc).limit(5)
        render json: {high_scores: high_scores.as_json(:except => [:id])}
    end
private
    
   def user_params
       params.require(:user).permit(:username, :email, :password, :password_confirmation)
   end

end