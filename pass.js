var pas1 = "\u006c\u0061\u006d\u0069\u0061\u0061",
    pas2 = "\u004c\u0041\u004d\u0049\u0041\u0041",
    pas3 = "\u004c\u0061\u006d\u0069\u0061\u0061",
    pas11 = "\u0061\u0079\u0061",
    pas22 = "\u0041\u0059\u0041",
    pas33 = "\u0041\u0079\u0061",
    message = "لا يسمح لك بالدخول",
   ooo = prompt ( message );
if(ooo != pas1 && ooo != pas2 && ooo != pas3 && ooo != pas11 && ooo != pas22 && ooo != pas33) {
location.href ="/"
}
