class @Element

	templateName: 'Template'
	
	constructor: (params) ->
		this.data = params.data
		this.render()


	render: ->
		element = this.getTemplate(this.templateName, this.data)

		$('body').append( element )


	getTemplate: ( templateName, data ) ->
		source = $("##{templateName}").html();
		template = Handlebars.compile( source )
		if( data != '' )
			$(template(data))
		else
			$(template())