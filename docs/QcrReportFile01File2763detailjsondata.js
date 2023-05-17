console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java 31 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.windowsdot.WindowsDotArchive"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.windowsdot.WindowsDotArchive" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#55"
 , "c1" : "WindowsDotArchive"
 , "c2" : "WindowsDotArchive()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#59"
 , "c1" : "WindowsDotArchive"
 , "c2" : "getInstance()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#66"
 , "c1" : "String"
 , "c2" : "readString(InputStream)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#76"
 , "c1" : "int"
 , "c2" : "readNumber(InputStream)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#83"
 , "c1" : "int"
 , "c2" : "readByte(InputStream)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#87"
 , "c1" : "void"
 , "c2" : "extract(File)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#104"
 , "c1" : "boolean"
 , "c2" : "isThereArchive()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00114"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#114"
 , "c1" : "File"
 , "c2" : "getWindowsExeLite()"
 , "c3" : "3"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.svg" }

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
 , "c4" : "3"
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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "18"
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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#59"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00059] Lock statement on synchronized method getInstance"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.getInstance@POLYN161964 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method readString arguments InputStream  is"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.readString@POLYN162209 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method readNumber arguments InputStream  is"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.readNumber@POLYN162828 the MagicNumber/String  256 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.readNumber@POLYN162828 the MagicNumber/String  256 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method readByte arguments InputStream  is"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#83"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00083] The argument is is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method extract arguments File  dir"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00095] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.extract@POLYN163438 the MagicNumber/String  'graphviz.dat' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.extract@POLYN163438 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.extract@POLYN163438 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.extract@POLYN163438 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#104"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00104] Lock statement on synchronized method isThereArchive"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.isThereArchive@POLYN164558 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.isThereArchive@POLYN164558 the MagicNumber/String  'graphviz.dat' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.isThereArchive@POLYN164558 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.isThereArchive@POLYN164558 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#114"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00114] Lock statement on synchronized method getWindowsExeLite"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.getWindowsExeLite@POLYN165016 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.getWindowsExeLite@POLYN165016 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.getWindowsExeLite@POLYN165016 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.getWindowsExeLite@POLYN165016 the MagicNumber/String  'java.io.tmpdir' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.getWindowsExeLite@POLYN165016 the MagicNumber/String  '_graphviz' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method net.sourceforge.plantuml.windowsdot.WindowsDotArchive.getWindowsExeLite@POLYN165016 the MagicNumber/String  'dot.exe' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00059] Public method getInstance is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00066] Public method readString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00076] Public method readNumber is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/windowsdot/WindowsDotArchive.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
