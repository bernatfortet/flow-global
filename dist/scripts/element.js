(function() {
  this.Element = (function() {
    Element.prototype.templateName = 'Template';

    function Element(params) {
      this.data = params.data;
      this.render();
    }

    Element.prototype.render = function() {
      var element;
      element = this.getTemplate(this.templateName, this.data);
      return $('body').append(element);
    };

    Element.prototype.getTemplate = function(templateName, data) {
      var source, template;
      source = $("#" + templateName).html();
      template = Handlebars.compile(source);
      if (data !== '') {
        return $(template(data));
      } else {
        return $(template());
      }
    };

    return Element;

  })();

}).call(this);
