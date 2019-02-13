class String
  def foo
    puts 'foo baz bar'
  end
end

class Integer
  def +(value)
    self - value
  end
end
