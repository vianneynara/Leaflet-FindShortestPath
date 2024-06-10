const PERSIMPANGAN = [
  { id: "itc-1", vertexType: 'intersection', latitude: -7.748520314216934, longitude: 110.43439865112306, label: 'Jalan Tajem', neighborIds: ["rs-medika-respati", 'itc-181', 'itc-2'] },
    { id: "itc-2", vertexType: 'intersection', latitude: -7.751212574736011, longitude: 110.43439865112306, label: 'Jalan Tajem', neighborIds: ['itc-1', 'itc-5', 'itc-3', 'itc-188'] },
    { id: "itc-3", vertexType: 'intersection', latitude: -7.761532304217272, longitude: 110.43270349502565, label: 'Jalan Tajem', neighborIds: ['itc-2', 'itc-4', 'itc-26', 'itc-187'] },
    { id: "itc-4", vertexType: 'intersection', latitude: -7.760453302378131, longitude: 110.42862653732301, label: 'Jalan Sabo', neighborIds: ['itc-3', 'itc-13', 'itc-5'] },
    { id: "itc-5", vertexType: 'intersection', latitude: -7.751356090608056, longitude: 110.4286399483681, label: 'Jalan Stadion Maguwoharjo', neighborIds: ['itc-6', 'itc-2', 'itc-119', 'itc-4'] },
    { id: "itc-6", vertexType: 'intersection', latitude: -7.745033372738852, longitude: 110.42766094207765, label: 'Jalan Raya Pringgondani 1', neighborIds: ['itc-18', 'itc-5', 'itc-7'] },
    { id: "itc-7", vertexType: 'intersection', latitude: -7.745075896589286, longitude: 110.42519330978395, label: 'Jalan Raya Pringgondani 2', neighborIds: ['itc-6', 'itc-17', 'itc-8'] },
    { id: "itc-8", vertexType: 'intersection', latitude: -7.746713061566767, longitude: 110.42521476745607, label: 'Jalan Cindelaras Jaya', neighborIds: ['itc-7', 'itc-9', "rs-universitas-ahmad-dahlan"] },
    { id: "itc-9", vertexType: 'intersection', latitude: -7.746670537881606, longitude: 110.42463541030885, label: 'Gang Madukuro', neighborIds: ['itc-8', 'itc-10', "rs-universitas-ahmad-dahlan", 'itc-119'] },
    { id: "itc-10", vertexType: 'intersection', latitude: -7.746420711144629, longitude: 110.42338818311693, label: 'Gang Madukuro', neighborIds: ['itc-11', 'itc-9', 'itc-17'] },
    { id: "itc-11", vertexType: 'intersection', latitude: -7.747284473169568, longitude: 110.42291074991228, label: '', neighborIds: ['itc-10', 'itc-12', 'itc-11'] },
    { id: "itc-12", vertexType: 'intersection', latitude: -7.7503275591105565, longitude: 110.4224681854248, label: 'Patung Elang Jawa', neighborIds: ['itc-11', 'itc-119', 'itc-94'] },
    { id: "itc-13", vertexType: 'intersection', latitude: -7.759116505618583, longitude: 110.42273640632631, label: 'Jalan Taman Cemara', neighborIds: ['itc-4', 'itc-14', 'itc-19'] },
    { id: "itc-14", vertexType: 'intersection', latitude: -7.756142582674628, longitude: 110.42303681373598, label: 'Jalan Tasura', neighborIds: ['itc-13', 'itc-15'] },
    { id: "itc-15", vertexType: 'intersection', latitude: -7.753301523156896, longitude: 110.42330235242845, label: 'Jalan Kepuhsari', neighborIds: ['itc-16', 'itc-14'] },
    { id: "itc-16", vertexType: 'intersection', latitude: -7.752831112012443, longitude: 110.41960358619691, label: 'Jalan Kepuhsari', neighborIds: ['itc-15', 'itc-94'] },
    { id: "itc-17", vertexType: 'intersection', latitude: -7.744972244696349, longitude: 110.42408019304278, label: 'Jalan Raya Pringgondani', neighborIds: ['itc-7', 'itc-10', 'itc-118'] },
    { id: "itc-18", vertexType: 'intersection', latitude: -7.745033372738852, longitude: 110.43406873941423, label: 'Jalan Raya Tajem', neighborIds: ['itc-1', 'itc-181'] },
    { id: "itc-19", vertexType: 'intersection', latitude: -7.763956061796632, longitude: 110.42223215103151, label: 'Jalan Padjajaran: Ring Road Utara', neighborIds: ['itc-26', 'itc-41', 'itc-13'] },
    { id: "itc-20", vertexType: 'intersection', latitude: -7.759143082136332, longitude: 110.40407091379167, label: 'Jalan Padjajaran: Ring Road Utara', neighborIds: ['itc-22', 'itc-21', 'itc-33'] },
    { id: "itc-21", vertexType: 'intersection', latitude: -7.7573039831454285, longitude: 110.40475755929948, label: 'Jalan Selotomo', neighborIds: ['itc-20', 'itc-23', 'rs-bethesda'] },
    { id: "itc-22", vertexType: 'intersection', latitude: -7.75952578380552, longitude: 110.40528059005739, label: 'Jalan Padjajaran: Ring Road Utara', neighborIds: ['itc-23', 'itc-20', 'itc-132'] },
    { id: "itc-23", vertexType: 'intersection', latitude: -7.757601641331072, longitude: 110.40573924779895, label: 'Jalan Cempaka', neighborIds: ['itc-21', 'itc-22', 'itc-24'] },
    { id: "itc-24", vertexType: 'intersection', latitude: -7.75617447472122, longitude: 110.40608257055285, label: 'Jalan Alpukat', neighborIds: ['itc-23', 'itc-25'] },
    { id: "itc-25", vertexType: 'intersection', latitude: -7.754811087571781, longitude: 110.40643125772478, label: 'Jalan Manggis', neighborIds: ['itc-24', 'itc-129', "rs-condong-catur", 'itc-133', 'itc-140'] },
    { id: "itc-26", vertexType: 'intersection', latitude: -7.766634935488672, longitude: 110.43109416961671, label: 'Jalan Padjajaran: Ring Road Utara', neighborIds: ['itc-186', 'itc-19', 'itc-184'] },
    { id: "itc-27", vertexType: 'intersection', latitude: -7.783388138795321, longitude: 110.42972087860109, label: 'Simpang Tiga Maguwo', neighborIds: ['itc-95', 'itc-29', 'itc-190'] },
    { id: "itc-28", vertexType: 'intersection', latitude: -7.783281838853151, longitude: 110.41049480438234, label: 'Simpang Tiga Janti', neighborIds: ['itc-29', 'itc-50', 'itc-93'] },
    { id: "itc-29", vertexType: 'intersection', latitude: -7.783281838853151, longitude: 110.41397094726564, label: 'Jalan Laksda Adisucipto', neighborIds: ['itc-28', 'itc-30'] },
    { id: "itc-30", vertexType: 'intersection', latitude: -7.774166518585417, longitude: 110.41586190462114, label: 'Jalan Babarsari', neighborIds: ['itc-29', 'itc-31', 'itc-192'] },
    { id: "itc-31", vertexType: 'intersection', latitude: -7.770993383954635, longitude: 110.4164841771126, label: 'Jalan Babarsari', neighborIds: ['itc-30', "rs-sadewa", 'itc-191'] },
    { id: "itc-32", vertexType: 'intersection', latitude: -7.783111758889569, longitude: 110.38772821426393, label: 'Jalan Urip Sumoharjo', neighborIds: ['itc-42', 'itc-43', 'itc-198'] },
    { id: "itc-33", vertexType: 'intersection', latitude: -7.758425515567794, longitude: 110.39569169282915, label: 'Simpang Empat Condongcatur', neighborIds: ['itc-37', 'itc-20', 'itc-90'] },
    { id: "itc-35", vertexType: 'intersection', latitude: -7.754920052399183, longitude: 110.38324356079103, label: 'Jalan Kaliurang', neighborIds: ['itc-38', 'itc-90', 'itc-142'] },
    { id: "itc-36", vertexType: 'intersection', latitude: -7.783008116377931, longitude: 110.37750095129016, label: 'Jalan Jenderal Sudirman', neighborIds: ['itc-46', 'itc-43'] },
    { id: "itc-37", vertexType: 'intersection', latitude: -7.769292531398373, longitude: 110.39075374603273, label: 'Jalan Affandi', neighborIds: ['itc-38', 'itc-42', 'itc-33'] },
    { id: "itc-38", vertexType: 'intersection', latitude: -7.765784501246444, longitude: 110.37856578826906, label: 'Jalan Argo', neighborIds: ['itc-37', 'itc-39', 'itc-35', 'itc-195'] },
    { id: "itc-39", vertexType: 'intersection', latitude: -7.771694983626846, longitude: 110.37616252899171, label: 'Jalan Persatuan', neighborIds: ['itc-193', 'itc-38', 'itc-45'] },
    { id: "itc-40", vertexType: 'intersection', latitude: -7.768633449180834, longitude: 110.37399262189868, label: 'Jalan Polowijen', neighborIds: ["rs-dr-sardjito", 'itc-193', 'itc-194'] },
    { id: "itc-41", vertexType: 'intersection', latitude: -7.761787437252218, longitude: 110.41201829910278, label: 'Jalan Perumnas', neighborIds: ['itc-49', 'itc-19', 'itc-132'] },
    { id: "itc-42", vertexType: 'intersection', latitude: -7.777860506064949, longitude: 110.3886079788208, label: 'Jalan Veteran', neighborIds: ['itc-37', 'itc-32'] },
    { id: "itc-43", vertexType: 'intersection', latitude: -7.783069238887897, longitude: 110.37923097610474, label: 'Jalan Anggrek', neighborIds: ['itc-56', 'itc-36', 'itc-32', 'itc-44'] },
    { id: "itc-44", vertexType: 'intersection', latitude: -7.776542367502168, longitude: 110.37998199462892, label: 'Jalan Pelangi', neighborIds: ['itc-42', 'itc-204', 'itc-43']},
    { id: "itc-45", vertexType: 'intersection', latitude: -7.77611716063071, longitude: 110.37431716918945, label: 'Jalan Kemuning', neighborIds: ['itc-113', 'itc-39', 'itc-112'] },
    { id: "itc-46", vertexType: 'intersection', latitude: -7.782941678857006, longitude: 110.37485361099245, label: 'Jalan Merbabu', neighborIds: ['itc-112', 'itc-36', 'itc-47', 'itc-113'] },
    { id: "itc-47", vertexType: 'intersection', latitude: -7.784684995919323, longitude: 110.37468194961548, label: 'Jalan Slamet Riyadi', neighborIds: ['itc-46', 'itc-48', 'itc-201'] },
    { id: "itc-48", vertexType: 'intersection', latitude: -7.785896809605072, longitude: 110.37451028823854, label: 'Jalan Dr. Sutomo', neighborIds: ['itc-47', 'itc-52', "rs-dr-soetarto"] },
    { id: "itc-49", vertexType: 'intersection', latitude: -7.764274976226991, longitude: 110.4110097885132, label: 'Jalan Persatuan', neighborIds: ['itc-41', 'itc-135'] },
    { id: "itc-50", vertexType: 'intersection', latitude: -7.783239318868718, longitude: 110.4083275794983, label: 'Jalan Sisingamangaraja', neighborIds: ['itc-28', 'itc-59', 'itc-92'] },
    { id: "itc-51", vertexType: 'intersection', latitude: -7.797260049816141, longitude: 110.37766993045808, label: 'Jalan Gadjah Mada', neighborIds: ['itc-108', 'itc-56', 'itc-99'] },
    { id: "itc-52", vertexType: 'intersection', latitude: -7.788533023763781, longitude: 110.37395238876343, label: 'Jalan Sultan Agung', neighborIds: ['itc-53', 'itc-48'] },
    { id: "itc-53", vertexType: 'intersection', latitude: -7.790417162628816, longitude: 110.37296265363696, label: 'Jalan Parangtritis', neighborIds: ['itc-54', 'itc-52'] },
    { id: "itc-54", vertexType: 'intersection', latitude: -7.790496886230279, longitude: 110.37409991025926, label: 'Jalan Irian', neighborIds: ['itc-56', 'itc-55'] },
    { id: "itc-55", vertexType: 'intersection', latitude: -7.796675419165053, longitude: 110.36911368370056, label: 'Jalan Sumatra', neighborIds: ['itc-54'] },
    { id: "itc-56", vertexType: 'intersection', latitude: -7.789999942200338, longitude: 110.37820369005205, label: 'Jalan Java', neighborIds: ['itc-51', 'itc-54','itc-43','itc-199'] },
    { id: "itc-57", vertexType: 'intersection', latitude: -7.769122445763837, longitude: 110.40208339691164, label: 'Jalan Bali', neighborIds: ['itc-37', 'itc-20'] },
    { id: "itc-58", vertexType: 'intersection', latitude: -7.798570150990592, longitude: 110.40987253189088, label: 'Jalan Sumatra', neighborIds: ['itc-200', 'itc-62', 'itc-93', 'itc-146']},
    { id: "itc-59", vertexType: 'intersection', latitude: -7.783281838853151, longitude: 110.3950881958008, label: 'Jalan Laksda Adisucipto', neighborIds: ['itc-50', 'itc-60', 'itc-91'] },
    { id: "itc-60", vertexType: 'intersection', latitude: -7.792551092460299, longitude: 110.3930711746216, label: 'Jalan Yos Sudarso', neighborIds: ['itc-59', 'itc-100', 'itc-199'] },
    { id: "itc-61", vertexType: 'intersection', latitude: -7.796675419165053, longitude: 110.36911368370056, label: 'Jalan Kusumanegara', neighborIds: ['itc-108', 'itc-83'] },
    { id: "itc-62", vertexType: 'intersection', latitude: -7.798663160045796, longitude: 110.40234088897706, label: 'Jalan Slamet Riyadi', neighborIds: ['itc-63', 'itc-58'] },
    { id: "itc-63", vertexType: 'intersection', latitude: -7.802298469201737, longitude: 110.40223360061646, label: 'Jalan Gajah Mada', neighborIds: ['itc-62', 'itc-69'] },
    { id: "itc-64", vertexType: 'intersection', latitude: -7.810685070616185, longitude: 110.40216922760011, label: 'Jalan Diponegoro', neighborIds: ['itc-63', 'itc-65', 'itc-146'] },
    { id: "itc-65", vertexType: 'intersection', latitude: -7.810578777608362, longitude: 110.39637565612794, label: 'Jalan Jenderal Soedirman', neighborIds: ['itc-66', 'itc-64'] },
    { id: "itc-66", vertexType: 'intersection', latitude: -7.813331757787917, longitude: 110.39612352848053, label: 'Jalan Dr. Wahidin', neighborIds: ['itc-72', 'itc-65'] },
    { id: "itc-67", vertexType: 'intersection', latitude: -7.816828760491538, longitude: 110.3839945793152, label: 'Jalan Sultan Agung', neighborIds: ['itc-102', 'itc-68', 'itc-207'] },
    { id: "itc-68", vertexType: 'intersection', latitude: -7.816435482014306, longitude: 110.38142502307893, label: 'Jalan Sunan Kalijaga', neighborIds: ['rs-bhakti-ibu', 'itc-89'] },
    { id: "itc-69", vertexType: 'intersection', latitude: -7.802117767446177, longitude: 110.39521694183351, label: 'Jalan Soekarno-Hatta', neighborIds: ['itc-70', 'itc-63'] },
    { id: "itc-70", vertexType: 'intersection', latitude: -7.802011472259368, longitude: 110.38910150527956, label: 'Jalan Gadjah Mada', neighborIds: ['itc-69', 'itc-209'] },
    { id: "itc-71", vertexType: 'intersection', latitude: -7.811535413704974, longitude: 110.38699865341188, label: 'Jalan Urip Sumoharjo', neighborIds: ['itc-70', "rs-hidayatullah", 'itc-71'] },
    { id: "itc-72", vertexType: 'intersection', latitude: -7.814410623448759, longitude: 110.39205193519594, label: 'Jalan Urip Sumoharjo', neighborIds: ["itc-205", 'itc-66'] },
    { id: "itc-73", vertexType: 'intersection', latitude: -7.815330048634235, longitude: 110.3731155395508, label: 'Jalan Laksda Adisucipto', neighborIds: ['itc-103', 'itc-106', 'itc-75']},
    { id: "itc-74", vertexType: 'intersection', latitude: -7.825417019659343, longitude: 110.3734588623047, label: 'Jalan Sultan Agung', neighborIds: ['itc-76', 'itc-105', 'itc-150'] },
    { id: "itc-75", vertexType: 'intersection', latitude: -7.814681668078089, longitude: 110.36845922470094, label: 'Jalan Sunan Kalijaga', neighborIds: ['itc-76', 'itc-73', 'itc-80', 'itc-211'] },
    { id: "itc-76", vertexType: 'intersection', latitude: -7.824566704857581, longitude: 110.36768674850464, label: 'Jalan Gadjah Mada', neighborIds: ['itc-75', 'itc-74', 'itc-77'] },
    { id: "itc-77", vertexType: 'intersection', latitude: -7.835556889961546, longitude: 110.36558389663696, label: 'Jalan Diponegoro', neighborIds: ['itc-76', 'itc-78', 'itc-150']},
    { id: "itc-78", vertexType: 'intersection', latitude: -7.833346121669659, longitude: 110.3589963912964, label: 'Jalan Dr. Wahidin', neighborIds: ['itc-77', "rs-hermina", 'itc-79'] },
    { id: "itc-79", vertexType: 'intersection', latitude: -7.827755376420936, longitude: 110.35397529602052, label: 'Jalan Ahmad Yani', neighborIds: ['itc-78', 'itc-85', 'itc-80'] },
    { id: "itc-80", vertexType: 'intersection', latitude: -7.813044768423498, longitude: 110.35603523254396, label: 'Jalan Jenderal Soedirman', neighborIds: ['itc-79', 'itc-81', 'itc-75'] },
    { id: "itc-81", vertexType: 'intersection', latitude: -7.811896808993447, longitude: 110.3494691848755, label: 'Jalan Parangtritis', neighborIds: ['itc-80', 'itc-85', 'itc-163']},
    { id: "itc-82", vertexType: 'intersection', latitude: -7.801054814362203, longitude: 110.35633563995363, label: 'Jalan Sunan Kalijaga', neighborIds: ['itc-84', 'itc-83', 'itc-80'] },
    { id: "itc-83", vertexType: 'intersection', latitude: -7.801588080036997, longitude: 110.36926509188282, label: 'Jalan Sultan Agung', neighborIds: ['itc-61', 'itc-209', "rs-tht-dr-pomo"] },
    { id: "itc-84", vertexType: 'intersection', latitude: -7.801012296182646, longitude: 110.35178661346437, label: 'Jalan Sultan Agung', neighborIds: ['itc-81', 'itc-82'] },
    { id: "itc-85", vertexType: 'intersection', latitude: -7.8267775197346445, longitude: 110.34667968750001, label: 'Jalan Merbabu', neighborIds: ['itc-81', 'itc-79', 'itc-152'] },
    { id: "itc-86", vertexType: 'intersection', latitude: -7.866740225151292, longitude: 110.33839702606201, label: 'Jalan Laksda Adisucipto', neighborIds: ['itc-79', 'itc-87'] },
    { id: "itc-87", vertexType: 'intersection', latitude: -7.867845521935814, longitude: 110.35182952880861, label: 'Jalan Diponegoro', neighborIds: ['itc-86', 'itc-77'] },
    {id: "itc-88", vertexType: 'intersection', latitude: -7.824800541600952, longitude: 110.37842631340028, label: 'Jalan Tritunggal', neighborIds: ['itc-212', 'itc-89', 'itc-151']},
    {id: "itc-89", vertexType: 'intersection', latitude: -7.815702069810121, longitude: 110.37619471549989, label: 'Jalan Menteri Supeno', neighborIds:['itc-68', 'itc-103']},
    {id: 'itc-90', vertexType: 'intersection', latitude: -7.759634747411525, longitude: 110.3885865211487, label: 'Jalan Padjajaran', neighborIds: ['itc-35', 'itc-33']},
    {id: 'itc-91', vertexType: 'intersection', latitude: -7.783133018888789, longitude: 110.39103806018831, label: 'Jalan Laskda Adisucipto', neighborIds: ['itc-198', 'itc-59', 'rs-siloam-yogyakarta']},
    {id: 'itc-92', vertexType: 'intersection', latitude: -7.773587170836495, longitude: 110.40903568267824, label: 'Jalan Seturan', neighborIds: ['itc-135', 'itc-50', 'itc-92']},
    {id: 'itc-93', vertexType: 'intersection', latitude: -7.797026197653721, longitude: 110.40993690490723, label: 'Jalan Majapahit', neighborIds: ['rs-drs-hardjolukito', 'itc-58', 'itc-28']},
    {id: 'itc-94', vertexType: 'intersection', latitude: -7.74985980235277, longitude: 110.41951775550844, label: 'Jalan Stadion Maguwoharjo', neighborIds: ['itc-12',  'itc-16', 'itc-117']},
    {id: 'itc-95', vertexType: 'intersection', latitude: -7.7706319533629085, longitude: 110.43105125427248, label: 'Jalan inspeksi Selokan Majapahit', neighborIds: ['itc-96', 'itc-26', 'itc-27']},
    {id: 'itc-96', vertexType: 'intersection', latitude: -7.770610692730173, longitude: 110.43214559555055, label: 'Jalan inspeksi Selokan Majapahit', neighborIds: ['itc-95', 'rs-hermina', 'itc-189']},
    {id: 'itc-97', vertexType: 'intersection', latitude: -7.800427670775402, longitude: 110.39535641670228, label: 'Jalan Kenari', neighborIds: ['itc-69', 'itc-98']},
    {id: 'itc-98', vertexType: 'intersection', latitude: -7.79957730508792, longitude: 110.39225578308107, label: 'Jalan Kenari', neighborIds: ['itc-97', 'itc-99', 'itc-100']},
    {id: 'itc-99', vertexType: 'intersection', latitude: -7.797610827814685, longitude: 110.38491725921632, label: 'Jalan Kenari', neighborIds: ['itc-51', 'itc-98']},
    {id: 'itc-100', vertexType: 'intersection', latitude: -7.794049885989234, longitude: 110.39295315742494, label: 'Jalan Ipda Tut Harsono', neighborIds: ['itc-60', 'itc-98', 'rs-happy-land']},
    {id: 'itc-101', vertexType: 'intersection', latitude: -7.815606407253706, longitude: 110.38762092590333, label: 'Jalan Veteran', neighborIds: ['itc-205', 'itc-102', 'rs-hidayatullah']},
    {id: 'itc-102', vertexType: 'intersection', latitude: -7.816010315676117, longitude: 110.3864622116089, label: 'Jalan veteran', neighborIds: ['itc-71', 'itc-101']},
    {id: 'itc-103', vertexType: 'intersection', latitude: -7.815330048634235, longitude: 110.37361979484558, label: 'Jalan Kolonel Sugiono', neighborIds: ['itc-89', 'rs-pratama']},
    {id: 'itc-104', vertexType: 'intersection', latitude:-7.825029063746162, longitude: 110.37737488746644, label: 'Jalan Tritunggal', neighborIds: ['rs-jogja', 'itc-212', 'itc-74']},
    {id: 'itc-105', vertexType: 'intersection', latitude: -7.823992741386055, longitude: 110.37334084510805, label: 'Jalan Imogiri Barat', neighborIds: ['itc-74', 'itc-76', 'itc-106']},
    {id: 'itc-106', vertexType: 'intersection', latitude: -7.815946540688034, longitude: 110.37316381931306, label: 'Jalan Sisingramangaraja', neighborIds: ['itc-73', 'itc-105']},
    {id: 'itc-107', vertexType: 'intersection', latitude: -7.808405079666344, longitude: 110.3691351413727, label: 'Jalan Brigadir Jenderal Katomso', neighborIds: ['itc-211', 'itc-83', 'rs-tht-dr-pomo']},
    {id: 'itc-108', vertexType: 'intersection', latitude: -7.796813604665394, longitude: 110.37263810634614, label: 'Jalan Juminahan', neighborIds: ['rs-lempuyangwangi', 'itc-61', 'itc-203']},
    {id: 'itc-109', vertexType: 'intersection', latitude: -7.827627830026737, longitude: 110.3605628013611, label: 'Jalan Krapyak Kulon', neighborIds: ['itc-79', 'itc-222']},
    {id: 'itc-110', vertexType: 'intersection', latitude: -7.830008689614815, longitude: 110.36020874977113, label: 'Jalan Kyai Haji Ali maksum', neighborIds: ['itc-222', 'itc-78', 'rs-umum-veteran-patmasari']},
    {id: 'itc-111', vertexType: 'intersection', latitude: -7.776159681337243, longitude: 110.37741780281068, label: 'Jalan Colombo', neighborIds: ['rs-panti-rapih', 'itc-113', 'itc-204']},
    {id: 'itc-112', vertexType: 'intersection', latitude: -7.782941678857006, longitude: 110.37232160568239, label: 'Jalan Cornelis Simanjuntak', neighborIds: ['itc-45', 'itc-46', 'itc-145']},
    {id: 'itc-113', vertexType: 'intersection', latitude: -7.776042749383896, longitude: 110.37607669830322, label: 'Bundaran UGM', neighborIds: ['itc-46', 'itc-45', 'itc-111']},
    {id: 'itc-114', vertexType: 'intersection', latitude: -7.7620000479963975, longitude: 110.36938190460206, label: 'Jalan Selokan Mataram', neighborIds: ['itc-195', 'itc-115', 'itc-180']},
    {id: 'itc-115', vertexType: 'intersection', latitude: -7.767421585629954, longitude: 110.36903858184816, label: 'Jalan Monjali', neighborIds: ['itc-114', 'itc-116', 'itc-144']},
    {id: 'itc-116', vertexType: 'intersection', latitude: -7.767224923232752, longitude: 110.36778867244722, label: 'Jalan Sinduadi', neighborIds: ['itc-115', 'rs-sakina-idaman', 'itc-116']},
    {id: 'itc-117', vertexType: 'intersection', latitude: -7.7464267193067196, longitude: 110.41964650154115, label: "Jalan Candi Indah", neighborIds: ['itc-11', 'itc-94', 'itc-118', 'itc-122']},
    {id: 'itc-118', vertexType: 'intersection', latitude: -7.7438699707935, longitude: 110.41928172111513, label: "Jalan Arya Setyaki", neighborIds: ['itc-117', 'itc-17', 'itc-120']},
    {id: 'itc-119', vertexType: 'intersection', latitude: -7.75058839327014, longitude: 110.42403995990753, label: "Jalan Stadion Maguwaharjo", neighborIds: ['itc-12', 'itc-5', 'itc-9']},
    {id: 'itc-120', vertexType: 'intersection', latitude: -7.7368269515182835, longitude: 110.42066574096681, label: "Jalan Bakungan", neighborIds: ['itc-118', 'itc-121']},
    {id: 'itc-121', vertexType: 'intersection', latitude: -7.735463419584283, longitude: 110.4139280319214, label: "Jalan Bakungan", neighborIds: ['itc-120', 'itc-137']},
    {id: 'itc-122', vertexType: 'intersection', latitude: -7.745142690066301, longitude: 110.41268348693848, label: "Jalan Candi Gebang", neighborIds: ['itc-121', 'itc-117', 'itc-123']},
    {id: 'itc-123', vertexType: 'intersection', latitude: -7.7512219847228145, longitude: 110.41132092475891, label: "Jalan Candi Gebang", neighborIds: ['itc-122', 'itc-124', 'itc-126']},
    {id: 'itc-124', vertexType: 'intersection', latitude: -7.750654517504622, longitude: 110.40967941284181, label: "Monument Sleman Sembada", neighborIds: ['itc-123', 'itc-125', 'itc-133']},
    {id: 'itc-125', vertexType: 'intersection', latitude: -7.7535856060483885, longitude: 110.4088827967644, label: "jalan Wijaya Kusuma", neighborIds: ['itc-124', 'itc-126', 'itc-127']},
    {id: 'itc-126', vertexType: 'intersection', latitude: -7.754131175676233, longitude: 110.41057527065279, label: "Monumen Sleman Sembada", neighborIds: ['itc-123', 'itc-125', 'itc-128']}, 
    {id: 'itc-127', vertexType: 'intersection', latitude: -7.754515998828814, longitude: 110.40850192308427, label: "Jalan Flamboyan", neighborIds: ['itc-125', 'itc-128', 'itc-129']},
    {id: 'itc-128', vertexType: 'intersection', latitude: -7.754971372295987, longitude: 110.4100897908211, label: "Jalan Bakung", neighborIds: ['itc-127', 'itc-126', 'itc-130']},
    {id: 'itc-129', vertexType: 'intersection', latitude: -7.755298477721612, longitude: 110.40816128253938, label: "Jalan Wijaya Kusuma", neighborIds: ['itc-127', 'itc-25', 'itc-131']}, 
    {id: 'itc-130', vertexType: 'intersection', latitude: -7.757377037858217, longitude: 110.40893375873567, label: "Jalan Nusa Indah", neighborIds: ['itc-128']}, 
    {id: 'itc-131', vertexType: 'intersection', latitude: -7.757047647186941, longitude: 110.40763556957245, label: "Jalan Lely 1", neighborIds: ['itc-129', 'itc-130']},
    {id: 'itc-132', vertexType: 'intersection', latitude: -7.7600842577639595, longitude: 110.40697038173676, label: "Jalan Padjajaran", neighborIds: ['itc-130', 'itc-131', 'itc-22', 'itc-41', 'itc-136']},
    {id: 'itc-133', vertexType: 'intersection', latitude: -7.750024580360832, longitude: 110.40760874748231, label: 'Jalan Cempaka Baru', neighborIds: ['itc-124', 'itc-25', 'itc-141']},
    {id: 'itc-134', vertexType: 'intersection', latitude: -7.771131577922186, longitude: 110.4050660133362, label: 'Jalan Perumas', neighborIds: ['itc-57', 'itc-135', 'itc-136']},
    {id: 'itc-135', vertexType: 'intersection', latitude: -7.772322170220026, longitude: 110.40923953056335, label: 'Jalan Inspeksi Selokan Mataram', neighborIds: ['itc-134', 'itc-92', 'itc-49']},
    {id: 'itc-136', vertexType: 'intersection', latitude: -7.763265079700589, longitude: 110.40621399879457, label: 'Jalan Kavling madukismo', neighborIds: ['itc-132', 'itc-134']},
    {id: 'itc-137', vertexType: 'intersection', latitude: -7.735454766097055, longitude: 110.41318774223329, label: 'Jalan bakungan', neighborIds:['itc-121', 'itc-138']},
    {id: 'itc-138', vertexType: 'intersection', latitude: -7.738173687938511, longitude: 110.40897935628892, label: 'Jalan Kakap Raya', neighborIds: ['itc-137', 'itc-139']},
    {id: 'itc-139', vertexType: 'intersection', latitude: -7.745139682356879, longitude: 110.40667533874513, label: 'Jalan Gurameh Raya', neighborIds: ['itc-138']},
    {id: 'itc-140', vertexType: 'intersection', latitude: -7.754446985382796, longitude: 110.40499091148378, label: 'Jalan Gempol Raya', neighborIds: ['itc-141', 'itc-25', 'rs-condong-catur']},
    {id: 'itc-141', vertexType: 'intersection', latitude: -7.749710970548119, longitude: 110.4060959815979, label: 'Jalan Sambirejo Raya', neighborIds: ['itc-140', 'itc-139', 'itc-133']},
    {id: 'itc-142', vertexType: 'intersection', latitude: -7.754356624206806, longitude: 110.3827339410782, label: 'jalan Padjajaran', neighborIds: ['itc-35', 'itc-143', 'itc-179']},
    {id: 'itc-143', vertexType: 'intersection', latitude: -7.75621699744626, longitude: 110.36982178688051, label: 'Jalan Nyi Tjondro Loekito', neighborIds: ['itc-142', 'itc-114']},
    {id: 'itc-144', vertexType: 'intersection', latitude: -7.778094368925738, longitude: 110.3675150871277, label: 'Jalan Monjali', neighborIds: ['itc-115', 'itc-145']},
    {id: 'itc-145', vertexType: 'intersection', latitude: -7.782867268821041, longitude: 110.36703228950502, label: 'Jalan Diponegoro', neighborIds: ['itc-144', 'itc-112', 'itc-172']},
    {id: 'itc-146', vertexType: 'intersection', latitude: -7.811833033377027, longitude: 110.40901422500612, label: 'Jalan Majapahit', neighborIds: ['itc-64', 'itc-58', 'itc-147']},
    {id: 'itc-147', vertexType: 'intersection', latitude: -7.828435623197366, longitude: 110.40796279907228, label: 'Jalan Ahmad Yani', neighborIds: ['itc-146', 'itc-147']},
    {id: 'itc-148', vertexType: 'intersection', latitude: -7.837533817049727, longitude: 110.40444374084474, label: 'Jalan Ahmad Yani', neighborIds: ['itc-147', 'itc-149']},
    {id: 'itc-149', vertexType: 'intersection', latitude: -7.836555983319279, longitude: 110.39182662963869, label: 'Jalan Ahmad Yani', neighborIds:['itc-148', 'itc-151']},
    {id: 'itc-150', vertexType: 'intersection', latitude: -7.836215866700722, longitude: 110.3740167617798, label: 'Jalan Ahmad Yani', neighborIds: ['itc-151', 'itc-77', 'itc-74']},
    {id: 'itc-151', vertexType: 'intersection', latitude: -7.8353655739386765, longitude: 110.38170129060747, label: 'Jalan Ahmad Yani', neighborIds: ['itc-150', 'itc-149', 'itc-88']},
    {id: 'itc-152', vertexType: 'intersection', latitude: -7.825565824571337, longitude: 110.33483505249025, label: 'Jalan Brawijaya', neighborIds: ['itc-85', 'itc-153']},
    {id: 'itc-153', vertexType: 'intersection', latitude: -7.822058266089522, longitude: 110.32814025878908, label: 'Jalan Brawijaya', neighborIds: ['itc-152', 'itc-154']},
    {id: 'itc-154', vertexType: 'intersection', latitude: -7.821909459925815, longitude: 110.32404184341432, label: 'Jalan Brawijaya', neighborIds: ['itc-153', 'itc-155']},
    {id: 'itc-155', vertexType: 'intersection', latitude: -7.814702926472948, longitude: 110.32429933547975, label: 'Jalan Brawijaya', neighborIds: ['itc-154', 'itc-156']},
    {id: 'itc-156', vertexType: 'intersection', latitude: -7.800374522970593, longitude: 110.32500743865968, label: 'Jalan Brawijaya', neighborIds: ['itc-155', 'itc-157']},
    {id: 'itc-157', vertexType: 'intersection', latitude: -7.801107962080565, longitude: 110.32853722572328, label: 'Jalan Wates', neighborIds: ['itc-156', 'itc-158']},
    {id: 'itc-158', vertexType: 'intersection', latitude: -7.799736748786015, longitude: 110.32969594001771, label: 'Jalan Wates', neighborIds: ['itc-157', 'itc-159', 'itc-164']}, 
    {id: 'itc-159', vertexType: 'intersection', latitude: -7.800103469060977, longitude: 110.3336548805237, label: 'Jalan Wates', neighborIds: ['itc-158', 'itc-160']},
    {id: 'itc-160', vertexType: 'intersection', latitude: -7.800215079515606, longitude: 110.33557534217834, label: 'Jalan Wates', neighborIds: ['itc-159', 'itc-161']},
    {id: 'itc-161', vertexType: 'intersection', latitude: -7.80069340969818, longitude: 110.3421950340271, label: 'Jalan Wates', neighborIds: ['itc-160', 'itc-162']},
    {id: 'itc-162', vertexType: 'intersection', latitude: -7.801012296182646, longitude: 110.35178661346437, label: 'Jalan Wates', neighborIds: ['itc-161', 'itc-163']}, 
    {id: 'itc-163', vertexType: 'intersection', latitude: -7.807772632419869, longitude: 110.35033822059633, label:'Jalan Patangpuluhan', neighborIds:['itc-162', 'itc-81']},
    {id: 'itc-164', vertexType: 'intersection', latitude: -7.783366878809053, longitude: 110.33103704452515, label: 'Jalan Siliwangi', neighborIds: ['itc-158', 'itc-165']},
    {id: 'itc-165', vertexType: 'intersection', latitude: -7.777222697600137, longitude: 110.33165931701662, label: 'Jalan Siliwangi', neighborIds: ['itc-164', 'itc-166', 'itc-173']},
    {id: 'itc-166', vertexType: 'intersection', latitude: -7.779178640485694, longitude: 110.34097194671632, label: 'Jalan titi Bumi', neighborIds: ['itc-165', 'itc-167']},
    {id: 'itc-167', vertexType: 'intersection', latitude: -7.779603844253846, longitude: 110.343074798584, label: 'Jalan Godean', neighborIds: ['itc-166', 'itc-168']},
    {id: 'itc-168', vertexType: 'intersection', latitude: -7.781155834348968, longitude: 110.35009145736696, label: 'Jalan Godean', neighborIds: ['itc-167', 'itc-169']},
    {id: 'itc-169', vertexType: 'intersection', latitude: -7.781751116696869, longitude: 110.35266637802124, label:'Jalan Godean', neighborIds: ['itc-168', 'itc-170']},
    {id: 'itc-170', vertexType: 'intersection', latitude: -7.782877898826981, longitude: 110.35794496536255, label: 'Jalan Kyai Mojo', neighborIds: ['itc-169', 'itc-171']},
    {id: 'itc-171', vertexType: 'intersection', latitude: -7.782835378801595, longitude: 110.36083102226259, label: 'Jalan Kyai Mojo', neighborIds: ['itc-170', 'itc-172', 'itc-197']},
    {id: 'itc-172', vertexType: 'intersection', latitude: -7.782851323811624, longitude: 110.3633898496628, label: 'Jalan Diponegoro', neighborIds: ['itc-145', 'itc-171']},
    {id: 'itc-173', vertexType: 'intersection', latitude: -7.766932587066738, longitude: 110.33507108688356, label: 'Jalan Siliwangi', neighborIds: ['itc-165', 'itc-174']},
    {id: 'itc-174', vertexType: 'intersection', latitude: -7.755557894725262, longitude: 110.33891201019289, label: 'jalan Siliwangi', neighborIds: ['itc-173', 'itc-175']},
    {id: 'itc-175', vertexType: 'intersection', latitude: -7.749477091891651, longitude: 110.34090757369997, label: 'Jalan Siliwangi', neighborIds: ['itc-174', 'itc-176']},
    {id: 'itc-176', vertexType: 'intersection', latitude: -7.74475696760644, longitude: 110.3489112854004, label: 'Jalan Siliwangi', neighborIds: ['itc-175', 'itc-177']},
    {id: 'itc-177', vertexType: 'intersection', latitude: -7.748573468589234, longitude: 110.3606915473938, label: 'Jalan Siliwangi', neighborIds: ['itc-176', 'itc-178']},
    {id: 'itc-178', vertexType: 'intersection', latitude: -7.749253843962016, longitude: 110.36232233047487, label: 'Jalan Padjajaran', neighborIds: ['itc-177', 'itc-179', 'itc-180']},
    {id: 'itc-179', vertexType: 'intersection', latitude: -7.751188655419261, longitude: 110.37118434906006, label: 'Simpang Empat Monjali', neighborIds: ['itc-178', 'itc-142']},
    {id: 'itc-180', vertexType: 'intersection', latitude: -7.761255909921328, longitude: 110.36180734634401, label: 'Jalan Magelang', neighborIds: ['itc-178', 'itc-114', 'itc-197']},
    {id: 'itc-181', vertexType: 'intersection', latitude: -7.7481030521613325, longitude: 110.43435305356982, label: 'Jalan Raya Tajem', neighborIds: ['rs-medika-respati', 'itc-18', 'itc-1']},
    {id: 'itc-182', vertexType: 'intersection', latitude: -7.76969382691934, longitude: 110.43208390474322, label: 'Jalan Arjuna', neighborIds: ['rs-hermina', 'itc-184', 'itc-183']},
    {id: 'itc-183', vertexType: 'intersection', latitude: -7.769890488160474, longitude: 110.43106466531756, label: 'Jalan Padjajaran', neighborIds: ['itc-182', 'itc-95', 'itc-26']}, 
    {id: 'itc-184', vertexType: 'intersection', latitude: -7.767240868835954, longitude: 110.4324245452881, label: 'jalan Arjuna', neighborIds: ['itc-182', 'itc-26', 'itc-185']},
    {id: 'itc-185', vertexType: 'intersection', latitude: -7.764445063824236, longitude: 110.43290734291078, label: 'Jalan Arjuna', neighborIds: ['itc-184', 'itc-186', 'itc-187']},
    {id: 'itc-186', vertexType: 'intersection', latitude: -7.76396669228155, longitude: 110.43193101882936, label: 'Jalan Pasekan Selatan', neighborIds: ['itc-185']},
    {id: 'itc-187', vertexType: 'intersection', latitude: -7.761829959409657, longitude: 110.43350815773012, label: 'Jalan Arjuna', neighborIds: ['itc-185', 'itc-3', 'itc-188']},
    {id: 'itc-188', vertexType: 'intersection', latitude: -7.752347411869294, longitude: 110.43577194213869, label: 'Jalan Pangeran Diponegoro', neighborIds: ['itc-187']},
    {id: 'itc-189', vertexType: 'intersection', latitude: -7.770738256510417, longitude: 110.43369054794313, label: 'Jalan Inspeksi Selokan Mataram', neighborIds: ['itc-96', 'itc-190']},
    {id: 'itc-190', vertexType: 'intersection', latitude: -7.783473178729672, longitude: 110.43188810348511, label: 'Jalan Randu', neighborIds: ['itc-189', 'itc-27']}, 
    {id: 'itc-191', vertexType: 'intersection', latitude: -7.77069573525464, longitude: 110.4150974750519, label: 'Jalan Babarsari', neighborIds: ['itc-31', 'rs-sadewa', 'itc-192']},
    {id: 'itc-192', vertexType: 'intersection', latitude: -7.774187779038058, longitude: 110.41489899158479, label: 'Jalan Babarsari', neighborIds: ['itc-191', 'itc-30', 'itc-92']}, 
    {id: 'itc-193', vertexType: 'intersection', latitude: -7.769324422447175, longitude: 110.37368416786195, label: 'Halte RSUP Dr. Sardjito', neighborIds: ['rs-dr-sardjito', 'itc-40']}, 
    {id: 'itc-194', vertexType: 'intersection', latitude: -7.767331227242674, longitude: 110.37441909313203, label: 'Jalan Kesehatan', neighborIds: ['itc-40']},
    {id: 'itc-195', vertexType: 'intersection', latitude: -7.764721456022883, longitude: 110.376033782959, label: 'Jalan Pogung Kidul', neighborIds: ['itc-194', 'itc-114', 'itc-38']},
    {id: 'itc-196', vertexType: 'intersection', latitude: -7.767219608031545, longitude: 110.3673166036606, label: 'Jalan Sinduadi', neighborIds: ['itc-116', 'rs-sakina-idaman', 'itc-197']},
    {id: 'itc-197', vertexType: 'intersection', latitude: -7.76682628295593, longitude: 110.36154985427858, label: 'Jalan Sinduadi', neighborIds: ['itc-180', 'itc-196', 'itc-171']}, 
    {id: 'itc-198', vertexType: 'intersection', latitude: -7.7831356763886195, longitude: 110.39060622453692, label: 'Jalan Laksda Adisucipto', neighborIds: ['itc-91', 'rs-siloam-yogyakarta', 'itc-32']},
    {id: 'itc-199', vertexType: 'intersection', latitude: -7.792503258535914, longitude: 110.39205729961397, label: 'Jalan Melati Wetan', neighborIds: ['itc-60', 'itc-56', 'rs-happy-land']}, 
    {id: 'itc-200', vertexType: 'intersection', latitude: -7.798556863981014, longitude: 110.41154086589815, label: 'Jalan Maguwo - Blok o', neighborIds: ['rs-drs-hardjolukito', 'itc-58']},
    {id: 'itc-201', vertexType: 'intersection', latitude: -7.7848683626888775, longitude: 110.3761973977089, label: 'Jalan Suhartono', neighborIds: ['rs-dr-soetarto', 'itc-47', 'itc-202']}, 
    {id: 'itc-202', vertexType: 'intersection', latitude: -7.784158812569983, longitude: 110.37675261497498, label: 'Jalan Suhartono', neighborIds: ['rs-bethesda', 'itc-201']},
    {id: 'itc-203', vertexType: 'intersection', latitude: -7.79619974180538, longitude: 110.37268102169038, label: 'Jalan Hayam Wuruk', neighborIds: ['rs-lempuyangwangi', 'itc-108']},
    {id: 'itc-204', vertexType: 'intersection', latitude: -7.776191640099252, longitude: 110.37816077470781, label: 'Jalan Colombo', neighborIds: ['itc-111', 'itc-44']},
    {id: 'itc-205', vertexType: 'intersection', latitude: -7.815428959433617, longitude: 110.38827002048494, label: 'Kalan Veteran', neighborIds: ['rs-hidayatullah', 'itc-101', 'itc-72']},
    {id: 'itc-206', vertexType: 'intersection', latitude: -7.8129487654007646, longitude: 110.38153767585756, label: 'Jalan Golo', neighborIds: ['rs-bhakti-bu', 'itc-207']},
    {id: 'itc-207', vertexType: 'intersection', latitude: -7.8122397006027215, longitude: 110.38283050060274, label: 'Jalan Tohpati', neighborIds: ['itc-206', 'itc-67', 'itc-208']},
    {id: 'itc-208', vertexType: 'intersection', latitude: -7.810625120806628, longitude: 110.38244962692262, label: 'Jalan Batikan', neighborIds: ['itc-207', 'itc-71']},
    {id: 'itc-209', vertexType: 'intersection', latitude: -7.80180903500198, longitude: 110.38049697875978, label: 'Jalan Kusumanegara', neighborIds: ['itc-208', 'itc-70', 'itc-83']},
    {id: 'itc-210', vertexType: 'intersection', latitude: -7.809134214747651, longitude: 110.36865234375001, label: 'Jalan Madyosuro', neighborIds: ['rs-tht-dr-pomo', 'itc-211']}, 
    {id: 'itc-211', vertexType: 'intersection', latitude: -7.809165433340936, longitude: 110.36907076835632, label: 'Jalan mantrigawen Lor', neighborIds: ['itc-210', 'itc-107']},
    {id: 'itc-212', vertexType: 'intersection', latitude: -7.82485151952444, longitude: 110.37789791822435, label: 'Jalan Tritunggal', neighborIds: ['itc-104', 'itc-88', 'rs-jogja']},
    {id: 'itc-222', vertexType: 'intersection', latitude: -7.829661233244595, longitude: 110.3602758049965, label: 'Jalan Kyai haji Ali Maksum', neighborIds: ['rs-umum-veteran-patmasari', 'itc-109', 'itc-110']}
]

export default PERSIMPANGAN;