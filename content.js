var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            if(containsAnyVerbs(text)){
                console.log("Verb detected");
                var sentences = text.split('.');
                console.log(sentences);
                // Find the sentence that has the verb in it
                sentences.forEach(function(sentence, index){
                    if(containsAnyVerbs(sentence)){
                        sentences[index] = "After a disagreement with Paul, " + sentence[0].toLowerCase() + sentence.substring(1);
                    }
                });
                var finalText = sentences.join();
                element.replaceChild(document.createTextNode(finalText), node)
            }
        }
        console.log("it happened");
    }
}

function containsAnyVerbs(str) {
    for (var i = 0; i != verbs.length; i++) {
       var substring = verbs[i];
       var regex = new RegExp('\\b' + substring + '\\b');
       if(str.match(regex)){
           return true;
       }
    }
    return false;
}