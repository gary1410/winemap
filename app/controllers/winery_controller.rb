class WineryController < ApplicationController
  def index
    gon.wineries = Winery.all
  end
end