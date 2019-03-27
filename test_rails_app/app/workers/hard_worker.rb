class HardWorker
  include Sidekiq::Worker

  def perform(course_id)
    course = Course.find course_id
    logger.info 'Hard work in progress...'
    sleep 10
  end
end
