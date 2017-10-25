class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def to_camel_case_json(args)
    as_json(args).deep_transform_keys do |key|
      ActiveSupport::Inflector.camelize(key, false)
    end
  end
end
