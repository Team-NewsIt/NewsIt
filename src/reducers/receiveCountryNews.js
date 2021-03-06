const receiveCountryNews = (state = {
	country: '',
	countryNews: {}
}, action) => {
	switch(action.type) {
	case 'RECEIVE_COUNTRY_NEWS':	
		return Object.assign({}, state, {
			country: action.country,
			countryNews : {
				[action.country]: action.news
			},
		});
		break;
	default:
		return state;
	};
};

export default receiveCountryNews;
