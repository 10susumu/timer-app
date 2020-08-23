class Timer < ApplicationRecord
  attr_accessor :hour, :minutes
  before_validation :set_time

  with_options presence: true do
    validates :name
    validates :time, format: { with: //}
    validates :hour
    validates :minutes
    validates :wday_id
    validates :onoff
    validates :sound_id
  end

  def hour
    @hour
  end

  def minutes
    @minutes
  end

  def set_time
    self.time =[@hour, @minutes].join(":")
  end
end
