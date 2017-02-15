ActiveAdmin.register Appointment do
  permit_params :doctor_id, :time_slot_id, :first_name, :last_name, :mobile_number, :email, :date_of_birth, :appointment_date, :gender, :address, :reason_for_visit, :city, :state, :method_of_contact, :domestic, :routine_visit

  index do
    selectable_column
    id_column
    column :doctor
    column :time_slot
    column :first_name
    column :last_name
    column :mobile_number
    column :email
    column :appointment_date
    column :gender
    column :domestic
    column :routine_visit
    column :city
    column :state
    actions
  end

  filter :doctor
  filter :time_slot
  filter :appointment_date
  filter :email

  form do |f|
    f.inputs "Time Slots" do
      f.input(
        :doctor_id,
        label: 'Doctor',
        as: :select,
        collection: Doctor.where(
                      disabled: false
                    ).pluck(
                      :email,
                      :id
                    )
      )
      f.input( 
        :time_slot_id,
        label: 'Time Slot',
        as: :select,
        collection: TimeSlot.get_time_slot
      )
      f.input :first_name
      f.input :last_name
      f.input :mobile_number
      f.input :email
      f.input :date_of_birth, as: :date_picker
      f.input :gender, as: :select, collection: GENDER
      f.input :address
      f.input :city
      f.input :state
      f.input :appointment_date , as: :date_picker
      f.input :method_of_contact, as: :select, collection: CONTACT_METHOD
      f.input :domestic
      f.input :reason_for_visit
    end
    f.actions
  end

end