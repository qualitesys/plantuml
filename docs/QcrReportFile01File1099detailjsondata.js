console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java 28 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.cucadiagram.GroupPrinter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.cucadiagram.GroupPrinter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00014"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#14"
 , "c1" : "GroupPrinter"
 , "c2" : "GroupPrinter(PrintWriter)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00018"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#18"
 , "c1" : "void"
 , "c2" : "printGroup(IGroup)"
 , "c3" : "6"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#50"
 , "c1" : "void"
 , "c2" : "printLeaf(ILeaf)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#54"
 , "c1" : "void"
 , "c2" : "print(SFile;IGroup)"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.svg" }

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
"data11" : [
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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "22"
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
 , "c1" : "00010"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class GroupPrinter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00018] For method printGroup arguments IGroup  group"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#18"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00018] The argument group is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;table border=1 cellpadding=8 cellspacing=0&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;tr&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;td bgcolor=#DDDDDD&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;tr&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;td&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;i&amp;gt;No direct leaf&amp;lt;/i&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;ul&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;/ul&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;/td&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;/tr&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;tr&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;td&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;br&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;br&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;/td&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;/tr&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printGroup@POLYN153276 the MagicNumber/String  '&amp;lt;/table&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method printLeaf arguments ILeaf  leaf"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument leaf is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.printLeaf@POLYN155242 the MagicNumber/String  '&amp;lt;li&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method print arguments SFile  f|IGroup  rootGroup"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.print@POLYN155425 the MagicNumber/String  '&amp;lt;html&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.cucadiagram.GroupPrinter.print@POLYN155425 the MagicNumber/String  '&amp;lt;/html&amp;gt;' should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/cucadiagram/GroupPrinter.java.svg" }

};
console.log('leListeStr 99 main end');
