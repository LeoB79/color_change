var index = 0;

function changecolors() {
    var colors = ["black","red","blue","purple"];
    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if(index > colors.lenght - 1)
    index = 0;
  }