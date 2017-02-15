class PatientCareController < ApplicationController

  def admission_process
  end

  def discharge_process
  end

  def guidelines_for_visitors
  end

  def patient_and_attendant_responsibilities
  end

  def testimonials
  end

  def opd_schedule
  end

  def find_a_doctor
  end

  def book_an_appointment
    @time_slots = TimeSlot.all.where(disabled: false)
    @doctors    = Doctor.all.where(disabled: false)
    @appointment = Appointment.new
  end

  def create_an_appointment
    @time_slots = TimeSlot.all.where(disabled: false)
    @doctors    = Doctor.all.where(disabled: false)
    @appointment = Appointment.new(
      first_name: params["first_name"],
      last_name: params["last_name"],
      mobile_number: params["mobile_number"],
      email: params["email"],
      date_of_birth: params["date_of_birth"],
      gender: params["gender"],
      address: params["address"],
      city: params["city"],
      state: params["state"],
      doctor_id: params["doctor_id"],
      appointment_date: params["appointment_date"],
      time_slot_id: params["time_slot_id"],
      method_of_contact: params["method_of_contact"],
      domestic: params["domestic"],
      reason_for_visit: params["reason_for_visit"]
    )
    if @appointment.save
      @msg = "Your Appointment Has Been Book."
    else
      @msg = "Your Appointment Has Not Been Book Due to Some Reason. #{@appointment.errors.full_messages}"
    end
  end

end
