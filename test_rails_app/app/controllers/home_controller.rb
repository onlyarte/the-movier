class HomeController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: {ok: true, name: params[:name]}
  end

  def hello
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
    @students = ::Student.all
  end
end
