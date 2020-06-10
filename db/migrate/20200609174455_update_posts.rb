# frozen_string_literal: true

class UpdatePosts < ActiveRecord::Migration[6.0]
  def change
    change_table :posts do |t|
      t.rename :user_id_id, :user_id
    end
  end
end
