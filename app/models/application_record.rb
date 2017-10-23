class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def to_json
    as_json.transform_keys do |key|
      ActiveSupport::Inflector.camelize(key, false)
    end.to_json
  end
end
