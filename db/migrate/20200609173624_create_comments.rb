# frozen_string_literal: true

class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.references :post_id
      t.references :user_id
      t.text :content

      t.timestamps
    end
  end
end
