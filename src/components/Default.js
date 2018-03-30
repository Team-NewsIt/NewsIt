import React from 'react';
import Search from './Search';
import FeedContainer from '../containers/FeedContainer';

const Default = () => (
	<div>
		<Search 
			searchResults={false}
		/>
		<FeedContainer
			categoryCollapse={false}
			numberOfStories={5}
		/>
	</div>
);

export default Default;