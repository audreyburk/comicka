class Page < ActiveRecord::Base
  validates :comic_id, :image_url, :thumb_url, presence: true
  # TODO: validate urls?

  belongs_to :comic, dependent: :destroy
end
