class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string :url
      t.string :caption
      t.boolean :active
      t.boolean :featured
      t.datetime :featured_on

      t.timestamps null: false
    end
  end
end
