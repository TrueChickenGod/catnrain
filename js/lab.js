/*
 * Author(s): Adrian Cheng <mcheng32@ucsc.edu>
              Isabella Quinn-Rodriguez <iquinnro@ucsc.edu>
              Jacob Penland <jrpenlan@ucsc.edu>
              Ramola Datta <rsdatta@ucsc.edu>
              Travis Carlen <tcarlen@ucsc.edu>
 * Created: Nov. 15, 2022
 * Description: Currently a working prototype for our website, will adjust and refine as time goes on.
 */

 function showWindowPopup() {
   var x = document.getElementById("blackboard-window");
   if (x.style.display === "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
   }
 }
