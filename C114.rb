number_of_words = gets.to_i

words = Array.new
result = Array.new

number_of_words.times do
    words << gets[0..-2]
end

words.each_with_index do |each, index|
    if index + 1 < words.length
        each[-1] == words[index + 1][0] ? result << true : result << each[-1] + " " + words[index + 1][0]
    end
end

result.all?(true) ? answer = "Yes" : answer = result.find { |each| each != true }

puts answer
