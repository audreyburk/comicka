class RedoPagesTable < ActiveRecord::Migration
  def change
    change_column :pages, :comic_id, :string
    rename_column :pages, :comic_id, :comic_shortname
  end
end
