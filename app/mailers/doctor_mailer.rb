class DoctorMailer < ActionMailer::Base
  default from: 'admin@hospital.com'

  def send_mail_to_doctor(appointment)
    @time       = appointment.get_appointment_time
    @date       = appointment.appointment_date
    @title = "User Booked An Appointment"
    mail(
      to: appointment.try(:doctor).try(:email), 
      subject: 'User Booked An Appointment'
    )
  end

  def send_mail_to_user(appointment)
    @time       = appointment.get_appointment_time
    @date       = appointment.appointment_date
    @first_name = appointment.try(:doctor).try(:first_name)
    @last_name  = appointment.try(:doctor).try(:last_name)
    @title = "User Booked An Appointment"
    mail(
      to: appointment.try(:email), 
      subject: 'Your Appointment Booked.'
    )
  end
end