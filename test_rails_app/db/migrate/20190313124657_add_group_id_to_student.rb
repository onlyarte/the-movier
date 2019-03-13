class AddGroupIdToStudent < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :group_id, :integer
  end
end
