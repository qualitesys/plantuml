console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/pdf/PdfConverter.java 16 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.pdf.PdfConverter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.pdf.PdfConverter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00011"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#11"
 , "c1" : "void"
 , "c2" : "convert(File;File)"
 , "c3" : "4"
 , "c4" : "20"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.svg" }

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
 , "c4" : "12"
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
 , "c1" : "00009"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class PdfConverter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#11"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00011] For method convert arguments File  svgFile|File  pdfFile"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#11"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00011] The argument svgFile is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#11"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00011] The argument pdfFile is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00013"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00013] In method net.sourceforge.plantuml.pdf.PdfConverter.convert@POLYN151869 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method net.sourceforge.plantuml.pdf.PdfConverter.convert@POLYN151869 the MagicNumber/String  'log4j.debug' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method net.sourceforge.plantuml.pdf.PdfConverter.convert@POLYN151869 the MagicNumber/String  'false' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method net.sourceforge.plantuml.pdf.PdfConverter.convert@POLYN151869 the MagicNumber/String  'org.apache.batik.apps.rasterizer.SVGConverter' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method net.sourceforge.plantuml.pdf.PdfConverter.convert@POLYN151869 the MagicNumber/String  'org.apache.batik.apps.rasterizer.DestinationType' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method net.sourceforge.plantuml.pdf.PdfConverter.convert@POLYN151869 the MagicNumber/String  'PDF' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method net.sourceforge.plantuml.pdf.PdfConverter.convert@POLYN151869 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.pdf.PdfConverter.convert@POLYN151869 the MagicNumber/String  'setDestinationType' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method net.sourceforge.plantuml.pdf.PdfConverter.convert@POLYN151869 the MagicNumber/String  'setSources' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method net.sourceforge.plantuml.pdf.PdfConverter.convert@POLYN151869 the MagicNumber/String  'setDst' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method net.sourceforge.plantuml.pdf.PdfConverter.convert@POLYN151869 the MagicNumber/String  'execute' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/pdf/PdfConverter.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.pdf.PdfConverter.convert@POLYN151869 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
