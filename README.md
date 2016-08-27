# GoogleSpreadsheetTable
This js file allows to create a table from a Google spreadSheet public to the web. The way to call is to put the script inside <body></body> and it is as follows:

<body>
<script src="tableGenGSS.js"></script>
<script type="text/javascript" >
var keyG="1esdfdsposSSDopsoe";//Your key, this is just an example key
TableG.init(keyG);//Send the key to the JS file
TableG.createTable(keyG);// Create the table
</script>

<div id="tableGSS">
</div>
</body>

The script loads the content into tableGSS
