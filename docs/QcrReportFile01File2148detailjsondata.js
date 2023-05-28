console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/stats/StatsImpl.java 17 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Stats"
 , "c2" : "net.sourceforge.plantuml.stats.StatsImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.stats.StatsImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#62"
 , "c1" : "StatsImpl"
 , "c2" : "StatsImpl(Map&lt;String,ParsedGenerated&gt;;Map&lt;String,ParsedGenerated&gt;;FormatCounter;FormatCounter;HistoricalData;ParsedGenerated)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#74"
 , "c1" : "StatsLine"
 , "c2" : "createDataLineSession(ParsedGenerated)"
 , "c3" : "2"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#97"
 , "c1" : "StatsLine"
 , "c2" : "createLineByDiagramType(String;NumberAnalyzed;NumberAnalyzed)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00111"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#111"
 , "c1" : "StatsTable"
 , "c2" : "getLastSessions()"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00123"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#123"
 , "c1" : "StatsTable"
 , "c2" : "getCurrentSessionByFormat()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00127"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#127"
 , "c1" : "StatsTable"
 , "c2" : "getAllByFormat()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00131"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#131"
 , "c1" : "StatsTable"
 , "c2" : "getCurrentSessionByDiagramType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00135"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#135"
 , "c1" : "StatsTable"
 , "c2" : "getAllByDiagramType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00139"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#139"
 , "c1" : "StatsTable"
 , "c2" : "getByDiagramType(String;Map&lt;String,ParsedGenerated&gt;)"
 , "c3" : "2"
 , "c4" : "11"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method createDataLineSession arguments ParsedGenerated  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.stats.StatsImpl.createDataLineSession@POLYN179250 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method createLineByDiagramType arguments String  key|NumberAnalyzed  parse|NumberAnalyzed  generate"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#97"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00097] The argument parse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#97"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00097] The argument generate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method net.sourceforge.plantuml.stats.StatsImpl.getLastSessions@POLYN183180 the MagicNumber/String  'Statistics' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method net.sourceforge.plantuml.stats.StatsImpl.getLastSessions@POLYN183180 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.stats.StatsImpl.getCurrentSessionByFormat@POLYN183887 the MagicNumber/String  'current format' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method net.sourceforge.plantuml.stats.StatsImpl.getAllByFormat@POLYN184014 the MagicNumber/String  'all format' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method net.sourceforge.plantuml.stats.StatsImpl.getCurrentSessionByDiagramType@POLYN184141 the MagicNumber/String  'Current session' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method net.sourceforge.plantuml.stats.StatsImpl.getAllByDiagramType@POLYN184282 the MagicNumber/String  'All session' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method getByDiagramType arguments String  name|Map&lt;String ,ParsedGenerated &gt;  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#139"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00139] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00145] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00146] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method net.sourceforge.plantuml.stats.StatsImpl.getByDiagramType@POLYN184423 the MagicNumber/String  'Total' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/stats/StatsImpl.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
