class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.integer :comic_id, null: false
      t.string :image_url, null: false
      t.string :thumb_url, null: false
      t.string :title
      t.text :caption

      t.timestamps null: false
    end
    add_index :pages, :comic_id
  end
end
