class Api::StepsController < ApplicationController

  def show
  render json: Step.find(params[:id])
  end

  def index
    render json: Todo.find(params[:todo_id]).steps
  end

  def create
      @step = Step.new(step_params)
      if @step.save
        render json: @step
      else
        render json: @step.errors.full_messages, status: 422
      end

  end

   def update
    
      @step = Step.find(params[:id])
      
      if @step.update(step_params)
        render json: @step
      else
        render json: @step.errors.full_messages, status: 422
      end
    end

    def destroy
      @step = Step.find(params[:id])
      @step.destroy
      #  render json: Todo.all
      render json: @step
    end


  def step_params
    params.require(:todo).permit(:body, :done)
  end
end
