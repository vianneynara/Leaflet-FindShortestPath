const PERSIMPANGAN = [
  { id: "itc-1", vertexType: 'intersection', latitude: -7.748520314216934, longitude: 110.43439865112306, label: 'Jalan Tajem', neighborIds: ["rs-medika-respati", 'itc-18', 'itc-2'] },
    { id: "itc-2", vertexType: 'intersection', latitude: -7.751212574736011, longitude: 110.43439865112306, label: 'Jalan Tajem', neighborIds: ['itc-1', 'itc-5', 'itc-3'] },
    { id: "itc-3", vertexType: 'intersection', latitude: -7.761532304217272, longitude: 110.43270349502565, label: 'Jalan Tajem', neighborIds: ['itc-2', 'itc-4', 'itc-26'] },
    { id: "itc-4", vertexType: 'intersection', latitude: -7.760453302378131, longitude: 110.42862653732301, label: 'Jalan Sabo', neighborIds: ['itc-3', 'itc-13', 'itc-5'] },
    { id: "itc-5", vertexType: 'intersection', latitude: -7.751356090608056, longitude: 110.4286399483681, label: 'Jalan Stadion Maguwoharjo', neighborIds: ['itc-6', 'itc-2', 'itc-12', 'itc-4'] },
    { id: "itc-6", vertexType: 'intersection', latitude: -7.745033372738852, longitude: 110.42766094207765, label: 'Jalan Raya Pringgondani 1', neighborIds: ['itc-18', 'itc-5', 'itc-7'] },
    { id: "itc-7", vertexType: 'intersection', latitude: -7.745075896589286, longitude: 110.42519330978395, label: 'Jalan Raya Pringgondani 2', neighborIds: ['itc-6', 'itc-17', 'itc-8'] },
    { id: "itc-8", vertexType: 'intersection', latitude: -7.746713061566767, longitude: 110.42521476745607, label: 'Jalan Cindelaras Jaya', neighborIds: ['itc-7', 'itc-9', "rs-universitas-ahmad-dahlan"] },
    { id: "itc-9", vertexType: 'intersection', latitude: -7.746670537881606, longitude: 110.42463541030885, label: 'Gang Madukuro', neighborIds: ['itc-8', 'itc-10', "rs-universitas-ahmad-dahlan"] },
    { id: "itc-10", vertexType: 'intersection', latitude: -7.746420711144629, longitude: 110.42338818311693, label: 'Gang Madukuro', neighborIds: ['itc-11', 'itc-9', 'itc-17'] },
    { id: "itc-11", vertexType: 'intersection', latitude: -7.747284473169568, longitude: 110.42291074991228, label: '', neighborIds: ['itc-10', 'itc-12'] },
    { id: "itc-12", vertexType: 'intersection', latitude: -7.7503275591105565, longitude: 110.4224681854248, label: 'Patung Elang Jawa', neighborIds: ['itc-11', 'itc-5', 'itc-94'] },
    { id: "itc-13", vertexType: 'intersection', latitude: -7.759116505618583, longitude: 110.42273640632631, label: 'Jalan Taman Cemara', neighborIds: ['itc-4', 'itc-14', 'itc-19'] },
    { id: "itc-14", vertexType: 'intersection', latitude: -7.756142582674628, longitude: 110.42303681373598, label: 'Jalan Tasura', neighborIds: ['itc-13', 'itc-15'] },
    { id: "itc-15", vertexType: 'intersection', latitude: -7.753301523156896, longitude: 110.42330235242845, label: 'Jalan Kepuhsari', neighborIds: ['itc-16', 'itc-14'] },
    { id: "itc-16", vertexType: 'intersection', latitude: -7.752831112012443, longitude: 110.41960358619691, label: 'Jalan Kepuhsari', neighborIds: ['itc-15', 'itc-94'] },
    { id: "itc-17", vertexType: 'intersection', latitude: -7.744972244696349, longitude: 110.42408019304278, label: 'Jalan Raya Pringgondani', neighborIds: ['itc-7', 'itc-10'] },
    { id: "itc-18", vertexType: 'intersection', latitude: -7.745033372738852, longitude: 110.43406873941423, label: 'Jalan Raya Tajem', neighborIds: ['itc-1', 'itc-6'] },
    { id: "itc-19", vertexType: 'intersection', latitude: -7.763956061796632, longitude: 110.42223215103151, label: 'Jalan Padjajaran: Ring Road Utara', neighborIds: ['itc-26', 'itc-41'] },
    { id: "itc-20", vertexType: 'intersection', latitude: -7.759143082136332, longitude: 110.40407091379167, label: 'Jalan Padjajaran: Ring Road Utara', neighborIds: ['itc-22', 'itc-21', 'itc-33'] },
    { id: "itc-21", vertexType: 'intersection', latitude: -7.7573039831454285, longitude: 110.40475755929948, label: 'Jalan Selotomo', neighborIds: ['itc-20', 'itc-23', 'rs-10'] },
    { id: "itc-22", vertexType: 'intersection', latitude: -7.75952578380552, longitude: 110.40528059005739, label: 'Jalan Padjajaran: Ring Road Utara', neighborIds: ['itc-23', 'itc-20', 'itc-41'] },
    { id: "itc-23", vertexType: 'intersection', latitude: -7.757601641331072, longitude: 110.40573924779895, label: 'Jalan Cempaka', neighborIds: ['itc-21', 'itc-22', 'itc-24'] },
    { id: "itc-24", vertexType: 'intersection', latitude: -7.75617447472122, longitude: 110.40608257055285, label: 'Jalan Alpukat', neighborIds: ['itc-23', 'itc-25'] },
    { id: "itc-25", vertexType: 'intersection', latitude: -7.754811087571781, longitude: 110.40643125772478, label: 'Jalan Manggis', neighborIds: ['itc-24', "rs-condong-catur"] },
    { id: "itc-26", vertexType: 'intersection', latitude: -7.766634935488672, longitude: 110.43109416961671, label: 'Jalan Padjajaran: Ring Road Utara', neighborIds: ['itc-3', 'itc-95'] },
    { id: "itc-27", vertexType: 'intersection', latitude: -7.783388138795321, longitude: 110.42972087860109, label: 'Simpang Tiga Maguwo', neighborIds: ['itc-95', 'itc-29'] },
    { id: "itc-28", vertexType: 'intersection', latitude: -7.783281838853151, longitude: 110.41049480438234, label: 'Simpang Tiga Janti', neighborIds: ['itc-29', 'itc-50', 'itc-93'] },
    { id: "itc-29", vertexType: 'intersection', latitude: -7.783281838853151, longitude: 110.41397094726564, label: 'Jalan Laksda Adisucipto', neighborIds: ['itc-28', 'itc-30'] },
    { id: "itc-30", vertexType: 'intersection', latitude: -7.774166518585417, longitude: 110.41586190462114, label: 'Jalan Babarsari', neighborIds: ['itc-29', 'itc-31'] },
    { id: "itc-31", vertexType: 'intersection', latitude: -7.770993383954635, longitude: 110.4164841771126, label: 'Jalan Babarsari', neighborIds: ['itc-30', "rs-sadewa"] },
    { id: "itc-32", vertexType: 'intersection', latitude: -7.783111758889569, longitude: 110.38772821426393, label: 'Jalan Urip Sumoharjo', neighborIds: ['itc-42', 'itc-43', 'itc-91'] },
    { id: "itc-33", vertexType: 'intersection', latitude: -7.758425515567794, longitude: 110.39569169282915, label: 'Simpang Empat Condongcatur', neighborIds: ['itc-37', 'itc-20', 'itc-90'] },
    { id: "itc-34", vertexType: 'intersection', latitude: -7.783218058874893, longitude: 110.40830075740816, label: 'Jalan Seturan', neighborIds: [] },
    { id: "itc-35", vertexType: 'intersection', latitude: -7.754920052399183, longitude: 110.38324356079103, label: 'Jalan Kaliurang', neighborIds: ['itc-38', 'itc-90'] },
    { id: "itc-36", vertexType: 'intersection', latitude: -7.783008116377931, longitude: 110.37750095129016, label: 'Jalan Jenderal Sudirman', neighborIds: ['itc-46', 'itc-43'] },
    { id: "itc-37", vertexType: 'intersection', latitude: -7.769292531398373, longitude: 110.39075374603273, label: 'Jalan Affandi', neighborIds: ['itc-38', 'itc-42', 'itc-33'] },
    { id: "itc-38", vertexType: 'intersection', latitude: -7.765784501246444, longitude: 110.37856578826906, label: 'Jalan Argo', neighborIds: ['itc-37', 'itc-39', 'itc-35', 'itc-38'] },
    { id: "itc-39", vertexType: 'intersection', latitude: -7.771694983626846, longitude: 110.37616252899171, label: 'Jalan Persatuan', neighborIds: ['itc-40', 'itc-38', 'itc-45'] },
    { id: "itc-40", vertexType: 'intersection', latitude: -7.768633449180834, longitude: 110.37399262189868, label: 'Jalan Polowijen', neighborIds: ["rs-dr-sardjito"] },
    { id: "itc-41", vertexType: 'intersection', latitude: -7.761787437252218, longitude: 110.41201829910278, label: 'Jalan Perumnas', neighborIds: ['itc-49', 'itc-19', 'itc-22'] },
    { id: "itc-42", vertexType: 'intersection', latitude: -7.777860506064949, longitude: 110.3886079788208, label: 'Jalan Veteran', neighborIds: ['itc-37', 'itc-32'] },
    { id: "itc-43", vertexType: 'intersection', latitude: -7.783069238887897, longitude: 110.37923097610474, label: 'Jalan Anggrek', neighborIds: [] },
    { id: "itc-44", vertexType: 'intersection', latitude: -7.776542367502168, longitude: 110.37998199462892, label: 'Jalan Pelangi', neighborIds: ['itc-42', 'itc-111'] },
    { id: "itc-45", vertexType: 'intersection', latitude: -7.77611716063071, longitude: 110.37431716918945, label: 'Jalan Kemuning', neighborIds: ['itc-113', 'itc-39', 'itc-112'] },
    { id: "itc-46", vertexType: 'intersection', latitude: -7.782941678857006, longitude: 110.37485361099245, label: 'Jalan Merbabu', neighborIds: ['itc-112', 'itc-36', 'itc-47', 'itc-113'] },
    { id: "itc-47", vertexType: 'intersection', latitude: -7.784684995919323, longitude: 110.37468194961548, label: 'Jalan Slamet Riyadi', neighborIds: ['itc-46', 'itc-48'] },
    { id: "itc-48", vertexType: 'intersection', latitude: -7.785896809605072, longitude: 110.37451028823854, label: 'Jalan Dr. Sutomo', neighborIds: ['itc-47', 'itc-52', "rs-dr-soetarto"] },
    { id: "itc-49", vertexType: 'intersection', latitude: -7.764274976226991, longitude: 110.4110097885132, label: 'Jalan Persatuan', neighborIds: ['itc-41', 'itc-92'] },
    { id: "itc-50", vertexType: 'intersection', latitude: -7.783239318868718, longitude: 110.4083275794983, label: 'Jalan Sisingamangaraja', neighborIds: ['itc-28', 'itc-59', 'itc-92'] },
    { id: "itc-51", vertexType: 'intersection', latitude: -7.797260049816141, longitude: 110.37766993045808, label: 'Jalan Gadjah Mada', neighborIds: ['itc-108', 'itc-56', 'itc-99'] },
    { id: "itc-52", vertexType: 'intersection', latitude: -7.788533023763781, longitude: 110.37395238876343, label: 'Jalan Sultan Agung', neighborIds: ['itc-53', 'itc-48'] },
    { id: "itc-53", vertexType: 'intersection', latitude: -7.790417162628816, longitude: 110.37296265363696, label: 'Jalan Parangtritis', neighborIds: ['itc-54', 'itc-52'] },
    { id: "itc-54", vertexType: 'intersection', latitude: -7.790496886230279, longitude: 110.37409991025926, label: 'Jalan Irian', neighborIds: ['itc-56', 'itc-55'] },
    { id: "itc-55", vertexType: 'intersection', latitude: -7.796675419165053, longitude: 110.36911368370056, label: 'Jalan Sumatra', neighborIds: ['itc-54', "rs-lempuyangwangi"] },
    { id: "itc-56", vertexType: 'intersection', latitude: -7.789999942200338, longitude: 110.37820369005205, label: 'Jalan Java', neighborIds: ['itc-51', 'itc-54', 'itc-60'] },
    { id: "itc-57", vertexType: 'intersection', latitude: -7.769122445763837, longitude: 110.40208339691164, label: 'Jalan Bali', neighborIds: ['itc-37', 'itc-20'] },
    { id: "itc-58", vertexType: 'intersection', latitude: -7.798570150990592, longitude: 110.40987253189088, label: 'Jalan Sumatra', neighborIds: ['itc-28', 'itc-62', 'itc-93'] },
    { id: "itc-59", vertexType: 'intersection', latitude: -7.783281838853151, longitude: 110.3950881958008, label: 'Jalan Laksda Adisucipto', neighborIds: ['itc-50', 'itc-60', 'itc-91'] },
    { id: "itc-60", vertexType: 'intersection', latitude: -7.792551092460299, longitude: 110.3930711746216, label: 'Jalan Yos Sudarso', neighborIds: ['itc-59', 'itc-100'] },
    { id: "itc-61", vertexType: 'intersection', latitude: -7.796675419165053, longitude: 110.36911368370056, label: 'Jalan Kusumanegara', neighborIds: ['itc-108', 'itc-83'] },
    { id: "itc-62", vertexType: 'intersection', latitude: -7.798663160045796, longitude: 110.40234088897706, label: 'Jalan Slamet Riyadi', neighborIds: ['itc-63', 'itc-58'] },
    { id: "itc-63", vertexType: 'intersection', latitude: -7.802298469201737, longitude: 110.40223360061646, label: 'Jalan Gajah Mada', neighborIds: ['itc-62', 'itc-69'] },
    { id: "itc-64", vertexType: 'intersection', latitude: -7.810685070616185, longitude: 110.40216922760011, label: 'Jalan Diponegoro', neighborIds: ['itc-63', 'itc-65'] },
    { id: "itc-65", vertexType: 'intersection', latitude: -7.810578777608362, longitude: 110.39637565612794, label: 'Jalan Jenderal Soedirman', neighborIds: ['itc-66', 'itc-64'] },
    { id: "itc-66", vertexType: 'intersection', latitude: -7.813331757787917, longitude: 110.39612352848053, label: 'Jalan Dr. Wahidin', neighborIds: ['itc-72', 'itc-65'] },
    { id: "itc-67", vertexType: 'intersection', latitude: -7.816828760491538, longitude: 110.3839945793152, label: 'Jalan Sultan Agung', neighborIds: ['itc-102', 'itc-68'] },
    { id: "itc-68", vertexType: 'intersection', latitude: -7.816435482014306, longitude: 110.38142502307893, label: 'Jalan Sunan Kalijaga', neighborIds: ['itc-89', 'itc-67', 'rs-bhakti-ibu'] },
    { id: "itc-69", vertexType: 'intersection', latitude: -7.802117767446177, longitude: 110.39521694183351, label: 'Jalan Soekarno-Hatta', neighborIds: ['itc-70', 'itc-63'] },
    { id: "itc-70", vertexType: 'intersection', latitude: -7.802011472259368, longitude: 110.38910150527956, label: 'Jalan Gadjah Mada', neighborIds: ['itc-69', 'itc-83'] },
    { id: "itc-71", vertexType: 'intersection', latitude: -7.811535413704974, longitude: 110.38699865341188, label: 'Jalan Urip Sumoharjo', neighborIds: ['itc-70', 'itc-102'] },
    { id: "itc-72", vertexType: 'intersection', latitude: -7.8143999942440265, longitude: 110.39164423942567, label: 'Jalan Urip Sumoharjo', neighborIds: ['itc-101', 'itc-66'] },
    { id: "itc-73", vertexType: 'intersection', latitude: -7.815330048634235, longitude: 110.3731155395508, label: 'Jalan Laksda Adisucipto', neighborIds: ['itc-75', 'itc-103', 'itc-106'] },
    { id: "itc-74", vertexType: 'intersection', latitude: -7.825417019659343, longitude: 110.3734588623047, label: 'Jalan Sultan Agung', neighborIds: ['itc-104', 'itc-105'] },
    { id: "itc-75", vertexType: 'intersection', latitude: -7.814612578287322, longitude: 110.36870598793031, label: 'Jalan Sunan Kalijaga', neighborIds: ['itc-107', 'itc-73', 'itc-80'] },
    { id: "itc-76", vertexType: 'intersection', latitude: -7.824566704857581, longitude: 110.36768674850464, label: 'Jalan Gadjah Mada', neighborIds: ['itc-75', 'itc-77', 'itc-105'] },
    { id: "itc-77", vertexType: 'intersection', latitude: -7.835556889961546, longitude: 110.36558389663696, label: 'Jalan Diponegoro', neighborIds: ['itc-76', 'itc-78'] },
    { id: "itc-78", vertexType: 'intersection', latitude: -7.833346121669659, longitude: 110.3589963912964, label: 'Jalan Dr. Wahidin', neighborIds: ['itc-110', 'itc-77'] },
    { id: "itc-79", vertexType: 'intersection', latitude: -7.827755376420936, longitude: 110.35397529602052, label: 'Jalan Ahmad Yani', neighborIds: ['itc-109', 'itc-85'] },
    { id: "itc-80", vertexType: 'intersection', latitude: -7.813044768423498, longitude: 110.35603523254396, label: 'Jalan Jenderal Soedirman', neighborIds: ['itc-79', 'itc-81', 'itc-75'] },
    { id: "itc-81", vertexType: 'intersection', latitude: -7.811896808993447, longitude: 110.3494691848755, label: 'Jalan Parangtritis', neighborIds: ['itc-80', 'itc-84', 'itc-85'] },
    { id: "itc-82", vertexType: 'intersection', latitude: -7.801054814362203, longitude: 110.35633563995363, label: 'Jalan Sunan Kalijaga', neighborIds: ['itc-84', 'itc-83', 'itc-80'] },
    { id: "itc-83", vertexType: 'intersection', latitude: -7.801588080036997, longitude: 110.36926509188282, label: 'Jalan Sultan Agung', neighborIds: ['itc-61', 'itc-70', 'itc-107'] },
    { id: "itc-84", vertexType: 'intersection', latitude: -7.801012296182646, longitude: 110.35178661346437, label: 'Jalan Sultan Agung', neighborIds: ['itc-81', 'itc-82'] },
    { id: "itc-85", vertexType: 'intersection', latitude: -7.8267775197346445, longitude: 110.34667968750001, label: 'Jalan Merbabu', neighborIds: ['itc-81', 'itc-79'] },
    { id: "itc-86", vertexType: 'intersection', latitude: -7.866740225151292, longitude: 110.33839702606201, label: 'Jalan Laksda Adisucipto', neighborIds: ['itc-79', "rs-umum-pku-muhammadiyah", '87'] },
    { id: "itc-87", vertexType: 'intersection', latitude: -7.867845521935814, longitude: 110.35182952880861, label: 'Jalan Diponegoro', neighborIds: ['itc-86', 'itc-77'] },
    {id: "itc-88", vertexType: 'intersection', latitude: -7.824800541600952, longitude: 110.37842631340028, label: 'Jalan Tritunggal', neighborIds: ['itc-104', 'itc-89']},
    {id: "itc-89", vertexType: 'intersection', latitude: -7.815702069810121, longitude: 110.37619471549989, label: 'Jalan Menteri Supeno', neighborIds:['itc-68', 'itc-103']},
    {id: 'itc-90', vertexType: 'intersection', latitude: -7.759634747411525, longitude: 110.3885865211487, label: 'Jalan Padjajaran', neighborIds: ['itc-35', 'itc-33']},
    {id: 'itc-91', vertexType: 'intersection', latitude: -7.783133018888789, longitude: 110.39103806018831, label: 'Jalan Laskda Adisucipto', neighborIds: ['itc-32', 'itc-59', 'rs-siloam-yogyakarta']},
    {id: 'itc-92', vertexType: 'intersection', latitude: -7.773587170836495, longitude: 110.40903568267824, label: 'Jalan Seturan', neighborIds: ['itc-49', 'itc-50']},
    {id: 'itc-93', vertexType: 'intersection', latitude: -7.797026197653721, longitude: 110.40993690490723, label: 'Jalan Majapahit', neighborIds: ['rs-drs-hardjolukito', 'itc-58', 'itc-28']},
    {id: 'itc-94', vertexType: 'intersection', latitude: -7.74985980235277, longitude: 110.41951775550844, label: 'Jalan Stadion Maguwoharjo', neighborIds: ['itc-12',  'itc-16']},
    {id: 'itc-95', vertexType: 'intersection', latitude: -7.7706319533629085, longitude: 110.43105125427248, label: 'Jalan inspeksi Selokan Majapahit', neighborIds: ['itc-96', 'itc-26', 'itc-27']},
    {id: 'itc-96', vertexType: 'intersection', latitude: -7.770610692730173, longitude: 110.43214559555055, label: 'Jalan inspeksi Selokan Majapahit', neighborIds: ['itc-95', 'rs-hermina']},
    {id: 'itc-97', vertexType: 'intersection', latitude: -7.800427670775402, longitude: 110.39535641670228, label: 'Jalan Kenari', neighborIds: ['itc-69', 'itc-98']},
    {id: 'itc-98', vertexType: 'intersection', latitude: -7.79957730508792, longitude: 110.39225578308107, label: 'Jalan Kenari', neighborIds: ['itc-97', 'itc-99', 'itc-100']},
    {id: 'itc-99', vertexType: 'intersection', latitude: -7.797610827814685, longitude: 110.38491725921632, label: 'Jalan Kenari', neighborIds: ['itc-51', 'itc-98']},
    {id: 'itc-100', vertexType: 'intersection', latitude: -7.794049885989234, longitude: 110.39295315742494, label: 'Jalan Ipda Tut Harsono', neighborIds: ['itc-60', 'itc-98', 'rs-happy-land']},
    {id: 'itc-101', vertexType: 'intersection', latitude: -7.815606407253706, longitude: 110.38762092590333, label: 'Jalan Veteran', neighborIds: ['itc-72', 'itc-102', 'rs-hidayatullah']},
    {id: 'itc-102', vertexType: 'intersection', latitude: -7.816010315676117, longitude: 110.3864622116089, label: 'Jalan veteran', neighborIds: ['itc-71', 'itc-101']},
    {id: 'itc-103', vertexType: 'intersection', latitude: -7.815330048634235, longitude: 110.37361979484558, label: 'Jalan Kolonel Sugiono', neighborIds: ['rs-pratama', 'itc-89', 'itc-73']},
    {id: 'itc-104', vertexType: 'intersection', latitude:-7.825029063746162, longitude: 110.37737488746644, label: 'Jalan Tritunggal', neighborIds: ['rs-jogja', 'itc-88', 'itc-74']},
    {id: 'itc-105', vertexType: 'intersection', latitude: -7.823992741386055, longitude: 110.37334084510805, label: 'Jalan Imogiri Barat', neighborIds: ['itc-74', 'itc-76', 'itc-106']},
    {id: 'itc-106', vertexType: 'intersection', latitude: -7.815946540688034, longitude: 110.37316381931306, label: 'Jalan Sisingramangaraja', neighborIds: ['itc-73', 'itc-105']},
    {id: 'itc-107', vertexType: 'intersection', latitude: -7.808405079666344, longitude: 110.3691351413727, label: 'Jalan Brigadir Jenderal Katomso', neighborIds: ['itc-75', 'itc-83', 'rs-tht-dr-pomo']},
    {id: 'itc-108', vertexType: 'intersection', latitude: -7.796813604665394, longitude: 110.37263810634614, label: 'Jalan Juminahan', neighborIds: ['rs-lempuyangwangi', 'itc-61']},
    {id: 'itc-109', vertexType: 'intersection', latitude: -7.827627830026737, longitude: 110.3605628013611, label: 'Jalan Krapyak Kulon', neighborIds: ['itc-79', 'itc-110']},
    {id: 'itc-110', vertexType: 'intersection', latitude: -7.830008689614815, longitude: 110.36020874977113, label: 'Jalan Kyai Haji Ali maksum', neighborIds: ['itc-109', 'itc-78', 'rs-umum-veteran-patmasari']},
    {id: 'itc-111', vertexType: 'intersection', latitude: -7.776159681337243, longitude: 110.37741780281068, label: 'Jalan Colombo', neighborIds: ['rs-panti-rapih', 'itc-113']},
    {id: 'itc-112', vertexType: 'intersection', latitude: -7.782941678857006, longitude: 110.37232160568239, label: 'Jalan Cornelis Simanjuntak', neighborIds: ['itc-45', 'itc-46']},
    {id: 'itc-113', vertexType: 'intersection', latitude: -7.776042749383896, longitude: 110.37607669830322, label: 'Bundaran UGM', neighborIds: ['itc-46', 'itc-45', 'itc-111']},
    {id: 'itc-114', vertexType: 'intersection', latitude: -7.7620000479963975, longitude: 110.36938190460206, label: 'Jalan Selokan Mataram', neighborIds: ['itc-38', 'itc-115']},
    {id: 'itc-115', vertexType: 'intersection', latitude: -7.767421585629954, longitude: 110.36903858184816, label: 'Jalan Monjali', neighborIds: ['itc-114', 'itc-116']},
    {id: 'itc-116', vertexType: 'intersection', latitude: -7.767224923232752, longitude: 110.36778867244722, label: 'Jalan Sinduadi', neighborIds: ['itc-115', 'rs-sakina-idaman']}
]

export default PERSIMPANGAN;