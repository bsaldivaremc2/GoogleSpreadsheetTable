# GoogleSpreadsheetTable
This js file allows to create a table from a Google spreadSheet public to the web. The way to call it is as follows (The example is inside, so please open the file):

<body>
<script src="tableGenGSS.js"></script>
<script type="text/javascript" >
//The script part has to be inside doby
var keyG="1esdfdsposSSDopsoe";//Your key, this is just an example key
TableG.init(keyG);//Send the key to the JS file
TableG.createTable(keyG);// Create the table
//The script loads the content into the div with id tableGSS
</script>

<div id="tableGSS">
</div>

</body>
Some indications:
Google spreadsheet when publish the files as json, separates the fields using a ",", so in your spreadsheet, before publishing, replace all "," with "bsaldivar". This js file searchs all "bsaldivar" words and replaces back to "," before printing the html text. Or just change that token in the code.

