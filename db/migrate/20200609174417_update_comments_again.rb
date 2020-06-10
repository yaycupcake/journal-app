# frozen_string_literal: true

class UpdateCommentsAgain < ActiveRecord::Migration[6.0]
  def change
    change_table :comments do |t|
      t.rename :post_id_id, :post_id
    end
  end
end
