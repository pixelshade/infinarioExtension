// (function() {
    
    
// var checkAttributes = function(){
// clear();
document.body.style.backgroundColor = "red";
var empty_attributes = [];
var danger_attributes = [];
$('.property-group tbody tr').each(function(i, val){
    
    setTimeout(function(){
        var chil = $(val).children();
        var kuk = $(val).children().eq(1).children().first().children().first().children().first();
        var attr_name = chil.first().text();

        kuk.click();
        setTimeout(function(){
            var total = 0;
            var total24 = 0;
            var is_negative = false;
            var is_empty = false;
            var entries = $('.report-table tr').length;
            var only_one_entry = "";
            $('.report-table tr').each(function(index, value){
                if(index <2) return;
                var c = $(this).children();
                var p = c.eq(0).text().trim();  
                only_one_entry = p;
                if(p === "") is_empty = true;
                if(!is_negative) is_negative = p.indexOf('-') === 0;
                var t = parseInt(c.eq(1).text().trim());
                var l24 = parseInt(c.eq(3).text().trim());
                total+=t;
                total24 += l24;                
            });
            if(entries === 0) {
              console.log("Please check again:", attr_name);              
              chil.first().css("background","red");
            }
            if(entries === 3) {
              console.log("Only one entry("+ only_one_entry+"):", attr_name);
              chil.first().css("background","red");
            }
            if(is_empty) {
              console.log("Contains empty:", attr_name);
              chil.first().css("background","red");
            }
            if(is_negative) {
              console.log("Negative:", attr_name);
              chil.first().css("background","red");
            }
            if(total === 0) {
              console.log("total=0",attr_name);
              chil.first().css("background","red");
            }
            if(total24 === 0) {
              console.log("total24=0:",attr_name);
              chil.first().css("background","red");
            }
            
            $('.close').click();    
        }, 2000);
    }, (i)*3000);

});
// };
// })();