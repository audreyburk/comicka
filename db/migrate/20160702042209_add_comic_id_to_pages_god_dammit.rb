class AddComicIdToPagesGodDammit < ActiveRecord::Migration
  def change
    add_column :pages, :comic_id, :integer, null: false
  end
end
