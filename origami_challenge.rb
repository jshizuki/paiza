input = gets
input.split
number_of_paper = input.split[0].to_i
height = input.split[1].to_i

width = [height]

(number_of_paper - 1).times do
    difference = gets.to_i
    width << height - difference
end

p width.sum * height
