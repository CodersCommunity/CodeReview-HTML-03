( function timer() {
	var date = new Date(),
		hours = prependZero( date.getHours() ),
		minutes = prependZero( date.getMinutes() ),
		seconds = prependZero( date.getSeconds() ),
		timerElement = document.getElementById( 'timer' );

		function prependZero( value ) {
			if ( value < 10 ) {
				return '0' + value;
			}

			return value;
		}

		timerElement.innerHTML = [ hours, minutes, seconds ].join( ':' );
		timerElement.setAttribute( 'datetime', date.toISOString() );

		setTimeout( timer, 1000 );
}() );
