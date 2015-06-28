class CreateWinery < ActiveRecord::Migration
  def change
    create_table :wineries do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :zipcode
      t.string :winery_type
      t.string :tasting_room
      t.string :tasting_room_hours
      t.string :ava
      t.float  :longitude
      t.float  :latitude
    end
  end
end


