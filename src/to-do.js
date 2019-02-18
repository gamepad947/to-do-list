var input = document.createElement("input");
var addButton = document.createElement("span");
var mainDiv = document.getElementById("todo");

var listData = [];

input.placeholder = "What's need to be done?";
input.type = "text";
input.id = "input";

addButton.className = "addBtn";
addButton.innerHTML = "Add";

mainDiv.appendChild(input);
mainDiv.appendChild(addButton);

var nodeList = document.getElementsByTagName("li");

for (var i = 0; i < nodeList.length; i++) {
  var span = document.createElement("span");
  var icon = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(icon);
  nodeList[i].appendChild(span);
}
var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var li = this.parentElement;
    li.remove();
  };
}

var list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.className = "checked";
  }
});

addButton.addEventListener("click", function() {
  newElement();
});

var allBtn = document.getElementById("all-item");
allBtn.addEventListener("click", function() {
  renderArr(listData);
});

var completeButton = document.getElementById("complete-button");
completeButton.addEventListener("click", function() {
  sortByComplete(listData);
});

var activeButton = document.getElementById("active-button");
activeButton.addEventListener("click", function() {
  sortByActive(listData);
});
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue == "") {
    alert("You must write something!");
  } else {
    document.querySelector("ul").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("span");
  var icon = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(icon);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var li = this.parentElement;
      li.remove();
    };
  }
  var ul = document.querySelector("ul");

  for (var i = 0; i < ul.childNodes.length; i++) {
    if (ul.childNodes[i].nodeName === "LI") {
      listData.push(ul.childNodes[i]);
    }
  }
}
function renderArr(arr) {
  var ul = document.querySelector("ul");
  var newUl = ul.cloneNode(false);

  for (var i = 0; i < ul.childNodes.length; i++) {
    if (ul.childNodes[i].nodeName === "LI") {
      arr.push(ul.childNodes[i]);
    }
  }
  for (var i = 0; i < arr.length; i++) {
    newUl.appendChild(arr[i]);
  }
  ul.parentNode.replaceChild(newUl, ul);
  newUl.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.className = "checked";
    }
  });
}

function sortByComplete(arr) {
  var complete = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].className == "checked") {
      complete.push(arr[i]);
    }
  }
  var ul = document.querySelector("ul");
  var newUl = ul.cloneNode(false);
  for (var i = 0; i < complete.length; i++) {
    newUl.appendChild(complete[i]);
  }

  ul.parentNode.replaceChild(newUl, ul);
}

function sortByActive(arr) {
  var complete = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].className != "checked") {
      complete.push(arr[i]);
    }
  }
  var ul = document.querySelector("ul");
  var newUl = ul.cloneNode(false);
  for (var i = 0; i < complete.length; i++) {
    newUl.appendChild(complete[i]);
  }

  ul.parentNode.replaceChild(newUl, ul);
}
