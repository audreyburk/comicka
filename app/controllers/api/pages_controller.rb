class Api::PagesController < ApplicationController
  def create
    @page = Page.new(page_params)
    if @page.save
      @comic = Comic.find(@page.comic_id)
      render "api/comics/show"
    else
      render json: @page.errors, status: 422
    end
  end

  def update
    @page = Page.find(params[:id])
    if @page.update_attributes(page_params)
      @comic = Comic.find(@page.comic_id)
      render "api/comics/show"
    else
      render json: @page.errors, status: 422
    end
  end

  def destroy
    @page = Page.find(params[:id])
    if @page
      @page.destroy
      @comic = Comic.find(@page.comic_id)
      render "api/comics/show"
    else
      render( json: { base: ["Page not found"] },
              status: 404 )
    end
  end

  private
  def page_params
    fields = [:title, :comic_id, :image_url, :thumb_url, :caption]
    params.require(:page).permit(*fields)
  end

  # TODO: Should I find chunks of pages in here?
  #       Or in the ComicsController?
end
