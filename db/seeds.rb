unless AdminUser.any?
  AdminUser.create!(
    email: 'admin@hospital.com',
    password: 'password',
    password_confirmation:'password',
    first_name: "BKK",
    last_name: "Chovatiya",
    mobile_number: "8866626664"
  )
end