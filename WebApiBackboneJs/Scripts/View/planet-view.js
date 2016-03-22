$(function () {
    PlanetView = Backbone.View.extend({
        model: new Planet(),
        tagName: 'tr',
        //template: _.template($('#planet-template').html()),

        initialize: function () {
            this.template = _.template($('.planet-list-template').html());
            /*
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'add', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            */
        },

        events: {
            'click .edit-planet': 'edit',
            'click .update-planet': 'update',
            'click .cancel': 'cancel',
            'click .delete-planet': 'delete'
        },

        edit: function () {
            $('.edit-planet').hide();
            $('.delete-planet').hide();
            this.$('.update-planet').show();
            this.$('.cancel').show();

            var id = this.$('.id').html();
            var name = this.$('.name').html();
            var diameter = this.$('.diameter').html();
            var orbit = this.$('.orbit').html();
            var day = this.$('.day').html();

            this.$('.id').html('<label class="form-control id-update">' + id + '</label>');
            this.$('.name').html('<input type="text" class="form-control name-update" value="' + name + '">');
            this.$('.diameter').html('<input type="text" class="form-control diameter-update" value="' + diameter + '">');
            this.$('.orbit').html('<input type="text" class="form-control orbit-update" value="' + orbit + '">');
            this.$('.day').html('<input type="text" class="form-control day-update" value="' + day + '">');
        },
        update: function () {
            this.model.set('id', $('.id-update').html());
            this.model.set('name', $('.name-update').val());
            this.model.set('diameter', $('.diameter-update').val());
            this.model.set('orbit', $('.orbit-update').val());
            this.model.set('day', $('.day-update').val());
            this.model.save();
            planetsView.render();
        },
        cancel: function () {
            planetsView.render();
        },
        delete: function () {
            this.model.destroy();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    planetsList = new PlanetSet();

    planetsList.fetch({ data: { page: 'no' } });

    PlanetsView = Backbone.View.extend({
        el: $('.planets-list'),
        model: planetsList,
        initialize: function () {
            var self = this;
            this.model.on('add', this.render, this);
            this.model.on('change', function () {
                setTimeout(function () {
                    self.render();
                }, 30);
            }, this);
            this.model.on('remove', this.render, this);
        },
        render: function () {
            var self = this;
            this.$el.html('');
            planetsList.fetch({ data: { page: 'no' } });
            _.each(this.model.toArray(), function (planet) {
                self.$el.append((new PlanetView({ model: planet })).render().$el);
            });
            return this;
        }
    });

    planetsView = new PlanetsView();
});