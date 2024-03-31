input_line = gets.split(" ")

food = input_line[0].to_i
percent_sold_raw = (input_line[1].to_i) / 100.0
percent_sold_dish = (input_line[2].to_i) / 100.0

leftover = (food - (food * percent_sold_raw))
p (leftover - (leftover * percent_sold_dish))
