class HomeController < ApplicationController
  def index
    render json: {ok: true, name: params[:name]}
  end

  def hello
    render text: "<h2>Hello, world!</h2>"
  end

  def students
    @students = ::Student.all
    students_arr = @students.map do |s|
      {full_name: s.full_name}
    end
    logger.info "students_arr: #{students_arr}"
    render json: students_arr
  end

  def all_students
    render json: Student.all
  end
end
