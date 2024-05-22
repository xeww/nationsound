const wpJsonUrl = "https://wordpress.francois-lp.dev/wp-json/wp/v2";
const acfFormat = "?acf_format=standard";

export function getPartnersURL() {
    return `${wpJsonUrl}/type-partenaires${acfFormat}`;
}

export function getConcertsURL() {
    return `${wpJsonUrl}/type-concerts${acfFormat}`;
}