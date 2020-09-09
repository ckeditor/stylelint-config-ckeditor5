#!/usr/bin/env node

/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

/* eslint-env node */

/**
 * Scripts for generating the changelog before starting the release process.
 */

require( '@ckeditor/ckeditor5-dev-env' ).generateChangelogForSinglePackage({
	// TODO: Remove this line after the next release.
	from: 'a71c869d0f46a5527c99cd21cf67f016ac431028'
});
