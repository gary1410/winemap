class WineryController < ApplicationController
  def index
    gon.wineries = Winery.all
  end

  def show
    @winery = Winery.find(params[:id])
    # binding.pry
  end

  def directions
    gon.winery_tour = extract_lat_lon_values
  end

  private

  def extract_lat_lon_values
    wineries = Winery.first(5)
    lat_lon = wineries.map do |winery|
      [winery.latitude, winery.longitude]
    end
  end
end
