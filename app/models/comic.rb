class Comic < ActiveRecord::Base
  validates :title, :shortname, :thumb_url, presence: true
  validates :shortname, uniqueness: true

  belongs_to :creator,
    class_name: "User"

  has_many :pages, dependent: :destroy
end
