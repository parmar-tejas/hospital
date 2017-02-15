class AdminUser < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, 
         :recoverable, :rememberable, :trackable, :validatable

  devise(
    :database_authenticatable,
    :recoverable,
    :rememberable,
    :trackable,
    :validatable
  )

  #
  # Validations
  #
  validates(
    :email,
    format: { with: EMAIL_REGEX },
    length: { in: 5..255 },
    uniqueness: true,
    presence: true
  )

  validates(
    :mobile_number,
    length: { in: 10..12 },
    uniqueness: true,
    presence: true
  )

  validates(
    :password,
    length: { minimum: 8 },
    confirmation: true,
    presence: true
  )

  validates(
    :first_name,
    length: { in: 3..255 },
    uniqueness: true,
    presence: true
  )

  validates(
    :last_name,
    length: { in: 3..255 },
    uniqueness: true,
    presence: true
  )
end
