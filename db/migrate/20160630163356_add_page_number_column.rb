class AddPageNumberColumn < ActiveRecord::Migration
  def change
    add_column :pages, :page_number, :integer, null: false
  end
end
