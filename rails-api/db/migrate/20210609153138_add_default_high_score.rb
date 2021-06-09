class AddDefaultHighScore < ActiveRecord::Migration[6.1]
  def change
    change_column_null :users, :high_score, 0
  change_column_default :users, :high_score, 0
  end
end
