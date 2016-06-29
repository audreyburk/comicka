class CreateComics < ActiveRecord::Migration
  def change
    create_table :comics do |t|
      t.string :title, null: false
      t.string :shortname, null: false
      t.integer :creator_id, null: false
      t.string :thumb_url, null: false
      t.string :banner_url, null: false

      t.timestamps null: false
    end
    add_index :comics, :shortname, unique: true
    add_index :comics, :creator_id
  end
end
