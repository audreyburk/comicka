json.extract! @comic, :id, :title, :shortname, :creator_id, :thumb_url

json.pages do
  @comic.pages.each do |page|
    json.set! page.page_number, page
  end
end

json.length @comic.pages.length
