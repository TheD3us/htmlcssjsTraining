var div = document.createElement('div');
div.setAttribute('id', 'divTP1');
// je peux faire aussi div.id='divTP1';


var textNodes = [
    document.createTextNode('Le'),
    document.createTextNode('World Wide Web Consortium'),
    document.createTextNode(', abrégé par le sigle '),
    document.createTextNode('W3C'),
    document.createTextNode(', est un '),
    document.createTextNode('organisme de standardisation')
]

var strong1 = document.createElement('strong');
var strong2 = document.createElement('strong');

var link = document.createElement('a');
link.href="http://fr.wikipedia.org/wiki/Organisme_de_normalisation" ;
link.title = "Organisme de normalisation";

strong1.appendChild(textNodes[1]);
strong2.appendChild(textNodes[3]);
link.appendChild(textNodes[5]);
div.appendChild(textNodes[0]);
div.appendChild(strong1);
div.appendChild(textNodes[2]);
div.appendChild(strong2);
div.appendChild(textNodes[4]);
div.appendChild(link);
//div.append(textNodes[0] + strong1 + textNodes[2] + strong2 + textNodes[4] + link);
document.body.appendChild(div);
