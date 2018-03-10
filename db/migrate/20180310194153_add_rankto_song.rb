class AddRanktoSong < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :rank, :integer
  end
end
