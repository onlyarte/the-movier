class CreateListMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :list_movies do |t|
      t.references :movie, foreign_key: true
      t.references :list, foreign_key: true
      t.timestamp :created_at

      t.timestamps
    end
  end
end
