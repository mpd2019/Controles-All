var 
    Image_post = document.getElementById("Image_post").Value,
    Title_post = document.getElementById("Title_post").Value,
    Q_Post = document.getElementById("Q_Post").Value,
    Q_Postt = document.getElementById("Q_Postt").Value,
    D_name = document.getElementById("D_name").Value,
    D_Varsin = document.getElementById("D_Varsin").Value,
    D_Size = document.getElementById("D_Size").Value,
    D_lang = document.getElementById("D_lang").Value,
    D_System = document.getElementById("D_System").Value,
    Dawinload1 = document.getElementById("Dawinload1").Value,
    Dawinload2 = document.getElementById("Dawinload2").Value,
    Dawinload3 = document.getElementById("Dawinload3").Value,
    Dawinload4 = document.getElementById("Dawinload4").Value,
    Dawinload5 = document.getElementById("Dawinload5").Value,
    Get0Code = document.getElementById("Get0Code").Value,
    ALL_CODE ='<div dir="rtl" style="text-align: right;" trbidi="on"><div class="separator" style="clear: both; text-align: center;"><a href="/" style="margin-left: 1em; margin-right: 1em;"><img alt="'+ Title_post +'" border="0" data-original-height="180" data-original-width="320" src="'+ Image_post +'" title="'+ Title_post +'" /></a></div><br /><h2 style="text-align: center;"><span style="font-size: x-large;">'+ Title_post +'</span></h2><br /><div style="text-align: right;"><b>'+ Q_Post +'</b></div><br /><br /><div style="text-align: right;"><b>'+ Q_Postt +'</b></div><br /><span style="color: red; font-size: x-large;"><b>معلومات:</b></span><br /><table><tbody><tr><td style="width: 150px;">الاسم</td><td style="width: 350px;">'+ D_name +'</td></tr><tr><td>الاصدار</td><td>'+ D_Varsin +'</td></tr><tr><td>المطور</td><td>'+ D_name +'</td></tr><tr><td>الحجم</td><td>'+ D_Size +'</td></tr><tr><td>اللغة</td><td>'+ D_lang +'</td></tr><tr><td>نظام التشغيل</td><td>'+ D_System +'</td></tr></tbody></table><br /><br /><div class="separator" style="clear: both; text-align: center;"><a href="/" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="65" data-original-width="314" src="https://1.bp.blogspot.com/-RJhRnHMM26Q/XjFJVUXpEAI/AAAAAAAAALo/aOSWc1aLVmcporBm8Z9L6zwrEKNV2UiUACPcBGAYYCw/s1600/45079335.png" /></a></div><div class="separator" style="clear: both; text-align: center;"><a href="/" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="70" data-original-width="125" src="https://1.bp.blogspot.com/-rzdOYV-UH8s/XjCuE_caVtI/AAAAAAAAALc/44mbwhM3owoLmoVrAzFVJEUA5sqU4YqCQCPcBGAYYCw/s1600/638680956.gif" /></a></div><br /><br /><div style="text-align: center;"><a class="button-mpd2019top" href="'+ Dawinload1 +'" target="_blank">تحميل 1</a><br /><a class="button-mpd2019top" href="'+ Dawinload2 +'" target="_blank">تحميل 2</a><br /><a class="button-mpd2019top" href="'+ Dawinload3 +'" target="_blank">تحميل 3</a><br /><a class="button-mpd2019top" href="'+ Dawinload4 +'" target="_blank">تحميل 4</a><br /><a class="button-mpd2019top" href="'+ Dawinload5 +'" target="_blank">تحميل 5</a><br /></div><br /><br /></div>';

GetCode.onclick = function() {
    document.getElementById("Get0Code").style.display = "block";
    document.getElementById("Get0Code").innerHTML = ALL_CODE;
}

    //end copy code
Copy.onclick = function() {
   var Get0Code = document.getElementById("Get0Code");
    Get0Code.select();
    Get0Code.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }
