import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';

const getResults = state => {
	const {searchComponentFunctionality} = state;

	const {mostRecentSearch, searchResults} = searchComponentFunctionality;
	return searchResults[mostRecentSearch] || [];
};

const mapStateToProps = (state, ownProps) => ({
	articles: getResults(state),
	ownProps
});

export default connect(
	mapStateToProps
)(SearchResults);
