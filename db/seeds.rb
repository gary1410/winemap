require 'csv'

filepath = Rails.root + 'lib/seeds/sonoma.csv'

ActiveRecord::Base.transaction do
  CSV.foreach(filepath, headers: true) do |row|
    winery = Winery.new
    if row['winery_type'].match('Tasting Room')
      winery.name = row['name']
      winery.address = row['address']
      winery.city = row['city']
      winery.zipcode = row['zipcode']
      winery.winery_type = row['winery_type']
      winery.tasting_room = row['tasting_room']
      winery.tasting_room_hours = row['tasting_room_hours']
      winery.ava = row['ava']
      winery.save
    end
  end
end
