class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title
      t.references :author, index: true, foreign_key: { to_table: :users }
      t.timestamp :created_at

      t.timestamps
    end
  end
end
