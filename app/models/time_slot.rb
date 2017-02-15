class TimeSlot < ApplicationRecord

  #
  # Associations
  #
  has_many(
    :appoinments
  )

  #
  # Validations
  #
  validates(
    :time_from,
    presence: true
  )

  validates(
    :time_to,
    presence: true
  )

  def self.get_time_slot
    ary = []
    self.all.each do |time_slot|
      ary << ["#{time_slot.time_from.strftime("%I:%M %p")} To #{time_slot.time_to.strftime("%I:%M %p")}",time_slot.id]
    end
    return ary
  end
end
