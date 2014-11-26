"use strict";

define(
    'main',
    [
        'components/firstComponent',
        'components/secondComponent'
    ],
    function (firstComponent, secondComponent) {

        /**
         * Этот компонент генерит событие и говорит всем, кто его слушает сколько элементов надо показывать
         */
        firstComponent.attachTo('#thumbnails');
        secondComponent.attachTo('#thumbnails');
    }
);