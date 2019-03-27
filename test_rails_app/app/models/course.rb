class Course < ApplicationRecord
  after_create :do_hard_work

  def do_hard_work
    ::HardWorker.perform_async(self.id)
  end
end
