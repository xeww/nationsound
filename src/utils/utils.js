const wpJsonUrl = "https://wordpress.francois-lp.dev/wp-json/wp/v2";
const acfFormat = "?acf_format=standard";

export function getPartnersURL() {
    return `${wpJsonUrl}/type-partenaires${acfFormat}`;
}

export function getConcertsURL() {
    return `${wpJsonUrl}/type-concerts${acfFormat}`;
}

export function getSingleConcertURL(id) {
    return `${wpJsonUrl}/type-concerts/${id}${acfFormat}`;
}

export function getScenesURL() {
    return `${wpJsonUrl}/type-scenes${acfFormat}`;
}

export function containsString(str1, str2) {
    return str2.toLowerCase().includes(str1.toLowerCase());
}