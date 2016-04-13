(function () {
    'use strict';

    angular
        .module('componentCrud')
        .component('heroList', {
            templateUrl: "component/hero-list.component.html",
            controller : [
                HeroListController
            ]
        });

    function HeroListController() {
        var ctrl = this;

        ctrl.list = createHeroes();

        ctrl.updateHero = updateHero;
        ctrl.deleteHero = deleteHero;
        ctrl.createHero = createHero;

        function createHeroes() {
            return [{
                name    : 'Superman',
                location: ''
            },
                {
                    name    : 'Batman',
                    location: 'Wayne Manor'
                }
            ]
        }

        function createHero(){
            ctrl.list.push({
                name : 'Crazy Newling',
                location: 'Morgues'
            })
        }

        function updateHero(hero, prop, value) {
            hero[prop] = value;
        }

        function deleteHero(hero) {
            var idx = ctrl.list.indexOf(hero);
            if (idx >= 0) {
                ctrl.list.splice(idx, 1);
            }
        }
    }
})();