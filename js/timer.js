( function timer() {
	var date = new Date(),
		hours = prependZero( date.getHours() ),
		minutes = prependZero( date.getMinutes() ),
		seconds = prependZero( date.getSeconds() );

		function prependZero( value ) {
			if ( value < 10 ) {
				return '0' + value;
			}

			return value;
		}

		document.getElementById( 'timer' ).innerHTML = [ hours, minutes, seconds ].join( ':' );

		setTimeout( timer, 1000 );
}() );
