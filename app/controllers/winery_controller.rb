class WineryController < ApplicationController
  def index
    @winery_locations = Winery.all.map { |w| [w.name, w.latitude, w.longitude] }
  end
end
