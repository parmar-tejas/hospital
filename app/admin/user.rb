ActiveAdmin.register User do
  permit_params :email, :password, :password_confirmation, :mobile_number, :first_name, :last_name

  index do
    selectable_column
    id_column
    column :email
    column :mobile_number
    column :first_name
    column :last_name
    column :disabled
    column :current_sign_in_at
    column :sign_in_count
    column :created_at
    actions
  end

  filter :email
  filter :mobile_number
  filter :first_name
  filter :last_name
  filter :current_sign_in_at
  filter :sign_in_count
  filter :created_at
  filter :disabled

  form do |f|
    f.inputs "User Details" do
      f.input :mobile_number
      f.input :first_name
      f.input :last_name
      f.input :email
      f.input :password
      f.input :password_confirmation
      f.input :disabled
    end
    f.actions
  end

end
