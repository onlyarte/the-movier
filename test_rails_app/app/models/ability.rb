class Ability
  include CanCan::Ability

  def initialize(user)
    if user.is_admin?
      can :manage, Course
    else
      can :read, Course
    end
  end
end
