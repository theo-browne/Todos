class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.integer :todo_id, null: false
      t.boolean :done, default: false
      t.index :todo_id
      t.timestamps
    end
  end
end
