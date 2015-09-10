class Winery < ActiveRecord::Base
  geocoded_by :full_address
  after_validation :geocode, if: ->(obj){ (obj.address.present? && obj.address_changed?) || obj.longitude.blank? || obj.lattitude.blank?}

  def full_address
    [address, city, state, zipcode].compact.join(', ')
  end
end
