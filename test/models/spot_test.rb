# == Schema Information
#
# Table name: spots
#
#  id           :bigint(8)        not null, primary key
#  title        :string           not null
#  description  :text             not null
#  owner_id     :integer          not null
#  lng          :float            not null
#  lat          :float            not null
#  location     :string           not null
#  price        :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  host_message :string
#

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
