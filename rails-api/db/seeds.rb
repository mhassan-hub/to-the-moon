# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars'}, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "-----Seeding-----"

User.create!({
  username: "omarirfan",
  email: "a@a.com",
  password: "s",
  password_confirmation: "s",
  high_score: 1234
})

User.create!({
  username: "gman",
  email: "7@a.com",
  password: "s",
  password_confirmation: "s",
  high_score: 5678
})

User.create!({
  username: "carolinafinklestien",
  email: "7@a5656.com",
  password: "s",
  password_confirmation: "s",
  high_score: 8799
})

User.create!({
  username: "abdulmateen",
  email: "7@a56fef56.com",
  password: "s",
  password_confirmation: "s",
  high_score: 999
})

User.create!({
  username: "abdulraheem",
  email: "7@a5633356.com",
  password: "s",
  password_confirmation: "s",
  high_score: 120
})

puts "-----Seeding Complete-----"