require 'rack'

class AdvRackApp
  def call(env)
    [
      200,
      {},
      ['Class-based rack app']
    ]
  end
end

run AdvRackApp.new
