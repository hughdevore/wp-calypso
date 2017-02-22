/**
 * External dependencies
 */
import React from 'react';
import { localize } from 'i18n-calypso';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import PageViewTracker from 'lib/analytics/page-view-tracker';
import Main from 'components/main';
import DocumentHead from 'components/data/document-head';
import transit from 'account-recovery/page-transit';

export default transit( localize( ( { className, translate, basePath, children } ) => (
	<Main className={ classnames( 'lost-password', className ) }>
		<PageViewTracker path={ basePath } title="Account Recovery > Lost Password" />
		<DocumentHead title={ translate( 'Lost Password ‹ Account Recovery' ) } />
		{ children }
	</Main>
) ) );
