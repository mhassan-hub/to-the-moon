class Settings < ActiveRecord::Migration
  def change
    create_table :settings do |t|
      t.string :user_id
      t.string :racer
      t.integer :key_bindings
      t.integer :volume


      t.timestamps
    end
  end
end
