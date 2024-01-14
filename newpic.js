<script type="text/javascript">
//取得所有doc img
var imgs=document.getElementsByTagName('img');

//定義
const srcA='drive.google.com/uc?id=';
const srcB='drive.usercontent.google.com/download?id=';
const srcBRemove='&authuser=0';

const targ='drive.google.com/thumbnail?id=';
const suf='&sz=w200';

function reWriteIMG()
{
//如果img包含要替換的字串的索引，則循環遍歷
for (var i= 0; i < imgs.length; i++)
  {
  if (imgs[i].src.indexOf(srcA) > -1 )
     {
     imgs[i].src=imgs[i].src.replace(srcA, targ) + suf;
     }
  else
     {
     if (imgs[i].src.indexOf(srcB) > -1 )
        {
        tmp = imgs[i].src.replace(srcBRemove, '');
        tmp = tmp.replace(srcB, targ) + suf;
        imgs[i].src = tmp; setTimeout(reWriteIMG, 5000);
        }     
     }
   }
} setTimeout(reWriteIMG, 5000); </腳本>