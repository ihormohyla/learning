/**
 * Created by andrew on 26.11.14.
 */
"use strict";

define(
    'components/secondComponent',

    [
        'library/jquery/dist/jquery',
        'library/flight/lib/component',
        './firstComponent'

    ],

    function($, defineComponent){
        return defineComponent(SecondComponent);

        function SecondComponent(){

            this.after('initialize', function(){

                 this.on("changeMode");

            });
        }


    }
);


