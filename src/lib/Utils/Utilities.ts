export function determinePlacement(
	exhibitNumberString: string,
	exhibitionYear: string,
	inOrOut: string,
) {
	if (parseInt(exhibitionYear) < 2024) {
		return inOrOut
	}
	const exhibitNumber = parseInt(exhibitNumberString)
	if (exhibitNumber >= 100 && exhibitNumber < 400) {
		return 'Headland'
	} else if (exhibitNumber >= 400 && exhibitNumber < 500) {
		return 'Hotel'
	} else if (exhibitNumber >= 500 && exhibitNumber < 800) {
		return 'Surf Gallery'
	} else if (exhibitNumber >= 800 && exhibitNumber < 900) {
		return 'Street Gallery'
	}
}
