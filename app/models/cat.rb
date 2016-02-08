class Cat < ActiveRecord::Base
  validate :caption_is_present, if: -> { active? }
  validate :active, if: -> { featured? }

  before_save :update_featured_date, if: -> { featured? }

  def caption_is_present
    unless caption.present?
      errors[:caption] = 'a caption must be supplied'
    end
  end

  private

  def update_featured_date
    self.featured_on = Time.zone.now
  end
end
