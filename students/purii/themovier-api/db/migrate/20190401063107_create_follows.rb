class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.references :follower, foreign_key: true
      t.references :following, foreign_key: true
      t.timestamp :created_at

      t.timestamps
    end
  end
end
