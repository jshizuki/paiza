input_line = gets
number_of_questions = input_line[0..-2].to_i

questions = Hash.new
question_number = 1

number_of_questions.times do
    answer = gets[0..-2].split(" ")
    questions[question_number] = answer
    question_number += 1
end

result = []

questions.each do |each|
    if !(each[1][0] == "y" && each[1][1] == "y")
        result << each[0]
    end
end

puts result.length
puts result
