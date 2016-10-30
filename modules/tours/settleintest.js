/*
 * Guided Tour to test guided tour features.
 */
( function ( window, document, $, mw, gt ) {

	var tour;
		
	if( mw.config.get('wgPageName') != 'Main_Page' && mw.config.get('wgPageName') != 'Special:SettleGeoSearch' ) {
		return;
	}

	tour = new gt.TourBuilder( {
		/*
		 * This is the name of the tour.  It must be lowercase, without any hyphen (-) or
		 * period (.) characters.
		 *
		 * If this is an on-wiki tour, it should match the MediaWiki page.  For instance,
		 * if this were on-wiki, it would be MediaWiki:Guidedtour-tour-test.js
		 */
		name: 'settleintest',
		isSinglePage: false,
		//showConditionally: 'stickToFirstPage'
	} );
	
	tour.firstStep( {
		name: 'search1',
		titlemsg: 'settlein-tours-tour-settleintest-step-1-title',
		descriptionmsg: 'settlein-tours-tour-settleintest-step-1-text',
		//attachTo: '.selectize-search-appendix',
		//position: 'top',
		overlay: true
	} )
	.next('search2');
	
	tour.step( {
		name: 'search2',
		titlemsg: 'settlein-tours-tour-settleintest-step-2-title',
		descriptionmsg: 'settlein-tours-tour-settleintest-step-2-text',
		attachTo: '.jumbo-search',
		position: 'top',
		overlay: false
	} )
	.next('search3');
	
	tour.step( {
		name: 'search3',
		titlemsg: 'settlein-tours-tour-settleintest-step-3-title',
		descriptionmsg: 'settlein-tours-tour-settleintest-step-3-text',
		attachTo: '.settle-geo-search-wrapper',
		position: 'top',
		overlay: false
	} )
	.next('search4');
	
	tour.step( {
		name: 'search4',
		titlemsg: 'settlein-tours-tour-settleintest-step-4-title',
		descriptionmsg: 'settlein-tours-tour-settleintest-step-4-text',
		attachTo: '.selectize-search-appendix',
		position: 'top',
		overlay: false
	} )
	.next('search5');
	
	tour.step( {
		name: 'search5',
		titlemsg: 'settlein-tours-tour-settleintest-step-5-title',
		descriptionmsg: 'settlein-tours-tour-settleintest-step-5-text',
		attachTo: '.selectize-search-appendix',
		position: 'top',
		overlay: false,
		allowAutomaticNext: false,
		closeOnClickOutside: false,
		autoFocus: true,
		buttons: [
			{
				action: 'okay',
				type: 'neutral',
				onclick: function(){
					$('.selectize-search-appendix').val('test');
					$('.selectize-search-appendix').focus();
				}
			}
		]
	} )
	.transition( function () {
		if ( mw.config.get( 'wgTitle' ) == 'SettleGeoSearch' ) {
			return 'search6';
		}
	} );
	
	tour.step( {
		name: 'search6',
		titlemsg: 'settlein-tours-tour-settleintest-step-6-title',
		descriptionmsg: 'settlein-tours-tour-settleintest-step-6-text',
		//attachTo: '.selectize-search-appendix',
		//position: 'top',
		overlay: true,
		/*buttons: [
			{
				action: 'end'
			}
		]*/
	} ).next('search7');
	
	tour.step( {
		name: 'search7',
		titlemsg: 'settlein-tours-tour-settleintest-step-7-title',
		descriptionmsg: 'settlein-tours-tour-settleintest-step-7-text',
		attachTo: '#special-page-search-results-summary > h1',
		position: 'bottomLeft',
		overlay: false
	} ).next('search8');
	
	tour.step( {
		name: 'search8',
		titlemsg: 'settlein-tours-tour-settleintest-step-8-title',
		descriptionmsg: 'settlein-tours-tour-settleintest-step-8-text',
		attachTo: '#settle-geo-search-results-wrapper .col-md-12 .panel:first-child',
		position: 'top',
		overlay: false,
		buttons: [
			{
				action: 'end'
			}
		]
	} );

} ( window, document, jQuery, mediaWiki, mediaWiki.guidedTour ) );
