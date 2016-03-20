$(function () {
    Planet = Backbone.Model.extend({
        defaults: function () {
            return {
                id: null,
                name: null,
                diameter: 0,
                orbit: 0,
                day: 0
            }
        },
        idAttribute: "id",
        url: "/api/Planets/"
    });

    PlanetSet = Backbone.Collection.extend({
        url: "/api/Planets/",
        model: Planet
    });
});