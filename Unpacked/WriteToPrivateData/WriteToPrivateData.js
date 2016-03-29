/*
                                   
,---.|                        |    
`---.|---.,---.. . .,-.-..   .|--- 
    ||   |,---|| | || | ||   ||    
`---'`   '`---^`-'-'` ' '`---'`---'
C o m m u n i c a t i o n s G r o u p

Author:	Shawmut Communications Group, Dominick G. Peluso
Date:		August 11, 2014

Copyright © 2014

Writes any values to private data.

-----------------------------------------------------------------------

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

*/

function jobArrived( s : Switch, job : Job )
{

	// Get user submitted variables
	var key1 = s.getPropertyValue( "Key1" );
	var key2 = s.getPropertyValue( "Key2" );
	var key3 = s.getPropertyValue( "Key3" );
	var key4 = s.getPropertyValue( "Key4" );
	var key5 = s.getPropertyValue( "Key5" );
	
	var value1 = s.getPropertyValue( "Value1" );
	var value2 = s.getPropertyValue( "Value2" );
	var value3 = s.getPropertyValue( "Value3" );
	var value4 = s.getPropertyValue( "Value4" );
	var value5 = s.getPropertyValue( "Value5" );
	
	var debugLevel = s.getPropertyValue( "DebugLevel" );
	
	// Set private data
	job.setPrivateData( key1, value1 );
	job.setPrivateData( key2, value2 );
	job.setPrivateData( key3, value3 );
	job.setPrivateData( key4, value4 );
	job.setPrivateData( key5, value5 );
	
	// Debugging
	if(debugLevel == 1){
		if(key1) s.log(2, 'PD 1: ' + key1 + ' => ' + value1);
		if(key2) s.log(2, 'PD 2: ' + key2 + ' => ' + value2);
		if(key3) s.log(2, 'PD 3: ' + key3 + ' => ' + value3);
		if(key4) s.log(2, 'PD 4: ' + key4 + ' => ' + value4);
		if(key5) s.log(2, 'PD 5: ' + key5 + ' => ' + value5);
	}

	// Send to single
	job.sendToSingle( job.getPath() );
	
}