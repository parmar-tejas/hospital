class CreateTimeSlots < ActiveRecord::Migration[5.0]
  def change
    create_table :time_slots do |t|
      t.time      :time_from
      t.time      :time_to
      t.boolean   :disabled, default: false
      t.timestamps null: false
      t.timestamps
    end
  end
end
