# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


Transaction.create do |transaction|
  transaction.description = "description1"
  transaction.status = "settled"
  transaction.category = "food"
  transaction.amount = 10
end

Transaction.create do |transaction|
  transaction.description = "description2"
  transaction.status = "pending"
  transaction.category = "transport"
  transaction.amount = 10
end

Transaction.create do |transaction|
  transaction.description = "description3"
  transaction.status = "pending"
  transaction.category = "utilities"
  transaction.amount = 10
end

Transaction.create do |transaction|
  transaction.description = "description4"
  transaction.status = "pending"
  transaction.category = "entertainment"
  transaction.amount = 10
end

Transaction.create do |transaction|
  transaction.description = "description5"
  transaction.status = "pending"
  transaction.category = "health"
  transaction.amount = 10
end

Transaction.create do |transaction|
  transaction.description = "description6"
  transaction.status = "settled"
  transaction.category = "food"
  transaction.amount = 10
end

Transaction.create do |transaction|
  transaction.description = "description7"
  transaction.status = "pending"
  transaction.category = "transport"
  transaction.amount = 10
end

Transaction.create do |transaction|
  transaction.description = "description8"
  transaction.status = "pending"
  transaction.category = "utilities"
  transaction.amount = 10
end

Transaction.create do |transaction|
  transaction.description = "description9"
  transaction.status = "pending"
  transaction.category = "entertainment"
  transaction.amount = 10
end

Transaction.create do |transaction|
  transaction.description = "description10"
  transaction.status = "pending"
  transaction.category = "health"
  transaction.amount = 10
end