require 'rack'

min_app = proc do |env|
  if env['REQUEST_PATH'] == '/hello'
    [
      200,
      {},
      ['Hello, world!']
    ]
  else
    [
      404,
      {'Content-Type' => 'application/json'},
      ['Not found']
    ]
  end
end

Rack::Handler.default.run min_app
