class A
  def method_with_block(arg, my_proc, &block)
    puts 'method begins'
    v = arg.to_i * 2
    puts "Block class: #{block.class}"
    return_val = block.call(v)
    return_val = my_proc.call(return_val)
    #yield(v) if block_given?
    puts "method ends #{return_val}"
  end
end
