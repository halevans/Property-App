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
user_hal.houses.create!(asking_price: 1800000, no_rooms: 6, img_url: "https://thespaces.com/wp-content/uploads/2017/06/Villas-in-South-of-France-bonnieux.jpg")
user_hal.houses.create!(asking_price: 350000, no_rooms: 3, img_url: "https://res.cloudinary.com/simpleview/image/upload/v1641976068/clients/norway/Treetop_Cabins_Oslofjord_Gunnar_B_kkevold_Oi_design_Tretopphytter_Oslofjord_1__c182c0aa-693a-472c-b46b-333ad8c97dbf.jpg")

user_tom.houses.create!(asking_price: 1000000, no_rooms: 6, img_url: "https://i2-prod.getreading.co.uk/incoming/article22389222.ece/ALTERNATES/s1227b/0_Dale-House-Winkfield-Road-Windsor-1.jpg")
user_tom.houses.create!(asking_price: 460000, no_rooms: 2, img_url: "https://images.mansionglobal.com/im-540622?width=1299&height=867")

user_usman.houses.create!(asking_price: 100000, no_rooms: 3, img_url: "https://lid.zoocdn.com/645/430/daec2be27f2de7087385dd81c4f693673d1e7bec.jpg")
user_usman.houses.create!(asking_price: 75000, no_rooms: 4, img_url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2c/f2/c4.jpg")


puts "*** Houses seeded! ***"

user_hal.offers.create!(offer_price: 420000, house_id: 5)
user_hal.offers.create!(offer_price: 430000, house_id: 5)
user_hal.offers.create!(offer_price: 90000, house_id: 6)
user_hal.offers.create!(offer_price: 740000, house_id: 7)
user_tom.offers.create!(offer_price: 240000, house_id: 1)
user_tom.offers.create!(offer_price: 250000, house_id: 1)
user_tom.offers.create!(offer_price: 260000, house_id: 1)
user_tom.offers.create!(offer_price: 340000, house_id: 3)
user_tom.offers.create!(offer_price: 435000, house_id: 5)

user_usman.offers.create!(offer_price: 255000, house_id: 1)
user_usman.offers.create!(offer_price: 345000, house_id: 3)
user_usman.offers.create!(offer_price: 432500, house_id: 5)
user_usman.offers.create!(offer_price: 425000, house_id: 5)




puts "*** Offers seeded! ***"

