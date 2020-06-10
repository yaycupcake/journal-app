# frozen_string_literal: true

class PostsController < ApplicationController
  before_action :authorize_request, only: %i[create update destroy]
  before_action :set_post, only: %i[update show destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, include: { user: { only: %i[username id] } }
  end

  # GET /posts/1
  def show
    render json: @post, include: { user: { only: %i[username id] }, comments: { include: { user: { only: %i[username id] } } } }
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def post_params
    params.require(:post).permit(:title, :content)
  end
end
