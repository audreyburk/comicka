class RemovePageShortNameAgain < ActiveRecord::Migration
  def change
    remove_column :pages, :comic_shortname
  end
end
