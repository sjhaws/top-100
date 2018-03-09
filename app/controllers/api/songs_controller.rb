class Api::SongsController < ApplicationController 
  before_action :set_song, only: [:update, :edit]
  
  def index
    render json: Song.all
  end

  def create
    song = Song.new(song_params)
    if song.save
      render json: song
    else
      render json: { errors: song.errors }, status: 422
    end
  end

  def edit
    # I think needed to render an edit page
    # unless we are going to make a edit react object 
    # or need to route to the edit form/controller
  end

  def update
    song = Song.find(params[:id])
    # if song.update(song_params)
    #   render:
    song.update( complete: !song.complete )
    render json: item
  end

  def destroy
    Song.find(params[:id]).destroy
    render json: { message: 'Item Deleted' }
  end

  private

  def set_song
    @song = Song.find(params[:id])
  end

  def song_params
    params.require(:song).permit(:title, :album, :album_art)
  end

end
  
