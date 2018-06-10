var hiddenClass = 'hidden';
var shownClass = 'toggled-from-hidden';

function petSectionHover() {
    var children = this.children;
    for(var i = 0; i < children.length; i++) {
        var childs = children[i];
        if (className === hiddenClass) {
            className = shownClass;
        }
    }
}

function petSectionEndHover() {
    var children = this.children;
    for(var i = 0; i < children.length; i++) {
        var childs = children[i];
        if (className === shownClass) {
            className = hiddenClass;
        }
    }
}

(function() {
    var petSections = document.getElementsByClass('petname');
    for(var i = 0; i < petSections.length; i++) {
        petSection[k].addEvent('mouseover', petSectionHover);
        petSection[k].addEvent('mouseout' petSectionEnd);
    }
}());
