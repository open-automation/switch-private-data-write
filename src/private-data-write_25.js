/*
  Helper functions
  */
var forEach = function(array, callback){
   var currentValue, index;
   for (i = 0; i < array.length; i += 1) {
      if(typeof array[i] == "undefined"){
         currentValue = null;
      } else {
         currentValue = array[i];
      }
      index = i;
      callback(currentValue, i, array);
    }
}

/*
  Application code
  */
function jobArrived( s : Switch, job : Job )
{
	// Debugging
	var debug = s.getPropertyValue( "DebugWarnings" );

	// PD helper function
	var setKeyValuePD = function(keyProperty, valueProperty){
		var key = s.getPropertyValue( keyProperty );
		var value = s.getPropertyValue( valueProperty );

		if(key){
			job.setPrivateData( key, value );
			if(debug == "Yes"){
				s.log(-1, keyProperty + ': "' + key + '" => "' + value + '"');
			}
		}
	}

	// Do It
	var itemArr = new Array(25);

	forEach(itemArr, function(item, index0){
		var index1 = index0+1;
		var keyPD = "Key"+index1;
		var valuePD = "Value"+index1;
		setKeyValuePD(keyPD, valuePD);
   });

	// Send to single
	job.sendToSingle( job.getPath() );

}
