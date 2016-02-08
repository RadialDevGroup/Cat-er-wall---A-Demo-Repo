class CatsController < ApplicationController
  before_action :find_cat, except: [ :index, :new, :create ]

  def index
    @cats = Cat.all
  end

  def show
  end

  def new
    @cat = Cat.new
  end

  def create
    @cat = Cat.new cat_params

    if @cat.save
      redirect_to @cat, success: "meow"
    else
      flash[:error] = @cat.errors.full_messages.to_sentence
      render :new
    end
  end

  def edit
  end

  def update
    @cat.attributes = cat_params

    if @cat.save
      redirect_to @cat, success: "meow"
    else
      flash[:error] = @cat.errors.full_messages.to_sentence
      render :new
    end
  end

  def destroy
    if @cat.destroy
      redirect_to cats_path, success: "Raour"
    else
      redirect_to show_path, error: @cat.errors.full_messages.to_sentence
    end
  end

  private

  def find_cat
    @cat = Cat.find(params[:id])
  end

  def cat_params
    params.require(:cat).permit(
      :url,
      :caption,
      :active,
      :featured
    )
  end
end