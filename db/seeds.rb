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


user_hal.houses.create!(asking_price: 250000, no_rooms: 2, img_url: "https://media.onthemarket.com/properties/629350/1428113043/image-0-1024x1024.jpg")
user_hal.houses.create!(asking_price: 1800000, no_rooms: 6, img_url: "https://media.onthemarket.com/properties/629350/1428113043/image-0-1024x1024.jpg")
user_hal.houses.create!(asking_price: 350000, no_rooms: 3, img_url: "https://res.cloudinary.com/simpleview/image/upload/v1641976068/clients/norway/Treetop_Cabins_Oslofjord_Gunnar_B_kkevold_Oi_design_Tretopphytter_Oslofjord_1__c182c0aa-693a-472c-b46b-333ad8c97dbf.jpg")

user_tom.houses.create!(asking_price: 1000000, no_rooms: 6, img_url: "https://i2-prod.getreading.co.uk/incoming/article22389222.ece/ALTERNATES/s1227b/0_Dale-House-Winkfield-Road-Windsor-1.jpg")

user_usman.houses.create!(asking_price: 100000, no_rooms: 3, img_url: "https://lid.zoocdn.com/645/430/daec2be27f2de7087385dd81c4f693673d1e7bec.jpg")

puts "*** Houses seeded! ***"


user_hal.offers.create!(offer_price: 120000, house_id: 5)
user_tom.offers.create!(offer_price: 260000, house_id: 1)

puts "*** Offers seeded! ***"

