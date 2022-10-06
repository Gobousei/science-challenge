function doGet(e){
  let page = e.parameter.page;
  if (!page) {
    page = 'index';
  }else{}
  var ss_id = '1ASnZVCaHDEGzQsQG2ULpfP1x4VoSMVuiCLwbQ2bLmxM';
        var sh_name = 'シート1'; //スプレッドシートのシート名を指定
        var sheet = SpreadsheetApp.openById(ss_id).getSheetByName(sh_name);
        var lastrow = sheet.getLastRow()+1;
        var min = 2;
        let myData = sheet.getRange(min, 1, lastrow-min, 6).getDisplayValues();
        let template = HtmlService.createTemplateFromFile(page);
  template.myData = myData;
  return template.evaluate().setTitle("サイエンスチャレンジ").setFaviconUrl('https://raw.githubusercontent.com/Gobousei/science-challenge/main/sozai_image_88859.png');
}

function getAppUrl() {
  return ScriptApp.getService().getUrl();
}
function deletesp(){
  var ss_id = '1ASnZVCaHDEGzQsQG2ULpfP1x4VoSMVuiCLwbQ2bLmxM';
        var sh_name = 'シート1'; //スプレッドシートのシート名を指定
        var sheet = SpreadsheetApp.openById(ss_id).getSheetByName(sh_name);
        sheet.deleteRow(2); 
}
