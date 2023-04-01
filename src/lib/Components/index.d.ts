export interface Exhibit {
	artistName: string
	description: string
	entryId: string
	entryImageId: string
	exhibitionYear: string
	exhibitNumber: string
	imageExtension: string
	imageHeight: number
	imageHUnits: string
	imageId: string
	imageLength: number
	imageMime: string
	imageType: string
	imageURL: string
	imageWidth: number
	imageWUnits: string
	inOrOut: string
	majorPrize?: string
	material: string
	otherNames: string
	price: string
	registrationId: string
	size: string
	surname: string
	title: string
	/**
	 * Any properties could be useful in callback function
	 */
	[key: string]: unknown
}
