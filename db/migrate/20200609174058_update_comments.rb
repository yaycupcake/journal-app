# frozen_string_literal: true

class UpdateComments < ActiveRecord::Migration[6.0]
  def change
    change_table :comments do |t|
      t.rename :user_id_id, :user_id
    end
  end
end
