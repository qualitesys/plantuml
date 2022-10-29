console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/SourceFileReaderHardFile.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/SourceFileReaderHardFile.java 2 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/SourceFileReaderHardFile.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SourceFileReaderAbstractISourceFileReader"
 , "c2" : "net.sourceforge.plantuml.SourceFileReaderHardFile"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.SourceFileReaderHardFile" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/SourceFileReaderHardFile.java.html#15"
 , "c1" : "SourceFileReaderHardFile"
 , "c2" : "SourceFileReaderHardFile(Defines;File;File;List<String>;String;FileFormatOption)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/SourceFileReaderHardFile.java.html#23"
 , "c1" : "SuggestedFile"
 , "c2" : "getSuggestedFile(BlockUml)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/SourceFileReaderHardFile.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/SourceFileReaderHardFile.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/SourceFileReaderHardFile.java.html#15"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00015] The argument file is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/SourceFileReaderHardFile.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method getSuggestedFile arguments BlockUml  blockUml"
}} 
]
};
console.log('leListeStr 99 main end');
