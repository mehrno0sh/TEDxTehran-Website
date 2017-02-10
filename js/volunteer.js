
//var AvailablePosArray = ["curation|Curation Vice Executive","host|Host / Hostess", "media|Media Vice Executive",];
function apply_position(position) {
    var p = position;
    console.log('click');
    var option = $('#DepartmentsSelect').children('option');
    $(option[p]).prop('selected', true);
    var sel1 = "DepartmentsSelect";
    var sel2 = "Availablepositions";
    filter_available_positions(sel1,sel2)
}

function filter_available_positions(sel1, sel2){
    var sel1 = document.getElementById(sel1);
    var sel2 = document.getElementById(sel2);
    sel2.innerHTML = "";
    var availablePositions;
    if (sel1.value == 0) {
       availablePositions = ["curation|Curation Vice Executive"];
    }
    else if (sel1.value == 1) {
       availablePositions = ["media|Media Vice Executive"];
    }
    else if (sel1.value == 2) {
       availablePositions = ["technology|iOS Application Developer"];
    }
    else if (sel1.value == 3) {
       availablePositions = ["partnership|Partnership Coordinator"];
    }
    else if (sel1.value == 4) {
       availablePositions = ["host|Host / Hostess"];
    }

    // var defOption = document.createElement("option");
    // defOption.value = -1;
    // defOption.innerHTML = "* Please select a position which matches your skills and passion.";
    // defOption.prop('selected', true);
    // sel2.option.add(defOption);

    for (var option in availablePositions) {
        var pair = availablePositions[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        sel2.options.add(newOption);
    }


    
}
function gav(){
    alert("selected");
}