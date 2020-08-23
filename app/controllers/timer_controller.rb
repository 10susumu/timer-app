class TimerController < ApplicationController
  def index
    @timer = Timer.all
  end
  def new
    @timer = Timer.new
  end
  def create
    @timer = Timer.new(timer_params)
    if @timer.save
      binding.pry
      redirect_to root_path
    else
      render :new
    end
  end

  def timer_params
    params.require(:timer).permit(:name, :wday_id, :onoff, :sound_id, :time, :hour, :minutes)
  end

  def set_time
    self.time =[@hour, @minutes].join(":")
  end
end
