# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "*** Seeding... ***"

user_hal = User.create!(first_name: "Hal", last_name: "Evans", phone_number: "07890123455", email: "hal.evans@gmail.com", password: "123456", password_confirmation: "123456")
user_tom = User.create!(first_name: "Tom", last_name: "Fairclough", phone_number: "07898765432", email: "tom.fairclough@gmail.com", password: "123456", password_confirmation: "123456")
user_usman = User.create!(first_name: "Usman", last_name: "Bashir", phone_number: "07123212321", email: "usman.bashir@gmail.com", password: "123456", password_confirmation: "123456")

puts "*** Users seeded! ***"


user_hal = User.find_by_first_name("Hal")

user_hal.houses.create!(asking_price: 250000, no_rooms: 2, img_url: "https://en.wikipedia.org/wiki/Tiny-house_movement#/media/File:Tiny_house,_Portland.jpg")
user_hal.houses.create!(asking_price: 1800000, no_rooms: 6, img_url: "https://media.onthemarket.com/properties/629350/1428113043/image-0-1024x1024.jpg")
