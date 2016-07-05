class RemoveBanners < ActiveRecord::Migration
  def change
    change_column :comics, :banner_url, :string, null: true
  end
end
