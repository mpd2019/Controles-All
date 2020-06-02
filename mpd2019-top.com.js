

GetCode.onclick = function(GetCode) {
    var 
    I_i = document.getElementById("I_i").value,
    T_t = document.getElementById("T_t").value,
    P_p = document.getElementById("P_p").value,
    P1_p1 = document.getElementById("P1_p1").value,
    N_n = document.getElementById("N_n").value,
    V_v = document.getElementById("V_v").value,
    SZ_sz = document.getElementById("SZ_sz").value,
    L_l = document.getElementById("L_l").value,
    S_s = document.getElementById("S_s").value,
    D_0 = document.getElementById("Dwon_Sc").value,
    D_1 = document.getElementById("Dwon1_Sc").value,
    D_2 = document.getElementById("Dwon2_Sc").value,
    D_3 = document.getElementById("Dwon3_Sc").value,
    D_4 = document.getElementById("Dwon4_Sc").value,
    Reselt = document.getElementById("Reselt"),
    All_Code ='<div dir="rtl" style="text-align: right;" trbidi="on"><div class="separator" style="clear: both; text-align: center;"><a href="/" style="margin-left: 1em; margin-right: 1em;"><img alt="' + T_t + '" border="0" data-original-height="180" data-original-width="320" src="' + I_i + '" title="' + T_t + '" /></a></div><br /><h2 style="text-align: center;"><span style="font-size: x-large;"><font size="6">' + T_t + '</font></span></h2><br /><div style="text-align: center;"><b>' + P_p + '.</b></div><br /><div style="text-align: center;"><b>' + P1_p1 + '.</b></div><div style="text-align: center;"><br /></div><span style="color: red; font-size: x-large;"><b>معلومات:</b></span><br /><table><tbody><tr><td style="width: 150px;">الاسم</td><td style="width: 350px;">' + N_n + '</td></tr><tr><td>الاصدار</td><td>' + V_v + '</td></tr><tr><td>المطور</td><td>' + N_n + '</td></tr><tr><td>الحجم</td><td>' + SZ_sz + '</td></tr><tr><td>اللغة</td><td>' + L_l + '</td></tr><tr><td>نظام التشغيل</td><td>' + S_s + '</td></tr></tbody></table><br /><br /><div class="separator" style="clear: both; text-align: center;"><h2 style="color:red;font-size:30px;">حان وقت التحميل</h2></div><br /><br /><div style="text-align: center;"><a class="button-mpd2019top" href="' + D_0 + '" target="_blank">تحميل 1</a><a class="button-mpd2019top" href="' + D_1 + '" target="_blank">تحميل 2</a><a class="button-mpd2019top" href="' + D_2 + '" target="_blank">تحميل 3</a><a class="button-mpd2019top" href="' + D_3 + '" target="_blank">تحميل 4</a><a class="button-mpd2019top" href="' + D_4 + '" target="_blank">تحميل 5</a></div><br /><br /></div>';
    
    document.getElementById("Reselt").style.display = "block";
    document.getElementById("Reselt").innerHTML = All_Code;
}
//end copy code
Copy.onclick = function(Copy) {

        Reselt.select();
        Reselt.setSelectionRange(0, 99999)
        document.execCommand("copy");
      }
