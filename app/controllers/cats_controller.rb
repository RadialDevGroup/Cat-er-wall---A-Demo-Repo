class CatsController < ApplicationController
  before_action :find_cat, except: [ :index, :new, :create ]
  respond_to :html, :json, only: [:index, :show]

  def index
    @cats = Cat.order :created_at
    respond_with @cats
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

    result = {}
    if @cat.save
      result = {redirect: (next_action == 'index' ? cats_path : edit_cat_path(@cat)), success: "meow"}
    else
      flash[:error] = @cat.errors.full_messages.to_sentence
      result = {render: :edit}
    end

    respond_to do |format|
      format.json do
        flash[:error] = result[:error] if result[:error].present? and result[:redirect].present?
        render json: result.merge(flash).merge(cat: @cat)
      end
      format.html do
        if result.keys.include? :redirect
          redirect_to result[:redirect], success: result[:success]
        else
          render result[:render]
        end
      end
    end
  end

  def destroy
    if @cat.destroy
      respond_to do |format|
        format.json do
          render json: {cats: Cat.order(:created_at), success: "Raour"}
        end
        format.html do
          redirect_to cats_path, success: "Raour"
        end
      end
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

  def next_action
    params[:next_action]
  end
end