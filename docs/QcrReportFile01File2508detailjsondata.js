console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java 23 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.timingdiagram.TimingFormat"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.timingdiagram.TimingFormat" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#53"
 , "c1" : "TimingFormat"
 , "c2" : "TimingFormat(SimpleDateFormat)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#57"
 , "c1" : "TimingFormat"
 , "c2" : "create(SimpleDateFormat)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#61"
 , "c1" : "String"
 , "c2" : "formatTime(BigDecimal)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#68"
 , "c1" : "String"
 , "c2" : "formatTime(long)"
 , "c3" : "4"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#94"
 , "c1" : "TimeTick"
 , "c2" : "createDate(int;int;int;TimingFormat)"
 , "c3" : "1"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "15"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method create arguments SimpleDateFormat  sdf"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method formatTime arguments BigDecimal  time"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.formatTime@POLYN167530 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method formatTime arguments long  time"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#82"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00082] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.formatTime@POLYN167884 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.formatTime@POLYN167884 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.formatTime@POLYN167884 the MagicNumber/String  60 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.formatTime@POLYN167884 the MagicNumber/String  60 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.formatTime@POLYN167884 the MagicNumber/String  60 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.formatTime@POLYN167884 the MagicNumber/String  3600 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.formatTime@POLYN167884 the MagicNumber/String  '%d:%02d:%02d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.formatTime@POLYN167884 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.formatTime@POLYN167884 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.formatTime@POLYN167884 the MagicNumber/String  '%02d/%02d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.formatTime@POLYN167884 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method createDate arguments int  yyyy|int  mm|int  dd|TimingFormat  format"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#96"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00096] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.createDate@POLYN169538 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.createDate@POLYN169538 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method net.sourceforge.plantuml.timingdiagram.TimingFormat.createDate@POLYN169538 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00094] Public method createDate is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/timingdiagram/TimingFormat.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
