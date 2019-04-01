class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title
      t.references :author, foreign_key: true
      t.timestamp :created_at

      t.timestamps
    end
  end
end
