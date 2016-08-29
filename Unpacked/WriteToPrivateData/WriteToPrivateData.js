function jobArrived( s : Switch, job : Job )
{
	// Debugging
	var debugWarnings = s.getPropertyValue( "DebugWarnings" );
	var logLevel = -1;
	if(debugWarnings == "Yes"){
		logLevel = 2;
	}

	// PD helper function
	var setKeyValuePD = function(keyProperty, valueProperty){
		var key = s.getPropertyValue( keyProperty );
		var value = s.getPropertyValue( valueProperty );

		if(key){
			job.setPrivateData( key, value );
			s.log(logLevel, keyProperty + ': "' + key + '" => "' + value + '"');
		}
	}

	// Do it
	setKeyValuePD("Key1", "Value1");
	setKeyValuePD("Key2", "Value2");
	setKeyValuePD("Key3", "Value3");
	setKeyValuePD("Key4", "Value4");
	setKeyValuePD("Key5", "Value5");
	setKeyValuePD("Key6", "Value6");
	setKeyValuePD("Key7", "Value7");
	setKeyValuePD("Key8", "Value8");
	setKeyValuePD("Key9", "Value9");
	setKeyValuePD("Key10", "Value10");

	// Send to single
	job.sendToSingle( job.getPath() );

}
