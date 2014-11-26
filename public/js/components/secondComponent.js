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
            this.changeMode = function(data){
                
            };


            this.after('initialize', function(){
                 this.on("changeMode", function(event, data){
                     console.log(data);
                     this.changeMode(data);
                 });

            });
        }


    }
);


