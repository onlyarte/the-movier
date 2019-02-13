class Integer
  def method_missing(method_name, *args, &block)
    #puts "Method missing called: #{method_name} #{args}"
    if method_name =~ /^foo_(\d+)$/
      self + $1.to_i
    else
      super(method_name, *args, &block)
    end
  end

  %w[method_1 method_2 bla foo bar].each do |name|
    define_method(name) do
      puts "new method created"
    end
  end
end
