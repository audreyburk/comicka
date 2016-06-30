class Page < ActiveRecord::Base
  validates :comic_id, :image_url, :thumb_url, presence: true
  belongs_to :comic
end
