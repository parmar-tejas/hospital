class CreateAppointments < ActiveRecord::Migration[5.0]
  def change
    create_table :appointments do |t|
      t.integer :doctor_id
      t.integer :time_slot_id
      t.string  :first_name, limit: 255
      t.string  :last_name, limit: 255
      t.string  :mobile_number, limit: 12
      t.string  :email,              null: false, default: ""
      t.date    :date_of_birth
      t.date    :appointment_date
      t.string  :gender, limit: 7
      t.text    :address
      t.text    :reason_for_visit
      t.string  :city, limit: 255
      t.string  :state, limit: 255
      t.string  :method_of_contact, limit: 5
      t.boolean :domestic, default: true
      t.boolean :routine_visit, default: false
      t.timestamps
    end
  end
end
