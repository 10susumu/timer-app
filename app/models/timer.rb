class Timer < ApplicationRecord
  attr_accessor :hour, :minutes
  before_validation :set_time

  with_options presence: true do
    validates :name, length: { maximum: 16 }
    validates :time
    validates :hour, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 23 }
    validates :minutes, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 59 }
    validates :wday_id
    validates :onoff
    validates :sound_id
  end

  def set_time
    self.time =[@hour, @minutes].join(":")
  end
end
