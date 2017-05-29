import stateCapitals from '../data/stateCapitals';

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function validateSearchTerm(searchTerm) {
    if (searchTerm == "") {
        return ["", ""];
    }

    var searchTermLowerCase = searchTerm.toLowerCase();
    var token = " ";
    var searchTermSplit = searchTermLowerCase.split(token);

    var searchTermCapitalized = capitalize(searchTermSplit[0]);
    for (i = 1; i < searchTermSplit.length; i++) {
        searchTermCapitalized = searchTermCapitalized.concat(token, capitalize(searchTermSplit[i]));
    }

    if (searchTermCapitalized in stateCapitals) {
        return [searchTermCapitalized, stateCapitals[searchTermCapitalized]]
    } else {
        return [searchTerm, ""];
    }
}

export function getUSStateCapital(searchTerm) {
    return validateSearchTerm(searchTerm);
}
