module Animals
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
      say
      bite
    end

    private
    def bite
      puts '*bites*'
    end
  end

  module HighSelfEsteemCreature
    def has_high_self_esteem?
      true
    end

    def self.some_static_method
      puts 'static module method'
    end
  end

  class Corgy < Dog
    include ::Animals::HighSelfEsteemCreature
    def say
      super + ' - Wooooof!'
    end
  end

  class Cat < Animal
    include ::Animals::HighSelfEsteemCreature
    def say
      'Meow!!'
    end
  end
end
