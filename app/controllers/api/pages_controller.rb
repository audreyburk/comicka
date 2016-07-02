class Api::PagesController < ApplicationController

  def create
    page = Page.new(page_params)
    if page.save
      @comic = Comic.find(page.comic_id)
      render "api/comics/show"
    else
      render json: page.errors, status: 422
    end
  end

  def update
    page = Page.find(params[:id])
    if page.update_attributes(page_params)
      @comic = Comic.find(page.comic_id)
      render "api/comics/show"
    else
      render json: page.errors, status: 422
    end
  end

  def destroy
    page = Page.find(params[:id])
    if page
      @comic = Comic.find(page.comic_id)
      higher_pages = @comic.pages.where("page_number > ?", page.page_number)
      Page.transaction do
        higher_pages.each do |higher_page|
          higher_page.update_attributes!(page_number: higher_page.page_number - 1)
        end
      end
      page.destroy
      render "api/comics/show"
    else
      render( json: { base: ["Page not found"] },
              status: 404 )
    end
  end

  private
  def page_params
    params.require(:page).permit(:comic_id, :page_number, :title, :caption, :thumb_url, :image_url)
  end


  # def pages_params
  #   # params.require(:pages).permit!.permit(:titles)
  #   @page_params ||= JSON.parse(params.require(:pages))
  # end
end


# def create
#   Page.transaction do
#     pages_params.each do |page|
#       new_page = Page.create!({
#         title: page["title"],
#         comic_id: page["comic_id"],
#         image_url: page["image_url"],
#         thumb_url: page["thumb_url"],
#         page_number: page["page_number"],
#         caption: page["caption"]
#       })
#     end
#   end
#
#   @comic = Comic.find(pages_params.first["comic_id"])
#   render "api/comics/show"
# end
