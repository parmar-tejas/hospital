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

unless Doctor.any?
  Doctor.create!(
    email: 'bkchovatiya143@gmail.com',
    password: 'password',
    password_confirmation:'password',
    first_name: "BKK",
    last_name: "Chovatiya",
    mobile_number: "8866626664"
  )
  Doctor.create!(
    email: 'tejas.parmar@gmail.com',
    password: 'password',
    password_confirmation:'password',
    first_name: "BKK",
    last_name: "Chovatiya",
    mobile_number: "9016161916"
  )
end

unless User.any?
  User.create!(
    email: 'bkchovatiya143@gmail.com',
    password: 'password',
    password_confirmation:'password',
    first_name: "BKK",
    last_name: "Chovatiya",
    mobile_number: "8866626664"
  )
  User.create!(
    email: 'tejas.parmar@gmail.com',
    password: 'password',
    password_confirmation:'password',
    first_name: "BKK",
    last_name: "Chovatiya",
    mobile_number: "9016161916"
  )
end