# frozen_string_literal: true

class CommentsController < ApplicationController
  before_action :authorize_request

  # POST /posts
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @comment.post = Post.find(params[:post_id])

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  private

  # Only allow a trusted parameter "white list" through.
  def comment_params
    params.require(:comment).permit(:content)
  end
end
