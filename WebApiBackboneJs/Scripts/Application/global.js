$(function () {
    planetsList = new PlanetSet();

    planetsList.fetch({ data: { page: 'no' } });

    var app = new AppView({ model: planetsList });
    app.render();
});