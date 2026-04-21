class CreateTransactions < ActiveRecord::Migration[7.1]
  def change
    create_table :transactions do |t|
      t.string :description
      t.integer :amount
      t.string :category
      t.string :status

      t.timestamps
    end
  end
end
