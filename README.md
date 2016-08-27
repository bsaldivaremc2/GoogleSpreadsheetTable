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


