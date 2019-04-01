class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.string :username
      t.string :name
      t.boolean :is_super

      t.timestamps
    end
    add_index :users, :email
    add_index :users, :username, unique: true
  end
end
