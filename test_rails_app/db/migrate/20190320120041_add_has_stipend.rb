class AddHasStipend < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :has_stipend, :boolean, default: false, null: false
  end
end
