class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.references :follower, index: true, foreign_key: { to_table: :users }
      t.references :following, index: true, foreign_key: { to_table: :users }
      t.timestamp :created_at

      t.timestamps
    end
  end
end
