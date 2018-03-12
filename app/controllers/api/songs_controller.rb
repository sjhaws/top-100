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
    # NOTE: in theory the js would check if the PATCH failed, 
    # and if so revert the change locally rather than
    # sending back a json object as done here
    if @song.update(song_params)
      render json: Song.all
    else  
      render json: { errors: @song.errors }, status: 422
    end
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
    params.require(:song).permit(:title, :album, :album_art, :rank)
  end

end
  
