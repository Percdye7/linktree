function redirectSTEAMIDFINDER() {
    var inputValue = document.getElementById('floatingInputGroup1').value;

    if (inputValue.trim() !== "") {
        // Entfernt abschließenden Slash, falls vorhanden, und extrahiert den letzten Abschnitt
        inputValue = inputValue.replace(/\/$/, ""); // Entfernt abschließenden Slash
        var regex = /([^\/]+)$/; // Greift nur den letzten Teil nach dem letzten Slash
        var match = inputValue.match(regex);

        if (match) {
            var extractedID = match[1];
            var url = "https://www.steamidfinder.com/lookup/" + extractedID;
            window.open(url, '_blank');
        } else {
            alert("Keine gültige ID gefunden.");
        }
    } else {
        alert("Bitte geben Sie eine gültige ID ein.");
    }
}

function redirectFACEITFINDER() {
    var inputValue = document.getElementById('floatingInputGroup1').value;

    if (inputValue.trim() !== "") {
        inputValue = inputValue.replace(/\/$/, "");
        var regex = /([^\/]+)$/;
        var match = inputValue.match(regex);

        if (match) {
            var extractedID = match[1];
            var url = "https://faceitfinder.com/profile/" + extractedID;
            window.open(url, '_blank');
        } else {
            alert("Keine gültige ID gefunden.");
        }
    } else {
        alert("Bitte geben Sie eine gültige ID ein.");
    }
}

function redirectFACEITSEARCH() {
    var inputValue = document.getElementById('floatingInputGroup1').value;

    if (inputValue.trim() !== "") {
        inputValue = inputValue.replace(/\/$/, "");
        var regex = /([^\/]+)$/;
        var match = inputValue.match(regex);

        if (match) {
            var extractedID = match[1];
            var url = "https://www.faceit.com/en/search/player/" + extractedID;
            // old link: https://www.faceit.com/en/search/overview/
            window.open(url, '_blank');
        } else {
            alert("Keine gültige ID gefunden.");
        }
    } else {
        alert("Bitte geben Sie eine gültige ID ein.");
    }
}