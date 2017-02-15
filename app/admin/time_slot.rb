ActiveAdmin.register TimeSlot do
  permit_params :time_from, :time_to, :disabled

  index do
    selectable_column
    id_column
    column :time_from
    column :time_to
    column :disabled
    actions
  end

  filter :time_from
  filter :time_to
  filter :disabled

  form do |f|
    f.inputs "Time Slots" do
      f.input :time_from
      f.input :time_to
      f.input :disabled
    end
    f.actions
  end

  show do
    panel "Time Slot" do
      attributes_table_for time_slot do
        row :id
        row :time_from
        row :time_to
        row :disabled
      end
    end
  end

end