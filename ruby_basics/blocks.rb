class A
  def method_with_block(arg)
    puts 'method begins'
    yield if block_given?
    puts 'method ends'
  end
end
