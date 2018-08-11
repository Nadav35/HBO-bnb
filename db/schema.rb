# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_08_10_162506) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reviews", force: :cascade do |t|
    t.integer "rating", null: false
    t.text "description", null: false
    t.integer "reviewer_id", null: false
    t.integer "spot_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["rating"], name: "index_reviews_on_rating"
    t.index ["reviewer_id", "spot_id"], name: "index_reviews_on_reviewer_id_and_spot_id", unique: true
  end

  create_table "spots", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.integer "owner_id", null: false
    t.string "img_url", null: false
    t.float "lng", null: false
    t.float "lat", null: false
    t.string "location", null: false
    t.float "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["description"], name: "index_spots_on_description"
    t.index ["img_url"], name: "index_spots_on_img_url"
    t.index ["lng", "lat"], name: "index_spots_on_lng_and_lat", unique: true
    t.index ["location"], name: "index_spots_on_location"
    t.index ["owner_id"], name: "index_spots_on_owner_id"
    t.index ["price"], name: "index_spots_on_price"
    t.index ["title"], name: "index_spots_on_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "img_url"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
