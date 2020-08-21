class CreateTimers < ActiveRecord::Migration[6.0]
  def change
    create_table :timers do |t|
      t.string :name, null:false
      t.time :time, null:false
      t.integer :wday_id, null:false
      t.boolean :onoff, null:false
      t.integer :sound_id, null:false
      t.timestamps
    end
  end
end
