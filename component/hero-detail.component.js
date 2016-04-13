(function () {
    'use strict';

    angular
        .module('componentCrud')
        .component('heroDetail', {
            templateUrl: "component/hero-detail.component.html",
            controller : [
                HeroDetailController
            ],
            bindings   : {
                hero    : '<',
                onDelete: '&',
                onUpdate: '&'
            }
        });

    function HeroDetailController() {
        var ctrl = this;

        ctrl.update = update;

        function update(prop, value) {
            ctrl.onUpdate({hero: ctrl.hero, prop: prop, value: value});
        }
    }
})();