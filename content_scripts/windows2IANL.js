//Convert Windows timezones to IANL timezones
//Timezone map from CLDR project
//  https://github.com/unicode-org/cldr/blob/main/common/supplemental/windowsZones.xml

windowsZones = [
	{
	    "_other": "Dateline Standard Time",
	    "_territory": "001",
	    "_type": "Etc/GMT+12"
	},
	{
	    "_other": "Dateline Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT+12"
	},
	{
	    "_other": "UTC-11",
	    "_territory": "001",
	    "_type": "Etc/GMT+11"
	},
	{
	    "_other": "UTC-11",
	    "_territory": "AS",
	    "_type": "Pacific/Pago_Pago"
	},
	{
	    "_other": "UTC-11",
	    "_territory": "NU",
	    "_type": "Pacific/Niue"
	},
	{
	    "_other": "UTC-11",
	    "_territory": "UM",
	    "_type": "Pacific/Midway"
	},
	{
	    "_other": "UTC-11",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT+11"
	},
	{
	    "_other": "Aleutian Standard Time",
	    "_territory": "001",
	    "_type": "America/Adak"
	},
	{
	    "_other": "Aleutian Standard Time",
	    "_territory": "US",
	    "_type": "America/Adak"
	},
	{
	    "_other": "Hawaiian Standard Time",
	    "_territory": "001",
	    "_type": "Pacific/Honolulu"
	},
	{
	    "_other": "Hawaiian Standard Time",
	    "_territory": "CK",
	    "_type": "Pacific/Rarotonga"
	},
	{
	    "_other": "Hawaiian Standard Time",
	    "_territory": "PF",
	    "_type": "Pacific/Tahiti"
	},
	{
	    "_other": "Hawaiian Standard Time",
	    "_territory": "UM",
	    "_type": "Pacific/Johnston"
	},
	{
	    "_other": "Hawaiian Standard Time",
	    "_territory": "US",
	    "_type": "Pacific/Honolulu"
	},
	{
	    "_other": "Hawaiian Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT+10"
	},
	{
	    "_other": "Marquesas Standard Time",
	    "_territory": "001",
	    "_type": "Pacific/Marquesas"
	},
	{
	    "_other": "Marquesas Standard Time",
	    "_territory": "PF",
	    "_type": "Pacific/Marquesas"
	},
	{
	    "_other": "Alaskan Standard Time",
	    "_territory": "001",
	    "_type": "America/Anchorage"
	},
	{
	    "_other": "Alaskan Standard Time",
	    "_territory": "US",
	    "_type": "America/Anchorage America/Juneau America/Metlakatla America/Nome America/Sitka America/Yakutat"
	},
	{
	    "_other": "UTC-09",
	    "_territory": "001",
	    "_type": "Etc/GMT+9"
	},
	{
	    "_other": "UTC-09",
	    "_territory": "PF",
	    "_type": "Pacific/Gambier"
	},
	{
	    "_other": "UTC-09",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT+9"
	},
	{
	    "_other": "Pacific Standard Time (Mexico)",
	    "_territory": "001",
	    "_type": "America/Tijuana"
	},
	{
	    "_other": "Pacific Standard Time (Mexico)",
	    "_territory": "MX",
	    "_type": "America/Tijuana America/Santa_Isabel"
	},
	{
	    "_other": "UTC-08",
	    "_territory": "001",
	    "_type": "Etc/GMT+8"
	},
	{
	    "_other": "UTC-08",
	    "_territory": "PN",
	    "_type": "Pacific/Pitcairn"
	},
	{
	    "_other": "UTC-08",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT+8"
	},
	{
	    "_other": "Pacific Standard Time",
	    "_territory": "001",
	    "_type": "America/Los_Angeles"
	},
	{
	    "_other": "Pacific Standard Time",
	    "_territory": "CA",
	    "_type": "America/Vancouver"
	},
	{
	    "_other": "Pacific Standard Time",
	    "_territory": "US",
	    "_type": "America/Los_Angeles"
	},
	{
	    "_other": "Pacific Standard Time",
	    "_territory": "ZZ",
	    "_type": "PST8PDT"
	},
	{
	    "_other": "US Mountain Standard Time",
	    "_territory": "001",
	    "_type": "America/Phoenix"
	},
	{
	    "_other": "US Mountain Standard Time",
	    "_territory": "CA",
	    "_type": "America/Creston America/Dawson_Creek America/Fort_Nelson"
	},
	{
	    "_other": "US Mountain Standard Time",
	    "_territory": "MX",
	    "_type": "America/Hermosillo"
	},
	{
	    "_other": "US Mountain Standard Time",
	    "_territory": "US",
	    "_type": "America/Phoenix"
	},
	{
	    "_other": "US Mountain Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT+7"
	},
	{
	    "_other": "Mountain Standard Time (Mexico)",
	    "_territory": "001",
	    "_type": "America/Chihuahua"
	},
	{
	    "_other": "Mountain Standard Time (Mexico)",
	    "_territory": "MX",
	    "_type": "America/Chihuahua America/Mazatlan"
	},
	{
	    "_other": "Mountain Standard Time",
	    "_territory": "001",
	    "_type": "America/Denver"
	},
	{
	    "_other": "Mountain Standard Time",
	    "_territory": "CA",
	    "_type": "America/Edmonton America/Cambridge_Bay America/Inuvik America/Yellowknife"
	},
	{
	    "_other": "Mountain Standard Time",
	    "_territory": "MX",
	    "_type": "America/Ojinaga"
	},
	{
	    "_other": "Mountain Standard Time",
	    "_territory": "US",
	    "_type": "America/Denver America/Boise"
	},
	{
	    "_other": "Mountain Standard Time",
	    "_territory": "ZZ",
	    "_type": "MST7MDT"
	},
	{
	    "_other": "Yukon Standard Time",
	    "_territory": "001",
	    "_type": "America/Whitehorse"
	},
	{
	    "_other": "Yukon Standard Time",
	    "_territory": "CA",
	    "_type": "America/Whitehorse America/Dawson"
	},
	{
	    "_other": "Central America Standard Time",
	    "_territory": "001",
	    "_type": "America/Guatemala"
	},
	{
	    "_other": "Central America Standard Time",
	    "_territory": "BZ",
	    "_type": "America/Belize"
	},
	{
	    "_other": "Central America Standard Time",
	    "_territory": "CR",
	    "_type": "America/Costa_Rica"
	},
	{
	    "_other": "Central America Standard Time",
	    "_territory": "EC",
	    "_type": "Pacific/Galapagos"
	},
	{
	    "_other": "Central America Standard Time",
	    "_territory": "GT",
	    "_type": "America/Guatemala"
	},
	{
	    "_other": "Central America Standard Time",
	    "_territory": "HN",
	    "_type": "America/Tegucigalpa"
	},
	{
	    "_other": "Central America Standard Time",
	    "_territory": "NI",
	    "_type": "America/Managua"
	},
	{
	    "_other": "Central America Standard Time",
	    "_territory": "SV",
	    "_type": "America/El_Salvador"
	},
	{
	    "_other": "Central America Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT+6"
	},
	{
	    "_other": "Central Standard Time",
	    "_territory": "001",
	    "_type": "America/Chicago"
	},
	{
	    "_other": "Central Standard Time",
	    "_territory": "CA",
	    "_type": "America/Winnipeg America/Rainy_River America/Rankin_Inlet America/Resolute"
	},
	{
	    "_other": "Central Standard Time",
	    "_territory": "MX",
	    "_type": "America/Matamoros"
	},
	{
	    "_other": "Central Standard Time",
	    "_territory": "US",
	    "_type": "America/Chicago America/Indiana/Knox America/Indiana/Tell_City America/Menominee America/North_Dakota/Beulah America/North_Dakota/Center America/North_Dakota/New_Salem"
	},
	{
	    "_other": "Central Standard Time",
	    "_territory": "ZZ",
	    "_type": "CST6CDT"
	},
	{
	    "_other": "Easter Island Standard Time",
	    "_territory": "001",
	    "_type": "Pacific/Easter"
	},
	{
	    "_other": "Easter Island Standard Time",
	    "_territory": "CL",
	    "_type": "Pacific/Easter"
	},
	{
	    "_other": "Central Standard Time (Mexico)",
	    "_territory": "001",
	    "_type": "America/Mexico_City"
	},
	{
	    "_other": "Central Standard Time (Mexico)",
	    "_territory": "MX",
	    "_type": "America/Mexico_City America/Bahia_Banderas America/Merida America/Monterrey"
	},
	{
	    "_other": "Canada Central Standard Time",
	    "_territory": "001",
	    "_type": "America/Regina"
	},
	{
	    "_other": "Canada Central Standard Time",
	    "_territory": "CA",
	    "_type": "America/Regina America/Swift_Current"
	},
	{
	    "_other": "SA Pacific Standard Time",
	    "_territory": "001",
	    "_type": "America/Bogota"
	},
	{
	    "_other": "SA Pacific Standard Time",
	    "_territory": "BR",
	    "_type": "America/Rio_Branco America/Eirunepe"
	},
	{
	    "_other": "SA Pacific Standard Time",
	    "_territory": "CA",
	    "_type": "America/Coral_Harbour"
	},
	{
	    "_other": "SA Pacific Standard Time",
	    "_territory": "CO",
	    "_type": "America/Bogota"
	},
	{
	    "_other": "SA Pacific Standard Time",
	    "_territory": "EC",
	    "_type": "America/Guayaquil"
	},
	{
	    "_other": "SA Pacific Standard Time",
	    "_territory": "JM",
	    "_type": "America/Jamaica"
	},
	{
	    "_other": "SA Pacific Standard Time",
	    "_territory": "KY",
	    "_type": "America/Cayman"
	},
	{
	    "_other": "SA Pacific Standard Time",
	    "_territory": "PA",
	    "_type": "America/Panama"
	},
	{
	    "_other": "SA Pacific Standard Time",
	    "_territory": "PE",
	    "_type": "America/Lima"
	},
	{
	    "_other": "SA Pacific Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT+5"
	},
	{
	    "_other": "Eastern Standard Time (Mexico)",
	    "_territory": "001",
	    "_type": "America/Cancun"
	},
	{
	    "_other": "Eastern Standard Time (Mexico)",
	    "_territory": "MX",
	    "_type": "America/Cancun"
	},
	{
	    "_other": "Eastern Standard Time",
	    "_territory": "001",
	    "_type": "America/New_York"
	},
	{
	    "_other": "Eastern Standard Time",
	    "_territory": "BS",
	    "_type": "America/Nassau"
	},
	{
	    "_other": "Eastern Standard Time",
	    "_territory": "CA",
	    "_type": "America/Toronto America/Iqaluit America/Montreal America/Nipigon America/Pangnirtung America/Thunder_Bay"
	},
	{
	    "_other": "Eastern Standard Time",
	    "_territory": "US",
	    "_type": "America/New_York America/Detroit America/Indiana/Petersburg America/Indiana/Vincennes America/Indiana/Winamac America/Kentucky/Monticello America/Louisville"
	},
	{
	    "_other": "Eastern Standard Time",
	    "_territory": "ZZ",
	    "_type": "EST5EDT"
	},
	{
	    "_other": "Haiti Standard Time",
	    "_territory": "001",
	    "_type": "America/Port-au-Prince"
	},
	{
	    "_other": "Haiti Standard Time",
	    "_territory": "HT",
	    "_type": "America/Port-au-Prince"
	},
	{
	    "_other": "Cuba Standard Time",
	    "_territory": "001",
	    "_type": "America/Havana"
	},
	{
	    "_other": "Cuba Standard Time",
	    "_territory": "CU",
	    "_type": "America/Havana"
	},
	{
	    "_other": "US Eastern Standard Time",
	    "_territory": "001",
	    "_type": "America/Indianapolis"
	},
	{
	    "_other": "US Eastern Standard Time",
	    "_territory": "US",
	    "_type": "America/Indianapolis America/Indiana/Marengo America/Indiana/Vevay"
	},
	{
	    "_other": "Turks And Caicos Standard Time",
	    "_territory": "001",
	    "_type": "America/Grand_Turk"
	},
	{
	    "_other": "Turks And Caicos Standard Time",
	    "_territory": "TC",
	    "_type": "America/Grand_Turk"
	},
	{
	    "_other": "Paraguay Standard Time",
	    "_territory": "001",
	    "_type": "America/Asuncion"
	},
	{
	    "_other": "Paraguay Standard Time",
	    "_territory": "PY",
	    "_type": "America/Asuncion"
	},
	{
	    "_other": "Atlantic Standard Time",
	    "_territory": "001",
	    "_type": "America/Halifax"
	},
	{
	    "_other": "Atlantic Standard Time",
	    "_territory": "BM",
	    "_type": "Atlantic/Bermuda"
	},
	{
	    "_other": "Atlantic Standard Time",
	    "_territory": "CA",
	    "_type": "America/Halifax America/Glace_Bay America/Goose_Bay America/Moncton"
	},
	{
	    "_other": "Atlantic Standard Time",
	    "_territory": "GL",
	    "_type": "America/Thule"
	},
	{
	    "_other": "Venezuela Standard Time",
	    "_territory": "001",
	    "_type": "America/Caracas"
	},
	{
	    "_other": "Venezuela Standard Time",
	    "_territory": "VE",
	    "_type": "America/Caracas"
	},
	{
	    "_other": "Central Brazilian Standard Time",
	    "_territory": "001",
	    "_type": "America/Cuiaba"
	},
	{
	    "_other": "Central Brazilian Standard Time",
	    "_territory": "BR",
	    "_type": "America/Cuiaba America/Campo_Grande"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "001",
	    "_type": "America/La_Paz"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "AG",
	    "_type": "America/Antigua"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "AI",
	    "_type": "America/Anguilla"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "AW",
	    "_type": "America/Aruba"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "BB",
	    "_type": "America/Barbados"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "BL",
	    "_type": "America/St_Barthelemy"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "BO",
	    "_type": "America/La_Paz"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "BQ",
	    "_type": "America/Kralendijk"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "BR",
	    "_type": "America/Manaus America/Boa_Vista America/Porto_Velho"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "CA",
	    "_type": "America/Blanc-Sablon"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "CW",
	    "_type": "America/Curacao"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "DM",
	    "_type": "America/Dominica"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "DO",
	    "_type": "America/Santo_Domingo"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "GD",
	    "_type": "America/Grenada"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "GP",
	    "_type": "America/Guadeloupe"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "GY",
	    "_type": "America/Guyana"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "KN",
	    "_type": "America/St_Kitts"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "LC",
	    "_type": "America/St_Lucia"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "MF",
	    "_type": "America/Marigot"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "MQ",
	    "_type": "America/Martinique"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "MS",
	    "_type": "America/Montserrat"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "PR",
	    "_type": "America/Puerto_Rico"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "SX",
	    "_type": "America/Lower_Princes"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "TT",
	    "_type": "America/Port_of_Spain"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "VC",
	    "_type": "America/St_Vincent"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "VG",
	    "_type": "America/Tortola"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "VI",
	    "_type": "America/St_Thomas"
	},
	{
	    "_other": "SA Western Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT+4"
	},
	{
	    "_other": "Pacific SA Standard Time",
	    "_territory": "001",
	    "_type": "America/Santiago"
	},
	{
	    "_other": "Pacific SA Standard Time",
	    "_territory": "CL",
	    "_type": "America/Santiago"
	},
	{
	    "_other": "Newfoundland Standard Time",
	    "_territory": "001",
	    "_type": "America/St_Johns"
	},
	{
	    "_other": "Newfoundland Standard Time",
	    "_territory": "CA",
	    "_type": "America/St_Johns"
	},
	{
	    "_other": "Tocantins Standard Time",
	    "_territory": "001",
	    "_type": "America/Araguaina"
	},
	{
	    "_other": "Tocantins Standard Time",
	    "_territory": "BR",
	    "_type": "America/Araguaina"
	},
	{
	    "_other": "E. South America Standard Time",
	    "_territory": "001",
	    "_type": "America/Sao_Paulo"
	},
	{
	    "_other": "E. South America Standard Time",
	    "_territory": "BR",
	    "_type": "America/Sao_Paulo"
	},
	{
	    "_other": "SA Eastern Standard Time",
	    "_territory": "001",
	    "_type": "America/Cayenne"
	},
	{
	    "_other": "SA Eastern Standard Time",
	    "_territory": "AQ",
	    "_type": "Antarctica/Rothera Antarctica/Palmer"
	},
	{
	    "_other": "SA Eastern Standard Time",
	    "_territory": "BR",
	    "_type": "America/Fortaleza America/Belem America/Maceio America/Recife America/Santarem"
	},
	{
	    "_other": "SA Eastern Standard Time",
	    "_territory": "FK",
	    "_type": "Atlantic/Stanley"
	},
	{
	    "_other": "SA Eastern Standard Time",
	    "_territory": "GF",
	    "_type": "America/Cayenne"
	},
	{
	    "_other": "SA Eastern Standard Time",
	    "_territory": "SR",
	    "_type": "America/Paramaribo"
	},
	{
	    "_other": "SA Eastern Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT+3"
	},
	{
	    "_other": "Argentina Standard Time",
	    "_territory": "001",
	    "_type": "America/Buenos_Aires"
	},
	{
	    "_other": "Argentina Standard Time",
	    "_territory": "AR",
	    "_type": "America/Buenos_Aires America/Argentina/La_Rioja America/Argentina/Rio_Gallegos America/Argentina/Salta America/Argentina/San_Juan America/Argentina/San_Luis America/Argentina/Tucuman America/Argentina/Ushuaia America/Catamarca America/Cordoba America/Jujuy America/Mendoza"
	},
	{
	    "_other": "Greenland Standard Time",
	    "_territory": "001",
	    "_type": "America/Godthab"
	},
	{
	    "_other": "Greenland Standard Time",
	    "_territory": "GL",
	    "_type": "America/Godthab"
	},
	{
	    "_other": "Montevideo Standard Time",
	    "_territory": "001",
	    "_type": "America/Montevideo"
	},
	{
	    "_other": "Montevideo Standard Time",
	    "_territory": "UY",
	    "_type": "America/Montevideo"
	},
	{
	    "_other": "Magallanes Standard Time",
	    "_territory": "001",
	    "_type": "America/Punta_Arenas"
	},
	{
	    "_other": "Magallanes Standard Time",
	    "_territory": "CL",
	    "_type": "America/Punta_Arenas"
	},
	{
	    "_other": "Saint Pierre Standard Time",
	    "_territory": "001",
	    "_type": "America/Miquelon"
	},
	{
	    "_other": "Saint Pierre Standard Time",
	    "_territory": "PM",
	    "_type": "America/Miquelon"
	},
	{
	    "_other": "Bahia Standard Time",
	    "_territory": "001",
	    "_type": "America/Bahia"
	},
	{
	    "_other": "Bahia Standard Time",
	    "_territory": "BR",
	    "_type": "America/Bahia"
	},
	{
	    "_other": "UTC-02",
	    "_territory": "001",
	    "_type": "Etc/GMT+2"
	},
	{
	    "_other": "UTC-02",
	    "_territory": "BR",
	    "_type": "America/Noronha"
	},
	{
	    "_other": "UTC-02",
	    "_territory": "GS",
	    "_type": "Atlantic/South_Georgia"
	},
	{
	    "_other": "UTC-02",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT+2"
	},
	{
	    "_other": "Azores Standard Time",
	    "_territory": "001",
	    "_type": "Atlantic/Azores"
	},
	{
	    "_other": "Azores Standard Time",
	    "_territory": "GL",
	    "_type": "America/Scoresbysund"
	},
	{
	    "_other": "Azores Standard Time",
	    "_territory": "PT",
	    "_type": "Atlantic/Azores"
	},
	{
	    "_other": "Cape Verde Standard Time",
	    "_territory": "001",
	    "_type": "Atlantic/Cape_Verde"
	},
	{
	    "_other": "Cape Verde Standard Time",
	    "_territory": "CV",
	    "_type": "Atlantic/Cape_Verde"
	},
	{
	    "_other": "Cape Verde Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT+1"
	},
	{
	    "_other": "UTC",
	    "_territory": "001",
	    "_type": "Etc/UTC"
	},
	{
	    "_other": "UTC",
	    "_territory": "ZZ",
	    "_type": "Etc/UTC Etc/GMT"
	},
	{
	    "_other": "GMT Standard Time",
	    "_territory": "001",
	    "_type": "Europe/London"
	},
	{
	    "_other": "GMT Standard Time",
	    "_territory": "ES",
	    "_type": "Atlantic/Canary"
	},
	{
	    "_other": "GMT Standard Time",
	    "_territory": "FO",
	    "_type": "Atlantic/Faeroe"
	},
	{
	    "_other": "GMT Standard Time",
	    "_territory": "GB",
	    "_type": "Europe/London"
	},
	{
	    "_other": "GMT Standard Time",
	    "_territory": "GG",
	    "_type": "Europe/Guernsey"
	},
	{
	    "_other": "GMT Standard Time",
	    "_territory": "IE",
	    "_type": "Europe/Dublin"
	},
	{
	    "_other": "GMT Standard Time",
	    "_territory": "IM",
	    "_type": "Europe/Isle_of_Man"
	},
	{
	    "_other": "GMT Standard Time",
	    "_territory": "JE",
	    "_type": "Europe/Jersey"
	},
	{
	    "_other": "GMT Standard Time",
	    "_territory": "PT",
	    "_type": "Europe/Lisbon Atlantic/Madeira"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "001",
	    "_type": "Atlantic/Reykjavik"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "BF",
	    "_type": "Africa/Ouagadougou"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "CI",
	    "_type": "Africa/Abidjan"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "GH",
	    "_type": "Africa/Accra"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "GL",
	    "_type": "America/Danmarkshavn"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "GM",
	    "_type": "Africa/Banjul"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "GN",
	    "_type": "Africa/Conakry"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "GW",
	    "_type": "Africa/Bissau"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "IS",
	    "_type": "Atlantic/Reykjavik"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "LR",
	    "_type": "Africa/Monrovia"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "ML",
	    "_type": "Africa/Bamako"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "MR",
	    "_type": "Africa/Nouakchott"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "SH",
	    "_type": "Atlantic/St_Helena"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "SL",
	    "_type": "Africa/Freetown"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "SN",
	    "_type": "Africa/Dakar"
	},
	{
	    "_other": "Greenwich Standard Time",
	    "_territory": "TG",
	    "_type": "Africa/Lome"
	},
	{
	    "_other": "Sao Tome Standard Time",
	    "_territory": "001",
	    "_type": "Africa/Sao_Tome"
	},
	{
	    "_other": "Sao Tome Standard Time",
	    "_territory": "ST",
	    "_type": "Africa/Sao_Tome"
	},
	{
	    "_other": "Morocco Standard Time",
	    "_territory": "001",
	    "_type": "Africa/Casablanca"
	},
	{
	    "_other": "Morocco Standard Time",
	    "_territory": "EH",
	    "_type": "Africa/El_Aaiun"
	},
	{
	    "_other": "Morocco Standard Time",
	    "_territory": "MA",
	    "_type": "Africa/Casablanca"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Berlin"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "AD",
	    "_type": "Europe/Andorra"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "AT",
	    "_type": "Europe/Vienna"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "CH",
	    "_type": "Europe/Zurich"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "DE",
	    "_type": "Europe/Berlin Europe/Busingen"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "GI",
	    "_type": "Europe/Gibraltar"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "IT",
	    "_type": "Europe/Rome"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "LI",
	    "_type": "Europe/Vaduz"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "LU",
	    "_type": "Europe/Luxembourg"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "MC",
	    "_type": "Europe/Monaco"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "MT",
	    "_type": "Europe/Malta"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "NL",
	    "_type": "Europe/Amsterdam"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "NO",
	    "_type": "Europe/Oslo"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "SE",
	    "_type": "Europe/Stockholm"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "SJ",
	    "_type": "Arctic/Longyearbyen"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "SM",
	    "_type": "Europe/San_Marino"
	},
	{
	    "_other": "W. Europe Standard Time",
	    "_territory": "VA",
	    "_type": "Europe/Vatican"
	},
	{
	    "_other": "Central Europe Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Budapest"
	},
	{
	    "_other": "Central Europe Standard Time",
	    "_territory": "AL",
	    "_type": "Europe/Tirane"
	},
	{
	    "_other": "Central Europe Standard Time",
	    "_territory": "CZ",
	    "_type": "Europe/Prague"
	},
	{
	    "_other": "Central Europe Standard Time",
	    "_territory": "HU",
	    "_type": "Europe/Budapest"
	},
	{
	    "_other": "Central Europe Standard Time",
	    "_territory": "ME",
	    "_type": "Europe/Podgorica"
	},
	{
	    "_other": "Central Europe Standard Time",
	    "_territory": "RS",
	    "_type": "Europe/Belgrade"
	},
	{
	    "_other": "Central Europe Standard Time",
	    "_territory": "SI",
	    "_type": "Europe/Ljubljana"
	},
	{
	    "_other": "Central Europe Standard Time",
	    "_territory": "SK",
	    "_type": "Europe/Bratislava"
	},
	{
	    "_other": "Romance Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Paris"
	},
	{
	    "_other": "Romance Standard Time",
	    "_territory": "BE",
	    "_type": "Europe/Brussels"
	},
	{
	    "_other": "Romance Standard Time",
	    "_territory": "DK",
	    "_type": "Europe/Copenhagen"
	},
	{
	    "_other": "Romance Standard Time",
	    "_territory": "ES",
	    "_type": "Europe/Madrid Africa/Ceuta"
	},
	{
	    "_other": "Romance Standard Time",
	    "_territory": "FR",
	    "_type": "Europe/Paris"
	},
	{
	    "_other": "Central European Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Warsaw"
	},
	{
	    "_other": "Central European Standard Time",
	    "_territory": "BA",
	    "_type": "Europe/Sarajevo"
	},
	{
	    "_other": "Central European Standard Time",
	    "_territory": "HR",
	    "_type": "Europe/Zagreb"
	},
	{
	    "_other": "Central European Standard Time",
	    "_territory": "MK",
	    "_type": "Europe/Skopje"
	},
	{
	    "_other": "Central European Standard Time",
	    "_territory": "PL",
	    "_type": "Europe/Warsaw"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "001",
	    "_type": "Africa/Lagos"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "AO",
	    "_type": "Africa/Luanda"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "BJ",
	    "_type": "Africa/Porto-Novo"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "CD",
	    "_type": "Africa/Kinshasa"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "CF",
	    "_type": "Africa/Bangui"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "CG",
	    "_type": "Africa/Brazzaville"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "CM",
	    "_type": "Africa/Douala"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "DZ",
	    "_type": "Africa/Algiers"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "GA",
	    "_type": "Africa/Libreville"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "GQ",
	    "_type": "Africa/Malabo"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "NE",
	    "_type": "Africa/Niamey"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "NG",
	    "_type": "Africa/Lagos"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "TD",
	    "_type": "Africa/Ndjamena"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "TN",
	    "_type": "Africa/Tunis"
	},
	{
	    "_other": "W. Central Africa Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-1"
	},
	{
	    "_other": "Jordan Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Amman"
	},
	{
	    "_other": "Jordan Standard Time",
	    "_territory": "JO",
	    "_type": "Asia/Amman"
	},
	{
	    "_other": "GTB Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Bucharest"
	},
	{
	    "_other": "GTB Standard Time",
	    "_territory": "CY",
	    "_type": "Asia/Nicosia Asia/Famagusta"
	},
	{
	    "_other": "GTB Standard Time",
	    "_territory": "GR",
	    "_type": "Europe/Athens"
	},
	{
	    "_other": "GTB Standard Time",
	    "_territory": "RO",
	    "_type": "Europe/Bucharest"
	},
	{
	    "_other": "Middle East Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Beirut"
	},
	{
	    "_other": "Middle East Standard Time",
	    "_territory": "LB",
	    "_type": "Asia/Beirut"
	},
	{
	    "_other": "Egypt Standard Time",
	    "_territory": "001",
	    "_type": "Africa/Cairo"
	},
	{
	    "_other": "Egypt Standard Time",
	    "_territory": "EG",
	    "_type": "Africa/Cairo"
	},
	{
	    "_other": "E. Europe Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Chisinau"
	},
	{
	    "_other": "E. Europe Standard Time",
	    "_territory": "MD",
	    "_type": "Europe/Chisinau"
	},
	{
	    "_other": "Syria Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Damascus"
	},
	{
	    "_other": "Syria Standard Time",
	    "_territory": "SY",
	    "_type": "Asia/Damascus"
	},
	{
	    "_other": "West Bank Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Hebron"
	},
	{
	    "_other": "West Bank Standard Time",
	    "_territory": "PS",
	    "_type": "Asia/Hebron Asia/Gaza"
	},
	{
	    "_other": "South Africa Standard Time",
	    "_territory": "001",
	    "_type": "Africa/Johannesburg"
	},
	{
	    "_other": "South Africa Standard Time",
	    "_territory": "BI",
	    "_type": "Africa/Bujumbura"
	},
	{
	    "_other": "South Africa Standard Time",
	    "_territory": "BW",
	    "_type": "Africa/Gaborone"
	},
	{
	    "_other": "South Africa Standard Time",
	    "_territory": "CD",
	    "_type": "Africa/Lubumbashi"
	},
	{
	    "_other": "South Africa Standard Time",
	    "_territory": "LS",
	    "_type": "Africa/Maseru"
	},
	{
	    "_other": "South Africa Standard Time",
	    "_territory": "MW",
	    "_type": "Africa/Blantyre"
	},
	{
	    "_other": "South Africa Standard Time",
	    "_territory": "MZ",
	    "_type": "Africa/Maputo"
	},
	{
	    "_other": "South Africa Standard Time",
	    "_territory": "RW",
	    "_type": "Africa/Kigali"
	},
	{
	    "_other": "South Africa Standard Time",
	    "_territory": "SZ",
	    "_type": "Africa/Mbabane"
	},
	{
	    "_other": "South Africa Standard Time",
	    "_territory": "ZA",
	    "_type": "Africa/Johannesburg"
	},
	{
	    "_other": "South Africa Standard Time",
	    "_territory": "ZM",
	    "_type": "Africa/Lusaka"
	},
	{
	    "_other": "South Africa Standard Time",
	    "_territory": "ZW",
	    "_type": "Africa/Harare"
	},
	{
	    "_other": "South Africa Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-2"
	},
	{
	    "_other": "FLE Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Kiev"
	},
	{
	    "_other": "FLE Standard Time",
	    "_territory": "AX",
	    "_type": "Europe/Mariehamn"
	},
	{
	    "_other": "FLE Standard Time",
	    "_territory": "BG",
	    "_type": "Europe/Sofia"
	},
	{
	    "_other": "FLE Standard Time",
	    "_territory": "EE",
	    "_type": "Europe/Tallinn"
	},
	{
	    "_other": "FLE Standard Time",
	    "_territory": "FI",
	    "_type": "Europe/Helsinki"
	},
	{
	    "_other": "FLE Standard Time",
	    "_territory": "LT",
	    "_type": "Europe/Vilnius"
	},
	{
	    "_other": "FLE Standard Time",
	    "_territory": "LV",
	    "_type": "Europe/Riga"
	},
	{
	    "_other": "FLE Standard Time",
	    "_territory": "UA",
	    "_type": "Europe/Kiev Europe/Uzhgorod Europe/Zaporozhye"
	},
	{
	    "_other": "Israel Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Jerusalem"
	},
	{
	    "_other": "Israel Standard Time",
	    "_territory": "IL",
	    "_type": "Asia/Jerusalem"
	},
	{
	    "_other": "South Sudan Standard Time",
	    "_territory": "001",
	    "_type": "Africa/Juba"
	},
	{
	    "_other": "South Sudan Standard Time",
	    "_territory": "SS",
	    "_type": "Africa/Juba"
	},
	{
	    "_other": "Kaliningrad Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Kaliningrad"
	},
	{
	    "_other": "Kaliningrad Standard Time",
	    "_territory": "RU",
	    "_type": "Europe/Kaliningrad"
	},
	{
	    "_other": "Sudan Standard Time",
	    "_territory": "001",
	    "_type": "Africa/Khartoum"
	},
	{
	    "_other": "Sudan Standard Time",
	    "_territory": "SD",
	    "_type": "Africa/Khartoum"
	},
	{
	    "_other": "Libya Standard Time",
	    "_territory": "001",
	    "_type": "Africa/Tripoli"
	},
	{
	    "_other": "Libya Standard Time",
	    "_territory": "LY",
	    "_type": "Africa/Tripoli"
	},
	{
	    "_other": "Namibia Standard Time",
	    "_territory": "001",
	    "_type": "Africa/Windhoek"
	},
	{
	    "_other": "Namibia Standard Time",
	    "_territory": "NA",
	    "_type": "Africa/Windhoek"
	},
	{
	    "_other": "Arabic Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Baghdad"
	},
	{
	    "_other": "Arabic Standard Time",
	    "_territory": "IQ",
	    "_type": "Asia/Baghdad"
	},
	{
	    "_other": "Turkey Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Istanbul"
	},
	{
	    "_other": "Turkey Standard Time",
	    "_territory": "TR",
	    "_type": "Europe/Istanbul"
	},
	{
	    "_other": "Arab Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Riyadh"
	},
	{
	    "_other": "Arab Standard Time",
	    "_territory": "BH",
	    "_type": "Asia/Bahrain"
	},
	{
	    "_other": "Arab Standard Time",
	    "_territory": "KW",
	    "_type": "Asia/Kuwait"
	},
	{
	    "_other": "Arab Standard Time",
	    "_territory": "QA",
	    "_type": "Asia/Qatar"
	},
	{
	    "_other": "Arab Standard Time",
	    "_territory": "SA",
	    "_type": "Asia/Riyadh"
	},
	{
	    "_other": "Arab Standard Time",
	    "_territory": "YE",
	    "_type": "Asia/Aden"
	},
	{
	    "_other": "Belarus Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Minsk"
	},
	{
	    "_other": "Belarus Standard Time",
	    "_territory": "BY",
	    "_type": "Europe/Minsk"
	},
	{
	    "_other": "Russian Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Moscow"
	},
	{
	    "_other": "Russian Standard Time",
	    "_territory": "RU",
	    "_type": "Europe/Moscow Europe/Kirov"
	},
	{
	    "_other": "Russian Standard Time",
	    "_territory": "UA",
	    "_type": "Europe/Simferopol"
	},
	{
	    "_other": "E. Africa Standard Time",
	    "_territory": "001",
	    "_type": "Africa/Nairobi"
	},
	{
	    "_other": "E. Africa Standard Time",
	    "_territory": "AQ",
	    "_type": "Antarctica/Syowa"
	},
	{
	    "_other": "E. Africa Standard Time",
	    "_territory": "DJ",
	    "_type": "Africa/Djibouti"
	},
	{
	    "_other": "E. Africa Standard Time",
	    "_territory": "ER",
	    "_type": "Africa/Asmera"
	},
	{
	    "_other": "E. Africa Standard Time",
	    "_territory": "ET",
	    "_type": "Africa/Addis_Ababa"
	},
	{
	    "_other": "E. Africa Standard Time",
	    "_territory": "KE",
	    "_type": "Africa/Nairobi"
	},
	{
	    "_other": "E. Africa Standard Time",
	    "_territory": "KM",
	    "_type": "Indian/Comoro"
	},
	{
	    "_other": "E. Africa Standard Time",
	    "_territory": "MG",
	    "_type": "Indian/Antananarivo"
	},
	{
	    "_other": "E. Africa Standard Time",
	    "_territory": "SO",
	    "_type": "Africa/Mogadishu"
	},
	{
	    "_other": "E. Africa Standard Time",
	    "_territory": "TZ",
	    "_type": "Africa/Dar_es_Salaam"
	},
	{
	    "_other": "E. Africa Standard Time",
	    "_territory": "UG",
	    "_type": "Africa/Kampala"
	},
	{
	    "_other": "E. Africa Standard Time",
	    "_territory": "YT",
	    "_type": "Indian/Mayotte"
	},
	{
	    "_other": "E. Africa Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-3"
	},
	{
	    "_other": "Iran Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Tehran"
	},
	{
	    "_other": "Iran Standard Time",
	    "_territory": "IR",
	    "_type": "Asia/Tehran"
	},
	{
	    "_other": "Arabian Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Dubai"
	},
	{
	    "_other": "Arabian Standard Time",
	    "_territory": "AE",
	    "_type": "Asia/Dubai"
	},
	{
	    "_other": "Arabian Standard Time",
	    "_territory": "OM",
	    "_type": "Asia/Muscat"
	},
	{
	    "_other": "Arabian Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-4"
	},
	{
	    "_other": "Astrakhan Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Astrakhan"
	},
	{
	    "_other": "Astrakhan Standard Time",
	    "_territory": "RU",
	    "_type": "Europe/Astrakhan Europe/Ulyanovsk"
	},
	{
	    "_other": "Azerbaijan Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Baku"
	},
	{
	    "_other": "Azerbaijan Standard Time",
	    "_territory": "AZ",
	    "_type": "Asia/Baku"
	},
	{
	    "_other": "Russia Time Zone 3",
	    "_territory": "001",
	    "_type": "Europe/Samara"
	},
	{
	    "_other": "Russia Time Zone 3",
	    "_territory": "RU",
	    "_type": "Europe/Samara"
	},
	{
	    "_other": "Mauritius Standard Time",
	    "_territory": "001",
	    "_type": "Indian/Mauritius"
	},
	{
	    "_other": "Mauritius Standard Time",
	    "_territory": "MU",
	    "_type": "Indian/Mauritius"
	},
	{
	    "_other": "Mauritius Standard Time",
	    "_territory": "RE",
	    "_type": "Indian/Reunion"
	},
	{
	    "_other": "Mauritius Standard Time",
	    "_territory": "SC",
	    "_type": "Indian/Mahe"
	},
	{
	    "_other": "Saratov Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Saratov"
	},
	{
	    "_other": "Saratov Standard Time",
	    "_territory": "RU",
	    "_type": "Europe/Saratov"
	},
	{
	    "_other": "Georgian Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Tbilisi"
	},
	{
	    "_other": "Georgian Standard Time",
	    "_territory": "GE",
	    "_type": "Asia/Tbilisi"
	},
	{
	    "_other": "Volgograd Standard Time",
	    "_territory": "001",
	    "_type": "Europe/Volgograd"
	},
	{
	    "_other": "Volgograd Standard Time",
	    "_territory": "RU",
	    "_type": "Europe/Volgograd"
	},
	{
	    "_other": "Caucasus Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Yerevan"
	},
	{
	    "_other": "Caucasus Standard Time",
	    "_territory": "AM",
	    "_type": "Asia/Yerevan"
	},
	{
	    "_other": "Afghanistan Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Kabul"
	},
	{
	    "_other": "Afghanistan Standard Time",
	    "_territory": "AF",
	    "_type": "Asia/Kabul"
	},
	{
	    "_other": "West Asia Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Tashkent"
	},
	{
	    "_other": "West Asia Standard Time",
	    "_territory": "AQ",
	    "_type": "Antarctica/Mawson"
	},
	{
	    "_other": "West Asia Standard Time",
	    "_territory": "KZ",
	    "_type": "Asia/Oral Asia/Aqtau Asia/Aqtobe Asia/Atyrau"
	},
	{
	    "_other": "West Asia Standard Time",
	    "_territory": "MV",
	    "_type": "Indian/Maldives"
	},
	{
	    "_other": "West Asia Standard Time",
	    "_territory": "TF",
	    "_type": "Indian/Kerguelen"
	},
	{
	    "_other": "West Asia Standard Time",
	    "_territory": "TJ",
	    "_type": "Asia/Dushanbe"
	},
	{
	    "_other": "West Asia Standard Time",
	    "_territory": "TM",
	    "_type": "Asia/Ashgabat"
	},
	{
	    "_other": "West Asia Standard Time",
	    "_territory": "UZ",
	    "_type": "Asia/Tashkent Asia/Samarkand"
	},
	{
	    "_other": "West Asia Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-5"
	},
	{
	    "_other": "Ekaterinburg Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Yekaterinburg"
	},
	{
	    "_other": "Ekaterinburg Standard Time",
	    "_territory": "RU",
	    "_type": "Asia/Yekaterinburg"
	},
	{
	    "_other": "Pakistan Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Karachi"
	},
	{
	    "_other": "Pakistan Standard Time",
	    "_territory": "PK",
	    "_type": "Asia/Karachi"
	},
	{
	    "_other": "Qyzylorda Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Qyzylorda"
	},
	{
	    "_other": "Qyzylorda Standard Time",
	    "_territory": "KZ",
	    "_type": "Asia/Qyzylorda"
	},
	{
	    "_other": "India Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Calcutta"
	},
	{
	    "_other": "India Standard Time",
	    "_territory": "IN",
	    "_type": "Asia/Calcutta"
	},
	{
	    "_other": "Sri Lanka Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Colombo"
	},
	{
	    "_other": "Sri Lanka Standard Time",
	    "_territory": "LK",
	    "_type": "Asia/Colombo"
	},
	{
	    "_other": "Nepal Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Katmandu"
	},
	{
	    "_other": "Nepal Standard Time",
	    "_territory": "NP",
	    "_type": "Asia/Katmandu"
	},
	{
	    "_other": "Central Asia Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Almaty"
	},
	{
	    "_other": "Central Asia Standard Time",
	    "_territory": "AQ",
	    "_type": "Antarctica/Vostok"
	},
	{
	    "_other": "Central Asia Standard Time",
	    "_territory": "CN",
	    "_type": "Asia/Urumqi"
	},
	{
	    "_other": "Central Asia Standard Time",
	    "_territory": "IO",
	    "_type": "Indian/Chagos"
	},
	{
	    "_other": "Central Asia Standard Time",
	    "_territory": "KG",
	    "_type": "Asia/Bishkek"
	},
	{
	    "_other": "Central Asia Standard Time",
	    "_territory": "KZ",
	    "_type": "Asia/Almaty Asia/Qostanay"
	},
	{
	    "_other": "Central Asia Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-6"
	},
	{
	    "_other": "Bangladesh Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Dhaka"
	},
	{
	    "_other": "Bangladesh Standard Time",
	    "_territory": "BD",
	    "_type": "Asia/Dhaka"
	},
	{
	    "_other": "Bangladesh Standard Time",
	    "_territory": "BT",
	    "_type": "Asia/Thimphu"
	},
	{
	    "_other": "Omsk Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Omsk"
	},
	{
	    "_other": "Omsk Standard Time",
	    "_territory": "RU",
	    "_type": "Asia/Omsk"
	},
	{
	    "_other": "Myanmar Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Rangoon"
	},
	{
	    "_other": "Myanmar Standard Time",
	    "_territory": "CC",
	    "_type": "Indian/Cocos"
	},
	{
	    "_other": "Myanmar Standard Time",
	    "_territory": "MM",
	    "_type": "Asia/Rangoon"
	},
	{
	    "_other": "SE Asia Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Bangkok"
	},
	{
	    "_other": "SE Asia Standard Time",
	    "_territory": "AQ",
	    "_type": "Antarctica/Davis"
	},
	{
	    "_other": "SE Asia Standard Time",
	    "_territory": "CX",
	    "_type": "Indian/Christmas"
	},
	{
	    "_other": "SE Asia Standard Time",
	    "_territory": "ID",
	    "_type": "Asia/Jakarta Asia/Pontianak"
	},
	{
	    "_other": "SE Asia Standard Time",
	    "_territory": "KH",
	    "_type": "Asia/Phnom_Penh"
	},
	{
	    "_other": "SE Asia Standard Time",
	    "_territory": "LA",
	    "_type": "Asia/Vientiane"
	},
	{
	    "_other": "SE Asia Standard Time",
	    "_territory": "TH",
	    "_type": "Asia/Bangkok"
	},
	{
	    "_other": "SE Asia Standard Time",
	    "_territory": "VN",
	    "_type": "Asia/Saigon"
	},
	{
	    "_other": "SE Asia Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-7"
	},
	{
	    "_other": "Altai Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Barnaul"
	},
	{
	    "_other": "Altai Standard Time",
	    "_territory": "RU",
	    "_type": "Asia/Barnaul"
	},
	{
	    "_other": "W. Mongolia Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Hovd"
	},
	{
	    "_other": "W. Mongolia Standard Time",
	    "_territory": "MN",
	    "_type": "Asia/Hovd"
	},
	{
	    "_other": "North Asia Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Krasnoyarsk"
	},
	{
	    "_other": "North Asia Standard Time",
	    "_territory": "RU",
	    "_type": "Asia/Krasnoyarsk Asia/Novokuznetsk"
	},
	{
	    "_other": "N. Central Asia Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Novosibirsk"
	},
	{
	    "_other": "N. Central Asia Standard Time",
	    "_territory": "RU",
	    "_type": "Asia/Novosibirsk"
	},
	{
	    "_other": "Tomsk Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Tomsk"
	},
	{
	    "_other": "Tomsk Standard Time",
	    "_territory": "RU",
	    "_type": "Asia/Tomsk"
	},
	{
	    "_other": "China Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Shanghai"
	},
	{
	    "_other": "China Standard Time",
	    "_territory": "CN",
	    "_type": "Asia/Shanghai"
	},
	{
	    "_other": "China Standard Time",
	    "_territory": "HK",
	    "_type": "Asia/Hong_Kong"
	},
	{
	    "_other": "China Standard Time",
	    "_territory": "MO",
	    "_type": "Asia/Macau"
	},
	{
	    "_other": "North Asia East Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Irkutsk"
	},
	{
	    "_other": "North Asia East Standard Time",
	    "_territory": "RU",
	    "_type": "Asia/Irkutsk"
	},
	{
	    "_other": "Singapore Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Singapore"
	},
	{
	    "_other": "Singapore Standard Time",
	    "_territory": "BN",
	    "_type": "Asia/Brunei"
	},
	{
	    "_other": "Singapore Standard Time",
	    "_territory": "ID",
	    "_type": "Asia/Makassar"
	},
	{
	    "_other": "Singapore Standard Time",
	    "_territory": "MY",
	    "_type": "Asia/Kuala_Lumpur Asia/Kuching"
	},
	{
	    "_other": "Singapore Standard Time",
	    "_territory": "PH",
	    "_type": "Asia/Manila"
	},
	{
	    "_other": "Singapore Standard Time",
	    "_territory": "SG",
	    "_type": "Asia/Singapore"
	},
	{
	    "_other": "Singapore Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-8"
	},
	{
	    "_other": "W. Australia Standard Time",
	    "_territory": "001",
	    "_type": "Australia/Perth"
	},
	{
	    "_other": "W. Australia Standard Time",
	    "_territory": "AU",
	    "_type": "Australia/Perth"
	},
	{
	    "_other": "Taipei Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Taipei"
	},
	{
	    "_other": "Taipei Standard Time",
	    "_territory": "TW",
	    "_type": "Asia/Taipei"
	},
	{
	    "_other": "Ulaanbaatar Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Ulaanbaatar"
	},
	{
	    "_other": "Ulaanbaatar Standard Time",
	    "_territory": "MN",
	    "_type": "Asia/Ulaanbaatar Asia/Choibalsan"
	},
	{
	    "_other": "Aus Central W. Standard Time",
	    "_territory": "001",
	    "_type": "Australia/Eucla"
	},
	{
	    "_other": "Aus Central W. Standard Time",
	    "_territory": "AU",
	    "_type": "Australia/Eucla"
	},
	{
	    "_other": "Transbaikal Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Chita"
	},
	{
	    "_other": "Transbaikal Standard Time",
	    "_territory": "RU",
	    "_type": "Asia/Chita"
	},
	{
	    "_other": "Tokyo Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Tokyo"
	},
	{
	    "_other": "Tokyo Standard Time",
	    "_territory": "ID",
	    "_type": "Asia/Jayapura"
	},
	{
	    "_other": "Tokyo Standard Time",
	    "_territory": "JP",
	    "_type": "Asia/Tokyo"
	},
	{
	    "_other": "Tokyo Standard Time",
	    "_territory": "PW",
	    "_type": "Pacific/Palau"
	},
	{
	    "_other": "Tokyo Standard Time",
	    "_territory": "TL",
	    "_type": "Asia/Dili"
	},
	{
	    "_other": "Tokyo Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-9"
	},
	{
	    "_other": "North Korea Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Pyongyang"
	},
	{
	    "_other": "North Korea Standard Time",
	    "_territory": "KP",
	    "_type": "Asia/Pyongyang"
	},
	{
	    "_other": "Korea Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Seoul"
	},
	{
	    "_other": "Korea Standard Time",
	    "_territory": "KR",
	    "_type": "Asia/Seoul"
	},
	{
	    "_other": "Yakutsk Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Yakutsk"
	},
	{
	    "_other": "Yakutsk Standard Time",
	    "_territory": "RU",
	    "_type": "Asia/Yakutsk Asia/Khandyga"
	},
	{
	    "_other": "Cen. Australia Standard Time",
	    "_territory": "001",
	    "_type": "Australia/Adelaide"
	},
	{
	    "_other": "Cen. Australia Standard Time",
	    "_territory": "AU",
	    "_type": "Australia/Adelaide Australia/Broken_Hill"
	},
	{
	    "_other": "AUS Central Standard Time",
	    "_territory": "001",
	    "_type": "Australia/Darwin"
	},
	{
	    "_other": "AUS Central Standard Time",
	    "_territory": "AU",
	    "_type": "Australia/Darwin"
	},
	{
	    "_other": "E. Australia Standard Time",
	    "_territory": "001",
	    "_type": "Australia/Brisbane"
	},
	{
	    "_other": "E. Australia Standard Time",
	    "_territory": "AU",
	    "_type": "Australia/Brisbane Australia/Lindeman"
	},
	{
	    "_other": "AUS Eastern Standard Time",
	    "_territory": "001",
	    "_type": "Australia/Sydney"
	},
	{
	    "_other": "AUS Eastern Standard Time",
	    "_territory": "AU",
	    "_type": "Australia/Sydney Australia/Melbourne"
	},
	{
	    "_other": "West Pacific Standard Time",
	    "_territory": "001",
	    "_type": "Pacific/Port_Moresby"
	},
	{
	    "_other": "West Pacific Standard Time",
	    "_territory": "AQ",
	    "_type": "Antarctica/DumontDUrville"
	},
	{
	    "_other": "West Pacific Standard Time",
	    "_territory": "FM",
	    "_type": "Pacific/Truk"
	},
	{
	    "_other": "West Pacific Standard Time",
	    "_territory": "GU",
	    "_type": "Pacific/Guam"
	},
	{
	    "_other": "West Pacific Standard Time",
	    "_territory": "MP",
	    "_type": "Pacific/Saipan"
	},
	{
	    "_other": "West Pacific Standard Time",
	    "_territory": "PG",
	    "_type": "Pacific/Port_Moresby"
	},
	{
	    "_other": "West Pacific Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-10"
	},
	{
	    "_other": "Tasmania Standard Time",
	    "_territory": "001",
	    "_type": "Australia/Hobart"
	},
	{
	    "_other": "Tasmania Standard Time",
	    "_territory": "AU",
	    "_type": "Australia/Hobart Australia/Currie Antarctica/Macquarie"
	},
	{
	    "_other": "Vladivostok Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Vladivostok"
	},
	{
	    "_other": "Vladivostok Standard Time",
	    "_territory": "RU",
	    "_type": "Asia/Vladivostok Asia/Ust-Nera"
	},
	{
	    "_other": "Lord Howe Standard Time",
	    "_territory": "001",
	    "_type": "Australia/Lord_Howe"
	},
	{
	    "_other": "Lord Howe Standard Time",
	    "_territory": "AU",
	    "_type": "Australia/Lord_Howe"
	},
	{
	    "_other": "Bougainville Standard Time",
	    "_territory": "001",
	    "_type": "Pacific/Bougainville"
	},
	{
	    "_other": "Bougainville Standard Time",
	    "_territory": "PG",
	    "_type": "Pacific/Bougainville"
	},
	{
	    "_other": "Russia Time Zone 10",
	    "_territory": "001",
	    "_type": "Asia/Srednekolymsk"
	},
	{
	    "_other": "Russia Time Zone 10",
	    "_territory": "RU",
	    "_type": "Asia/Srednekolymsk"
	},
	{
	    "_other": "Magadan Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Magadan"
	},
	{
	    "_other": "Magadan Standard Time",
	    "_territory": "RU",
	    "_type": "Asia/Magadan"
	},
	{
	    "_other": "Norfolk Standard Time",
	    "_territory": "001",
	    "_type": "Pacific/Norfolk"
	},
	{
	    "_other": "Norfolk Standard Time",
	    "_territory": "NF",
	    "_type": "Pacific/Norfolk"
	},
	{
	    "_other": "Sakhalin Standard Time",
	    "_territory": "001",
	    "_type": "Asia/Sakhalin"
	},
	{
	    "_other": "Sakhalin Standard Time",
	    "_territory": "RU",
	    "_type": "Asia/Sakhalin"
	},
	{
	    "_other": "Central Pacific Standard Time",
	    "_territory": "001",
	    "_type": "Pacific/Guadalcanal"
	},
	{
	    "_other": "Central Pacific Standard Time",
	    "_territory": "AQ",
	    "_type": "Antarctica/Casey"
	},
	{
	    "_other": "Central Pacific Standard Time",
	    "_territory": "FM",
	    "_type": "Pacific/Ponape Pacific/Kosrae"
	},
	{
	    "_other": "Central Pacific Standard Time",
	    "_territory": "NC",
	    "_type": "Pacific/Noumea"
	},
	{
	    "_other": "Central Pacific Standard Time",
	    "_territory": "SB",
	    "_type": "Pacific/Guadalcanal"
	},
	{
	    "_other": "Central Pacific Standard Time",
	    "_territory": "VU",
	    "_type": "Pacific/Efate"
	},
	{
	    "_other": "Central Pacific Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-11"
	},
	{
	    "_other": "Russia Time Zone 11",
	    "_territory": "001",
	    "_type": "Asia/Kamchatka"
	},
	{
	    "_other": "Russia Time Zone 11",
	    "_territory": "RU",
	    "_type": "Asia/Kamchatka Asia/Anadyr"
	},
	{
	    "_other": "New Zealand Standard Time",
	    "_territory": "001",
	    "_type": "Pacific/Auckland"
	},
	{
	    "_other": "New Zealand Standard Time",
	    "_territory": "AQ",
	    "_type": "Antarctica/McMurdo"
	},
	{
	    "_other": "New Zealand Standard Time",
	    "_territory": "NZ",
	    "_type": "Pacific/Auckland"
	},
	{
	    "_other": "UTC+12",
	    "_territory": "001",
	    "_type": "Etc/GMT-12"
	},
	{
	    "_other": "UTC+12",
	    "_territory": "KI",
	    "_type": "Pacific/Tarawa"
	},
	{
	    "_other": "UTC+12",
	    "_territory": "MH",
	    "_type": "Pacific/Majuro Pacific/Kwajalein"
	},
	{
	    "_other": "UTC+12",
	    "_territory": "NR",
	    "_type": "Pacific/Nauru"
	},
	{
	    "_other": "UTC+12",
	    "_territory": "TV",
	    "_type": "Pacific/Funafuti"
	},
	{
	    "_other": "UTC+12",
	    "_territory": "UM",
	    "_type": "Pacific/Wake"
	},
	{
	    "_other": "UTC+12",
	    "_territory": "WF",
	    "_type": "Pacific/Wallis"
	},
	{
	    "_other": "UTC+12",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-12"
	},
	{
	    "_other": "Fiji Standard Time",
	    "_territory": "001",
	    "_type": "Pacific/Fiji"
	},
	{
	    "_other": "Fiji Standard Time",
	    "_territory": "FJ",
	    "_type": "Pacific/Fiji"
	},
	{
	    "_other": "Chatham Islands Standard Time",
	    "_territory": "001",
	    "_type": "Pacific/Chatham"
	},
	{
	    "_other": "Chatham Islands Standard Time",
	    "_territory": "NZ",
	    "_type": "Pacific/Chatham"
	},
	{
	    "_other": "UTC+13",
	    "_territory": "001",
	    "_type": "Etc/GMT-13"
	},
	{
	    "_other": "UTC+13",
	    "_territory": "KI",
	    "_type": "Pacific/Enderbury"
	},
	{
	    "_other": "UTC+13",
	    "_territory": "TK",
	    "_type": "Pacific/Fakaofo"
	},
	{
	    "_other": "UTC+13",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-13"
	},
	{
	    "_other": "Tonga Standard Time",
	    "_territory": "001",
	    "_type": "Pacific/Tongatapu"
	},
	{
	    "_other": "Tonga Standard Time",
	    "_territory": "TO",
	    "_type": "Pacific/Tongatapu"
	},
	{
	    "_other": "Samoa Standard Time",
	    "_territory": "001",
	    "_type": "Pacific/Apia"
	},
	{
	    "_other": "Samoa Standard Time",
	    "_territory": "WS",
	    "_type": "Pacific/Apia"
	},
	{
	    "_other": "Line Islands Standard Time",
	    "_territory": "001",
	    "_type": "Pacific/Kiritimati"
	},
	{
	    "_other": "Line Islands Standard Time",
	    "_territory": "KI",
	    "_type": "Pacific/Kiritimati"
	},
	{
	    "_other": "Line Islands Standard Time",
	    "_territory": "ZZ",
	    "_type": "Etc/GMT-14"
	}
];

function windows2IANL(tzString, territory="001"){
    var possibleZones = windowsZones.filter(
        windowsZone => windowsZone._other == tzString
    );
    
    if (possibleZones.length == 0) {
        //TODO throw error
    } else if (possibleZones.length == 1) {
        return possibleZones[0]._type;
    }
    
    possibleZones = possibleZones.filter(
        possibleZone => possibleZone._territory == territory
    );

    if (possibleZones.length == 1) {
        return possibleZones[0]._type;
    } else {
        //TODO throw error
    }
}
