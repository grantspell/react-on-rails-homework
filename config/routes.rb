Rails.application.routes.draw do
  resources :doctors, path: '/api/doctors'
  resources :patients, path: '/api/patients'
  resources :appointments, path: '/api/appointments'
end
