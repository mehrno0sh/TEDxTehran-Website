
var sel1 = "DepartmentsSelect";
var sel2 = "Availablepositions";

var avp = '{ "technology": ["iOS Application Developer", "Android Developer"],"curation": ["Curation Vice Executive"], "media":["Media Vice Executive"], "partnership":["Partnership Coordinator"], "operation" : ["Host/Hostess"]}';
var availablePositions = JSON.parse(avp);


$(document).ready(function(){
    var option = $('#DepartmentsSelect').children('option');
    $(option["curation"]).prop('selected', true);
    filter_available_positions(sel1,sel2)
})

function apply_position(position) {
    var p = position;
    
    $('#DepartmentsSelect option[value=' + p + ']').prop('selected', true);
    
    filter_available_positions(sel1,sel2)
}

function filter_available_positions(sel1, sel2){
    var sel1 = document.getElementById(sel1);
    var sel2 = document.getElementById(sel2);
    sel2.innerHTML = "";
   //var availablePositions;
   var value = sel1.value;
   roles = availablePositions[value];
   
   for (i=0; i<roles.length; i++) {
         var newOption = document.createElement("option");
        newOption.value = roles[i];
        newOption.innerHTML = roles[i];
        sel2.options.add(newOption);
   }
    
    
}
