function helloFunction() {

    var name = document.getElementById("my-text").value;
    
    document.getElementById("demo").innerHTML = '<h3 id="greeting">hello ' + name + '! :)</h3>';
}
