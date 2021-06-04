class Users < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password
      t.integer :score

      t.timestamps
    end
  end
end
