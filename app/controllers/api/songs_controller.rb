class Api::SongsController < ApplicationController 
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

  def update
    song = Song.find(params[:id])
    song.update( complete: !song.complete )
    render json: item
  end

  def destroy
    Song.find(params[:id]).destroy
    render json: { message: 'Item Deleted' }
  end

  private

  def song_params
    params.require(:song).permit(:title, :album, :album_art)
  end

end
  
