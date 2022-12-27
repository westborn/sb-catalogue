# The Catalogue for sculpturebermagui.org.au

single page app is a readonly view of the catalog.  
The JSON file needs to be created and loaded with the entry data.  
"SB-Entries.json" - can be as many years' data as required.

Format for the JSON file is:

- artistName
- description
- entryImageId
- entryNumber
- exhibitionYear
- imageFileName
- inOrOut
- material
- otherNames
- price
- size
- surname
- title

## Changelog

### Jan-2023

- added year
- only store image id not full URL
- remove sold, row, sitedAt
- changed input file to SB-Entries-2023.json
- update to sveltekit @latest (V1)
- display for the year in the URL queryParam  
  eg. catalogue.sculpturebermagui.org.au/?year=2023
