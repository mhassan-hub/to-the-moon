class AddHighScoreToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :high_score, :integer
  end
end
