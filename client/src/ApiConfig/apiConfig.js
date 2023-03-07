let apiUrl;
const railsPort = 3000;
const apiUrLs = {
	development: `http://localhost:${railsPort}/`,
	production: `http://example.domain.com/`,
};

if (window.location.hostname === "localhost") {
	apiUrl = apiUrLs.development;
} else {
	apiUrl = apiUrLs.production;
}

export default apiUrl;
