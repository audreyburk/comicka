class Page < ActiveRecord::Base
  validates :comic_id, :image_url, :thumb_url, :page_number, presence: true
  belongs_to :comic
end
