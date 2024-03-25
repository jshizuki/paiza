input = gets.split
number_of_cars = input[0].to_i
traffic_jam = input[1].to_i

car_distances = []

(number_of_cars - 1).times do
    distance = gets.to_i
    car_distances << distance
end

total_jam_distances = []
car_distances.each do |distance|
    if distance <= traffic_jam
        total_jam_distances << distance
    end
end

total_jam_distances.sum
