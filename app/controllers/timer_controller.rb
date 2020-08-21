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
      redirect_to root_path
    else
      render :new
    end
  end

  def timer_params
    params.require(:timer).permit(:name, :time, :wday_id, :onoff, :sound_id)
  end
end
