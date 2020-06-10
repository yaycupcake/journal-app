# frozen_string_literal: true

class CommentsController < ApplicationController
  # POST /posts
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user

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
