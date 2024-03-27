input_line = gets.split(" ")
number_of_shops = input_line[0].to_i
number_of_months = input_line[1].to_i

input_line2 = gets.split(" ")
infra_cost = input_line2[0].to_i
head_cost = input_line2[1].to_i
profit_per_ramen = input_line2[2].to_i

ramen_sold = [];
number_of_shops.times do |shop|
    ramen_sold << gets[0..-2].to_i
end

revenues = ramen_sold.map do |ramen_sold_per_shop|
    (ramen_sold_per_shop * profit_per_ramen) - infra_cost - (head_cost * number_of_months)
end

p revenues.count { |revenue| revenue < 0 }
