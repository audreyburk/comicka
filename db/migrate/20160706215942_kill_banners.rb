class KillBanners < ActiveRecord::Migration
  def change
    remove_column :comics, :banner_url
  end
end
