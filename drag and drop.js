<!DOCTYPE HTML>
<html>
<head>
<style>
div {
    width: 350px;
    height: 70px;
    border: 1px solid #aaaaaa;
}
</style>
<script>
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {debugger
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {debugger
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.value=(document.getElementById(data).innerHTML);
}
</script>
</head>
<body>
<input type='text'  class='form-control' ondrop='drop(event)' ondragover='allowDrop(event)'/>
<ul>
<li
id="drag1"  draggable="true" ondragstart="drag(event)">first
</li>
<li
id="drag2"  draggable="true" ondragstart="drag(event)">second
</li></ul>
<input  type="text" ondrop="drop(event)" ondragover="allowDrop(event)"/>
</body>
</html>
