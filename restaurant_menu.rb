want_to_eat = gets[0..-2]
number_of_words = gets.to_i
dish = gets[0..-2].split(" ")

include_want_to_eat = dish.filter { |word| word == want_to_eat }

puts !include_want_to_eat.empty? ? "Yes" : "No"
