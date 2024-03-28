input_line = gets
word = input_line[0..-2]

grouped_array = word.chars.slice_when { |a, b| a != b }.map(&:join)

result = grouped_array.map do |each|
    each.include?("-") ? each[0] : each
end

puts result.join
