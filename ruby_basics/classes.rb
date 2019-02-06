class Animal
  def initialize(weight = 0, age = 0)
    @weight = weight
    @age = age
  end

  def say
  end
end

class Dog < Animal
  def say
    'Wooof!'
  end

  def bark
    self.say
    bite
  end

  private
  def bite
    puts '*bites*'
  end
end

class Corgy < Dog
  def say
    super + ' - Wooooof!'
  end
end

class Cat < Animal
  def say
    'Meow!!'
  end
end
