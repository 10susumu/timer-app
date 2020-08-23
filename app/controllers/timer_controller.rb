class TimerController < ApplicationController
  attr_accessor :hour, :minutes

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
  
  def destroy
    timer = Timer.find(params[:id])
    timer.destroy
    redirect_to root_path
  end

  def edit
    @timer = Timer.find(params[:id])
  end
  def update
    @timer = Timer.find(params[:id])
    @timer.update(timer_params)
    redirect_to root_path
  end

  def timer_params
    params.require(:timer).permit(:name, :wday_id, :onoff, :sound_id, :time, :hour, :minutes)
  end

end
