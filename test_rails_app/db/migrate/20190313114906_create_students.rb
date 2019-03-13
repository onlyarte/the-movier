class CreateStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :students do |t|
      t.string :first_name, limit: 50, null: false, default: ''
      t.string :last_name, limit: 100
      t.float :avg_rating
      t.date :date_of_birth, null: true
      t.timestamps
    end
  end
end
