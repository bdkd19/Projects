     var start = new Date().getTime();

     function makeShapeAppear() {
         var top = Math.random() * 400;
         var left = Math.random() * 400;
         var width = (Math.random() * 300) + 100;

         if (Math.random() > 0.5) {
             document.getElementById("shape").style.borderRadius = "50%"
         } else {
             document.getElementById("shape").style.borderRadius = "0"
         }
         document.getElementById("shape").style.display = "block";
         document.getElementById("shape").style.top = top + "px";
         document.getElementById("shape").style.left = left + "px";
         document.getElementById("shape").style.width = width + "px";
         document.getElementById("shape").style.height = width + "px";


         //                function calling another function
         random_obj_color();



         start = new Date().getTime();
     }

     function random_obj_color() {
         var x = (Math.random() * 256);
         var y = (Math.random() * 256);
         var z = (Math.random() * 256);
         var objColor = "rgb(" + x + "," + y + "," + z + ")";
         document.getElementById("shape").style.background = objColor;
     }

     //random_obj_color();

     function appearAfterDelay() {
         setTimeout(makeShapeAppear, Math.random() * 2000);
     }

     appearAfterDelay();

     document.getElementById("shape").onclick = function () {

         document.getElementById("shape").style.display = "none";

         var end = new Date().getTime();
         var timeTaken = (end - start) / 1000;
         document.getElementById("timeTaken").innerHTML = timeTaken + " s.";

         appearAfterDelay();
     }
