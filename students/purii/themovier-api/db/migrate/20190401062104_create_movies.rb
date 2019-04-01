class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.number :year
      t.integer :runtime
      t.string :genre
      t.string :directors
      t.string :writers
      t.string :actors
      t.string :plot
      t.string :country
      t.string :poster
      t.decimal :imdb_rating

      t.timestamps
    end
  end
end
