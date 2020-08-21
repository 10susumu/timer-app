class Timer < ApplicationRecord
  with_options presence: true do
    validates :name
    validates :time
    validates :wday_id
    validates :onoff
    validates :sound_id
  end
end
