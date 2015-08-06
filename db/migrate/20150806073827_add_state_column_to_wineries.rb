class AddStateColumnToWineries < ActiveRecord::Migration
  def change  	
  	add_column :wineries, :state, :string
  	add_timestamps :wineries

  	execute("UPDATE wineries SET state = 'CA'")
  end
end
