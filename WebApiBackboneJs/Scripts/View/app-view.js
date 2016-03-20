$(function () {
    AppView = Backbone.View.extend({
        el: $("#app"),

        events: {
            "click #planetAdd": "addPlanet"
        },

        addPlanet: function () {
            var planet = new Planet({
                id: null,
                name: this.name.val(),
                diameter: this.diameter.val(),
                orbit: this.orbit.val(),
                day: this.day.val()
            });

            this.model.create(planet, { wait: true });
            this.model.fetch();

            this.id.val('');
            this.name.val('');
            this.diameter.val('');
            this.orbit.val('');
            this.day.val('');
        },

        initialize: function () {
            this.id = this.$("#planetId");
            this.name = this.$("#planetName");
            this.diameter = this.$("#planetDiameter");
            this.orbit = this.$("#planetOrbit");
            this.day = this.$("#planetDay");

            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'add', this.render);
        },

        render: function () {
            $("#planetsList").html("");
            this.model.fetch({ data: { page: 'no' } });
            if (this.model.length) {
                for (var i = 0; i < this.model.length; i++) {
                    var view = new PlanetView({ model: this.model.at(i) });
                    $("#planetsList").append(view.render().el);
                }
            }
        }
    });
});