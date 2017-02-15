Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root 'home#index'

  get '/history', to: 'aboutus#history'
  get '/meet_the_management', to: 'aboutus#meet_the_management'
  get '/our_values', to: 'aboutus#our_values'
  get '/facilities', to: 'aboutus#facilities'
  get '/take_a_tour', to: 'aboutus#take_a_tour'
  get '/empanalments_and_tpa', to: 'aboutus#empanalments_and_tpa'


  get '/our_specialities', to: "our_specialities#our_specialities"
  get '/cardiology', to: "our_specialities#cardiology"
  get '/cardiac_surgery', to: "our_specialities#cardiac_surgery"
  get '/critical_care_medicine', to: "our_specialities#critical_care_medicine"
  get '/neurology', to: "our_specialities#neurology"
  get '/clinical_psychology', to: "our_specialities#clinical_psychology"
  get '/dentistry', to: "our_specialities#dentistry"
  get '/diabetology', to: "our_specialities#diabetology"
  get '/ent', to: "our_specialities#ent"
  get '/general_surgery', to: "our_specialities#general_surgery"
  get '/internal_medicine', to: "our_specialities#internal_medicine"

  get '/opd_schedule', to: "opd_schedule#opd_schedule"

  get '/admission_process', to: "patient_care#admission_process"
  get '/discharge_process', to: "patient_care#discharge_process"
  get '/guidelines_for_visitors', to: "patient_care#guidelines_for_visitors"
  get '/patient_and_attendant_responsibilities', to: "patient_care#patient_and_attendant_responsibilities"
  get '/testimonials', to: "patient_care#testimonials"
  get '/opd_schedule', to: "patient_care#opd_schedule"
  get '/find_a_doctor', to: "patient_care#find_a_doctor"
  get '/book_an_appointment', to: "patient_care#book_an_appointment"


  # devise_for :users
  # root "home#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
