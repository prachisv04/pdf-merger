updateList = function() {

    var input = document.getElementById('selectedFile');
    var output = document.getElementById('fileList');
  
    output.innerHTML = '<ul id="tick">';
    for (var i = 0; i < input.files.length; ++i) {
      output.innerHTML += '<li>' + input.files.item(i).name + '</li>';
    }
    output.innerHTML += '</ul>';
    output.style.display="block";
  }
