class Api::ComicsController < ApplicationController

  # TODO: what even are errors?
  #       appropriate way to display them
  #       and WHY

  def create
    @comic = Comic.new(comic_params)
    if @comic.save
      render :show
    else
      render json: @comic.errors, status: 422
    end
  end

  def show
    # TODO: confirm that finding by shortname
    #       doesn't destroy everything ever
    @comic = Comic.find_by(shortname: params[:id])
    if @comic
      render "api/comics/show"
    else
      render( json: { base: ["Comic not found"] },
              status: 404 )
    end
  end

  def index
    @comics = Comic.all
    render :index
  end

  def update
    @comic = Comic.find(params[:id])
    # TODO: ensure shortname can't be changed
    if @comic.update_attributes(comic_params)
      render "api/comics/show"
    else
      render json: @comic.errors, status: 422
    end
  end

  def destroy
    @comic = Comic.find(params[:id])
    if @comic
      @comic.destroy
      render "api/comics/show"
    else
      render( json: { base: ["Comic not found"] },
              status: 404 )
    end
  end

  private
  def comic_params
    fields = [:title, :shortname, :creator_id, :thumb_url, :banner_url]
    params.require(:comic).permit(*fields)
  end

end
