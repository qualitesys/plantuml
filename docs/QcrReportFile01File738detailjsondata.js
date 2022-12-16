console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java 81 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.argon2.algorithm.FillSegment"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.argon2.algorithm.FillSegment" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#21"
 , "c1" : "void"
 , "c2" : "fillSegment(Instance;Position)"
 , "c3" : "3"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#55"
 , "c1" : "boolean"
 , "c2" : "isDataIndependentAddressing(Instance;Position)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#63"
 , "c1" : "void"
 , "c2" : "initAddressBlocks(Instance;Position;Block;Block;Block)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#77"
 , "c1" : "boolean"
 , "c2" : "isWithXor(Instance;Position)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#81"
 , "c1" : "int"
 , "c2" : "getPrevOffset(Instance;int)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#91"
 , "c1" : "int"
 , "c2" : "rotatePrevOffset(Instance;int;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#98"
 , "c1" : "int"
 , "c2" : "getStartingIndex(Position)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00106"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#106"
 , "c1" : "void"
 , "c2" : "nextAddresses(Block;Block;Block)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00114"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#114"
 , "c1" : "long"
 , "c2" : "getPseudoRandom(Instance;Position;Block;Block;Block;int;boolean)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#125"
 , "c1" : "int"
 , "c2" : "getRefLane(Instance;Position;long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00135"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#135"
 , "c1" : "int"
 , "c2" : "getRefColumn(Instance;Position;long;boolean)"
 , "c3" : "7"
 , "c4" : "12"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.svg" }

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
 , "c4" : "20"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "46"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00021] For method fillSegment arguments Instance  instance|Position  position"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#21"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00021] The argument instance is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#21"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00021] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00046] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00048] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.fillSegment@POLYN165649 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.fillSegment@POLYN165649 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.fillSegment@POLYN165649 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method isDataIndependentAddressing arguments Instance  instance|Position  position"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument instance is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00056] The same method call instance.getType() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.isDataIndependentAddressing@POLYN168355 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.isDataIndependentAddressing@POLYN168355 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method initAddressBlocks arguments Instance  instance|Position  position|Block  zeroBlock|Block  inputBlock|Block  addressBlock"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument instance is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument inputBlock is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.initAddressBlocks@POLYN168833 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.initAddressBlocks@POLYN168833 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.initAddressBlocks@POLYN168833 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.initAddressBlocks@POLYN168833 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.initAddressBlocks@POLYN168833 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.initAddressBlocks@POLYN168833 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.initAddressBlocks@POLYN168833 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.initAddressBlocks@POLYN168833 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method isWithXor arguments Instance  instance|Position  position"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#77"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00077] The argument instance is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#77"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00077] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.isWithXor@POLYN170190 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method getPrevOffset arguments Instance  instance|int  currentOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument instance is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getPrevOffset@POLYN170455 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getPrevOffset@POLYN170455 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getPrevOffset@POLYN170455 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method rotatePrevOffset arguments Instance  instance|int  currentOffset|int  prevOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#91"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00091] The argument instance is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.rotatePrevOffset@POLYN170853 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.rotatePrevOffset@POLYN170853 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method getStartingIndex arguments Position  position"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getStartingIndex@POLYN171212 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getStartingIndex@POLYN171212 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getStartingIndex@POLYN171212 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getStartingIndex@POLYN171212 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method nextAddresses arguments Block  zeroBlock|Block  inputBlock|Block  addressBlock"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#106"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00106] The argument inputBlock is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.nextAddresses@POLYN171555 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.nextAddresses@POLYN171555 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.nextAddresses@POLYN171555 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method getPseudoRandom arguments Instance  instance|Position  position|Block  addressBlock|Block  inputBlock|Block  zeroBlock|int  prevOffset|boolean  dataIndependentAddressing"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#114"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00114] The argument instance is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#114"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00114] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#114"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00114] The argument addressBlock is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getPseudoRandom@POLYN172035 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getPseudoRandom@POLYN172035 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method getRefLane arguments Instance  instance|Position  position|long  pseudoRandom"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#125"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00125] The argument instance is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#125"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00125] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefLane@POLYN172762 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefLane@POLYN172762 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefLane@POLYN172762 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method getRefColumn arguments Instance  instance|Position  position|long  pseudoRandom|boolean  sameLane"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#135"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00135] The argument instance is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#135"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00135] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  0xFFFFFFFFL should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method net.sourceforge.plantuml.argon2.algorithm.FillSegment.getRefColumn@POLYN173375 the MagicNumber/String  32 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/argon2/algorithm/FillSegment.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
