class Appointment < ApplicationRecord

  #
  # Associations
  #

  belongs_to(
    :doctor
  )

  belongs_to(
    :time_slot
  )

  #
  # Validations
  #

  validates(
    :email,
    format: { with: EMAIL_REGEX },
    length: { in: 5..255 },
    presence: true
  )

  validates(
    :mobile_number,
    length: { in: 10..12 },
    presence: true
  )

  validates(
    :first_name,
    length: { in: 3..255 },
    presence: true
  )

  validates(
    :last_name,
    length: { in: 3..255 },
    presence: true
  )

  validates(
    :doctor,
    presence: true
  )

  validates(
    :time_slot_id,
    presence: true,
    uniqueness: {
      scope: [
        :appointment_date,
        :doctor_id
      ]
    }
  )

  validates(
    :date_of_birth,
    presence: true
  )

  validates(
    :appointment_date,
    presence: true
  )

  validates(
    :gender,
    presence: true,
    inclusion: { in: GENDER }
  )

  validates(
    :address,
    presence: true
  )

  validates(
    :reason_for_visit,
    presence: true
  )

  validates(
    :city,
    presence: true
  )

  validates(
    :state,
    presence: true
  )

  validates(
    :method_of_contact,
    presence: true,
    inclusion: { in: CONTACT_METHOD }
  )

  validates(
    :city,
    presence: true
  )

  after_create :send_email

  def send_email
    DoctorMailer.send_mail_to_doctor(self).deliver
    DoctorMailer.send_mail_to_user(self).deliver
  end

  def get_appointment_time
    return "#{self.try(:time_slot).try(:time_from).strftime("%I:%M %p")} To #{self.try(:time_slot).try(:time_to).strftime("%I:%M %p")}"
  end
end