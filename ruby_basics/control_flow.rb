puts 'a?'
a = gets.chomp

b = case a
    when 1 then 'a'
    when 2 then 'b'
    when 3 then 'c'
    when /^hello[\w\s\,]*$/ then 'regexp matched!'
    else 'd'
    end

puts 'b' unless a

puts "b: #{b}"
