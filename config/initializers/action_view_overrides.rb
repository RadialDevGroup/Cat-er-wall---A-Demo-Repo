module ActionView
  module Helpers
    class FormBuilder
      def render(*args, **options, &block)
        # so we can render a parial form for convienice with a little sugar
        options[:f] = self
        @template.render *args, **options, &block
      end

      def radio_buttons(method, options = {}, &block)
        current_value = @object.send method
        default = current_value.nil? ? options.delete(:default) : current_value
        labels = ((options.delete :labels) or ['No', 'Yes'])
        [
          radio_button(method, 1, checked: (default == true), **options),
          label(method, labels[1], value: 1),
          radio_button(method, 0, checked: (default == false), **options),
          label(method, labels[0], value: 0)
        ].join.html_safe
      end
    end
    module FormTagHelper
      # In HTML5 the preference is to use a button tag rather than an
      # input tag for form submit buttons. (And UIkit insists)
      def submit_tag(value = "Save changes", options = {})
        options = options.stringify_keys

        button_tag value, { "type" => "submit", "name" => "commit" }.update(options)
      end
    end
    module UrlHelper
      # This tricks button_to into always using a button tag instead of
      # input type submit.
      alias_method :original_button_to, :button_to
      def button_to(name = nil, options = nil, html_options = nil, &block)
        if block_given?
          html_options, options = options, name
        else
          block = lambda { name }
        end
        original_button_to options, html_options, &block
      end
    end
  end
end
