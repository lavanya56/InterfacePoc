<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Interface POC</title>
   <!-- <script src="../node_modules/angular/angular.js"></script> -->
   <!-- <script src="../node_modules/jquery/dist/jquery.min.js"></script> -->
   <script src="https://cdn.rawgit.com/niklasvh/html2canvas/0.5.0-alpha2/dist/html2canvas.min.js"></script>
   <!-- <script src="../node_modules/jsPDF/dist/jspdf.debug.js"></script> -->
   <script src="./node_modules/angular-save-html-to-pdf/dist/saveHtmlToPdf.min"></script>
	<link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/table.css" />
     
		<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
 <link data-require="bootstrap-css@*" data-semver="3.3.1" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />
 
 <link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
 <!--<link rel="stylesheet" type="text/css" media="screen" href="css/footable.bootstrap.css" /> -->
 
 <script data-require="angular.js@*" data-semver="1.3.15" src="https://code.angularjs.org/1.3.15/angular.js"></script>
 <script data-require="ui-bootstrap@*" data-semver="0.12.1" src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.1.min.js"></script>
 <script type="text/javascript" src="js/footable/js/footable.js"></script>
 <script type="text/javascript" src="js/footable/js/footable.sort.js"></script>
 <script type="text/javascript" src="js/footable/js/footable.filter.js"></script>
 <!--<script type="text/javascript" src="js/footable/js/footable.paginate.js"></script> -->
 <script type="text/javascript" src="js/angular-footable.js"></script>
    <link rel="stylesheet" type="text/css" href="js/footable/css/footable.core.css">
    <link href="css/jquery.mCustomScrollbar.css" rel="stylesheet">
    <script type="text/javascript" src="js/moment.js"></script> 
    <script type="text/javascript" src="js/daterangepicker.js"></script>
    <!--<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>
    <script src="mainCtrl.js"></script>
    <link rel="stylesheet" href="/css/daterangepicker.css" type="text/css">
    <script src='https://cdn.jsdelivr.net/jquery.mcustomscrollbar/3.1.5/jquery.mCustomScrollbar.concat.min.js'></script>
    <!--<script src="js/jspdf.min.js"></script>
    <script src="js/html2canvas.min.js"></script>
    <script src="js/html2pdf.js"></script>
    <script src='https://printjs-4de6.kxcdn.com/print.min.js'></script>
    <link rel="stylesheet"   type="text/css" media="screen" href="https://printjs-4de6.kxcdn.com/print.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/0.9.0rc1/jspdf.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-sanitize.js"></script>
    <script src="js/pdfmake.min.js"></script>
    <script src="js/vfs_fonts.js"></script>  -->
    <script src='https://printjs-4de6.kxcdn.com/print.min.js'></script>
    <link rel="stylesheet"   type="text/css" media="screen" href="https://printjs-4de6.kxcdn.com/print.min.css"/>   
    
    
   

    <script>
      $(document).ready(function() {
          $("#live-chat").hide(0);
          $("#chat-bot").hide(0);
          $("#mir-img").show(0);
          $("#startchatm").click(function() {
              $("#mir-img").hide();
              $("#regis-form").hide();
              //$("#live-chat").show();
              $("#chat-bot").show();
  
              //var socket = io();
  
          });
          $("#mir-img").click(function() {
              $("#mir-img").hide();
              $("#regis-form").hide();
              //$("#live-chat").show();
              $("#chat-bot").show();
  
             // var socket = io();
  
          });
  
  
      });
      </script>
    
    
  <style>
    .img1 {
        margin-top: -1px;
    }

.chatt {
        background-color: #ffffff !important;
    }

    .chat {
        position: fixed;
        top: 40%;
        right: 1%;
        width: 300px;
        height: 347px;
        max-height: 500px;
        z-index: 2;
        overflow: hidden;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.5);
        border-radius: 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    /*--------------------
         Chat Title
         --------------------*/

    .chat-title {
        -webkit-box-flex: 0;
        -ms-flex: 0 1 45px;
        flex: 0 1 45px;
        position: relative;
        z-index: 2;
        background: #66624F;
        color: #fff;
        text-align: left;
        padding: 10px 10px 10px 50px;
    }

    .chat-title h1,
    .chat-title h2 {
        font-weight: normal;
        font-size: 12px;
        margin: 0;
        padding: 0;
    }

    .chat-title h2 {
        color: rgba(255, 255, 255, 0.5);
        font-size: 9px;
        letter-spacing: 1px;
    }

    .chat-title .avatar {
        position: absolute;
        z-index: 1;
        top: 20px;
        left: 9px;
        border-radius: 30px;
        width: 30px;
        height: 30px;
        overflow: hidden;
        margin: 0;
        padding: 0;
        opacity: 0.5;
    }

    .chat-title .avatar img {
        width: 100%;
        height: auto;
    }
    /*--------------------
         Messages
         --------------------*/

    .messages {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        overflow-y: hidden;
        overflow-x: hidden;
        position: relative;
        width: 100%;
    }

    .messages .messages-content {
        position: absolute;
        top: 0;
        left: 0;
        height: 101%;
        width: 100%;
    }

    .messages .message {
        clear: both;
        float: left;
        padding: 6px 10px 7px;
        border-radius: 3px 3px 3px 0;
        background: #232527;
        color: #ffffff;
        margin: 8px 0;
        font-size: 12px;
        line-height: 1.4;
        margin-left: 35px;
        position: relative;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }

    .messages .message .timestamp {
        position: absolute;
        bottom: -15px;
        font-size: 10px;
        color: #000;
    }

    .messages .message::before {
        content: '';
        position: absolute;
        bottom: -5px;
        border-top: 6px solid #232527;
        left: 0;
        border-right: 7px solid transparent;
    }

    .messages .message .avatar {
        position: absolute;
        z-index: 1;
        bottom: -10px;
        left: -35px;
        border-radius: 30px;
        width: 30px;
        height: 30px;
        overflow: hidden;
        margin: 0;
        padding: 0;
    }

    .messages .message .avatar img {
        width: 100%;
        height: auto;
    }

    .messages .message.message-personal {
        float: right;
        text-align: right;
        background: #ffffff;
        border-radius: 3px 3px 0 3px;
        color: #000;
    }

    .messages .message.message-personal::before {
        left: auto;
        right: 0;
        border-right: none;
        border-left: 5px solid transparent;
        border-top: 4px solid #b7b2b3;
        bottom: -4px;
    }

    .messages .message:last-child {
        margin-bottom: 30px;
    }

    .messages .message.new {
        -webkit-transform: scale(0);
        transform: scale(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-animation: bounce 500ms linear both;
        animation: bounce 500ms linear both;
        color:#153f79;
        font:bold;
    }
}
.messages .message.loading::before {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    content: '';
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    z-index: 2;
    margin-top: 4px;
    -webkit-animation: ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
    animation: ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
    border: none;
    -webkit-animation-delay: .15s;
    animation-delay: .15s;
}
.messages .message.loading span {
    display: block;
    font-size: 0;
    width: 20px;
    height: 10px;
    position: relative;
}
.messages .message.loading span::before {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    content: '';
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    z-index: 2;
    margin-top: 4px;
    -webkit-animation: ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
    animation: ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
    margin-left: -7px;
}
.messages .message.loading span::after {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    content: '';
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    z-index: 2;
    margin-top: 4px;
    -webkit-animation: ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
    animation: ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
    margin-left: 7px;
    -webkit-animation-delay: .3s;
    animation-delay: .3s;
}
/*--------------------
         Message Box
         --------------------*/
.message-box {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 40px;
    flex: 0 1 40px;
    width: 100%;
    background:#66624F;
    padding: 10px;
    position: relative;
}
.message-box .message-input {
    background: white !important;
    border: none;
    outline: none !important;
    resize: none;
    color: black;
    font-size: 12px;
    font-family: 'inherit'!important;
    height: 30px;
    margin: 0;
    padding-right: 20px;
    width: 265px;
}
.message-box textarea:focus:-webkit-placeholder {
    color: transparent;
}
.message-box .message-submit {
    position: absolute;
    z-index: 1;
    top: 15px;
    right: 20px;
    color: #fff;
    border: none;
    background: #ef4048;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 1;
    padding: 6px 10px;
    border-radius: 3px;
    outline: none !important;
    -webkit-transition: background .2s ease;
    transition: background .2s ease;
}
.message-box .message-submit:hover {
    background: #00aae7;
}
/*--------------------
         Custom Srollbar
         --------------------*/
.mCSB_scrollTools {
    margin: 1px -3px 1px 0;
    opacity: 0;
}
.mCSB_inside>.mCSB_container {
    margin-right: 0px;
    padding: 0 10px;
}
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
    background-color: rgba(0, 0, 0, 0.5) !important;
}
/*--------------------
         Bounce
         --------------------*/
@-webkit-keyframes bounce {
    0% {
        -webkit-transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    4.7% {
        -webkit-transform: matrix3d(0.45, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0.45, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    9.41% {
        -webkit-transform: matrix3d(0.883, 0, 0, 0, 0, 0.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0.883, 0, 0, 0, 0, 0.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    14.11% {
        -webkit-transform: matrix3d(1.141, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(1.141, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    18.72% {
        -webkit-transform: matrix3d(1.212, 0, 0, 0, 0, 1.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(1.212, 0, 0, 0, 0, 1.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    24.32% {
        -webkit-transform: matrix3d(1.151, 0, 0, 0, 0, 1.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(1.151, 0, 0, 0, 0, 1.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    29.93% {
        -webkit-transform: matrix3d(1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    35.54% {
        -webkit-transform: matrix3d(0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    41.04% {
        -webkit-transform: matrix3d(0.961, 0, 0, 0, 0, 0.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0.961, 0, 0, 0, 0, 0.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    52.15% {
        -webkit-transform: matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    63.26% {
        -webkit-transform: matrix3d(1.007, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(1.007, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    85.49% {
        -webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    100% {
        -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
}
@keyframes bounce {
    0% {
        -webkit-transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    4.7% {
        -webkit-transform: matrix3d(0.45, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0.45, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    9.41% {
        -webkit-transform: matrix3d(0.883, 0, 0, 0, 0, 0.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0.883, 0, 0, 0, 0, 0.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    14.11% {
        -webkit-transform: matrix3d(1.141, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(1.141, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    18.72% {
        -webkit-transform: matrix3d(1.212, 0, 0, 0, 0, 1.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(1.212, 0, 0, 0, 0, 1.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    24.32% {
        -webkit-transform: matrix3d(1.151, 0, 0, 0, 0, 1.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(1.151, 0, 0, 0, 0, 1.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    29.93% {
        -webkit-transform: matrix3d(1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    35.54% {
        -webkit-transform: matrix3d(0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    41.04% {
        -webkit-transform: matrix3d(0.961, 0, 0, 0, 0, 0.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0.961, 0, 0, 0, 0, 0.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    52.15% {
        -webkit-transform: matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    63.26% {
        -webkit-transform: matrix3d(1.007, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(1.007, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    85.49% {
        -webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    100% {
        -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
}
@-webkit-keyframes ball {
    from {
        -webkit-transform: translateY(0) scaleY(0.8);
        transform: translateY(0) scaleY(0.8);
    }

    to {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }
}
@keyframes ball {
    from {
        -webkit-transform: translateY(0) scaleY(0.8);
        transform: translateY(0) scaleY(0.8);
    }

    to {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }
}
.chat1 {
    display: none;
}
.toooltip {
    animation: MoveUpDown 2s linear infinite;
    position: relative;
    border-radius: 3px;
}
@keyframes MoveUpDown {
    0% {
        bottom: 0;
    }

    50% {
        bottom: 15px;
    }

    100% {
        bottom: 0;
    }
}
.toooltip:after {
    content: '';
    position: absolute;
    top: 100%;
    left: -10%;
    margin-left: 115px;
    width: 0;
    height: 0;
    border-left: solid 10px transparent;
    border-right: solid 10px transparent;
}
p {
    margin: 0;
}
#live-chat {
    bottom: 0;
    font-size: 13px;
    right: 24px;
    position: fixed;
    width: 380px;
}
#live-chat header {
    background: #2368a0;
    border-radius: 5px 5px 0 0;
    color: #fff;
    cursor: pointer;
    padding: 0px 24px;
}
#live-chat input[type="text"] {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 8px;
    outline: none;
    width: 234px;
}
.chat-message-counter {
    background: #e62727;
    border: 1px solid #fff;
    border-radius: 50%;
    display: none;
    font-size: 13px;
    font-weight: bold;
    height: 28px;
    left: 0;
    line-height: 28px;
    margin: -15px 0 0 -15px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 28px;
}
.chat {
    background: rgba(0, 0, 0, 0.7);
}
.chat-history {
    height: 352px;
    padding: 8px 24px;
    overflow-y: scroll;
}
.chat-message {
    margin: 16px 0;
}
.chat-time {
    float: right;
    font-size: 12px;
}
.chat-feedback {
    font-style: italic;
    margin: 0 0 0 80px;
}
.clearfix {
    *zoom: 1;
}
/* For IE 6/7 */
.clearfix:before,
.clearfix:after {
    content: "";
    display: table;
}
.clearfix:after {
    clear: both;
}
#live-chat h4:before {
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 8px;
    margin: 0 8px 0 0;
    width: 8px;
}
#live-chat h4 {
    font-size: 12px;
}
#live-chat h5 {
    font-size: 12px;
}
#live-chat form {
    padding: 24px;
}
.chat-close {
    background: #1b2126;
    border-radius: 50%;
    color: #fff;
    display: block;
    float: right;
    font-size: 12px;
    height: 16px;
    line-height: 16px;
    margin: 2px 0 0 0;
    text-align: center;
    width: 16px;
}
.chat_window {
    bottom: 10% !important;
    position: fixed;
    width: 100%;
    max-width: 30%;
    height: 50%;
    border-radius: 10px;
    background-color: #fff;
    left: 84%;
    top: -15%;
    transform: translateX(-50%) translateY(-50%);
    background-color: rgba(0, 0, 0, 0.68);
    margin-top: 47%;
    z-index: 1;
}
.chat_window .clicked {
    height: 100px
}
.top_menu {
    background-color: #232527;
    width: 100%;
    padding: 20px 0 15px;
    box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
}
.top_menu .buttons {
    margin: 3px 0 0 20px;
    position: absolute;
}
.top_menu .buttons .button {
    height: 31px;
    border-radius: 50%;
    display: inline-block;
    margin-right: -3px;
    position: relative;
}
.top_menu .buttons .button.close {
    background-color: #f5886e;
}
.top_menu .buttons .button.minimize {
    background-color: #fdbf68;
}
.top_menu .buttons .button.maximize {
    background-color: #a3d063;
}
.top_menu .title {
    text-align: center;
    color: #bcbdc0;
    font-size: 20px;
}
.minimize {
    margin-top: 20px;
}
.messages1 {
    position: relative;
    list-style: none;
    padding: 20px 10px 0 10px;
    margin: 0;
    height: 347px;
}
.messages1 .message.left .text_wrapper {
    background-color: #ffe6cb;
    margin-left: 20px;
}
.messages1 .message.left .text_wrapper::after,
.messages1 .message.left .text_wrapper::before {
    right: 100%;
    border-right-color: #ffe6cb;
}
.messages1 .message.left .text {
    color: #c48843;
}
.messages1 .message.right .avatar {
    background-color: #fdbf68;
    float: right;
}
.messages1 .message.right .text_wrapper {
    background-color: #c7eafc;
    margin-right: 20px;
    float: right;
}
.messages1 .message.right .text_wrapper::after,
.messages1 .message.right .text_wrapper::before {
    left: 100%;
    border-left-color: #c7eafc;
}
.messages1 .message.right .text {
    color: #45829b;
}
.messages1 .message.appeared {
    opacity: 1;
}
.messages1 .message .text_wrapper {
    display: inline-block;
    padding: 20px;
    border-radius: 6px;
    width: calc(100% - 85px);
    min-width: 100px;
    position: relative;
}
.messages1 .message .text_wrapper::after,
.messages1 .message .text_wrapper:before {
    top: 18px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}
.messages1 .message .text_wrapper::after {
    border-width: 13px;
    margin-top: 0px;
}
.messages1 .message .text_wrapper::before {
    border-width: 15px;
    margin-top: -2px;
    position: relative;
}
.messages1 .message .text_wrapper .text {
    font-size: 19px;
    font-weight: 300;
}
.bottom_wrapper {
    position: relative;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.68);
    padding: 20px 20px;
    position: absolute;
    bottom: 0;
}
.bottom_wrapper .message_input_wrapper {
    display: inline-block;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #bcbdc0;
    width: 250px;
    position: relative;
    padding: 0 20px;
}
.bottom_wrapper .message_input_wrapper .message_input {
    border: none;
    height: 100%;
    box-sizing: border-box;
    width: 225px;
    position: absolute;
    outline-width: 0;
    color: gray;
}
.bottom_wrapper .send_message {
    width: 20%;
    height: auto;
    display: inline-block;
    border-radius: 5px;
    background-color: #ef4048;
    border: 2px solid #ef4048;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s linear;
    text-align: center;
    float: right;
}
.bottom_wrapper .send_message:hover {
    color: #ef4048;
    background-color: #fff;
}
.bottom_wrapper .send_message .text {
    font-size: 19px;
    font-weight: 300;
    display: inline-block;
    line-height: 48px;
}
.max {
    border-radius: 48px;
    width: 40px;
    height: 40px;
}
aside.floating-icons {
    position: fixed;
    top: 420px;
    right: 0px;
    margin-top: 140px;
    height: 100px;
    width: 73px;
}
aside.floating-icons ul {
    padding: 0;
    margin: 10;
}
aside.floating-icons ul li a {
    float: right;
    list-style: none;
    margin: 0;
    width: 40px;
    border-bottom: 1px solid #fff;
}
aside.floating-icons li:last-child {
    border-bottom: none;
}
aside.floating-icons li a {
    display: block;
    color: #fff;
    text-align: center;
    vertical-align: center;
}
.floating-icons a {
    padding: 20px;
}
.glyphicon-off {
    margin-right: 23px;
}
.left {
    float: left;
    background-image: url('mira.png');
    background-size: cover;
    margin-left: 10px;
}
.left2 {
    float: left;
    background-image: url('mira.png');
    background-size: cover;
    margin-left: 22px;
    margin-top: 20px;
}
.right {
    float: right;
    margin-top: 13px;
    background-image: url('');
    background-size: cover;
    margin-right: 14px;
}
@media screen and (max-width: 480px) and (min-width: 320px) {
    .chat_window {
        bottom: 0px;
        position: fixed;
        width: 520px;
        max-width: 383px;
        height: 398px;
        border-radius: 10px;
        background-color: #fff;
        left: 84%;
        top: -4%;
        transform: translateX(50%) translateY(-50%);
        background-color: rgba(0, 0, 0, 0.68);
        margin-top: 476px;
        z-index: 1;
    }
}
.badge-notify {
    background: #ef4048;
    position: relative;
    top: -60px;
    left: 220px;
}
.glyphicon-remove {
    position: relative !important;
    top: 5px !important;
    right: 15px !important;
    font-size: 14px !important;
}
  .bgstyle
{
background:#EFEFEF;
width:100%;
padding: 10px;
padding-bottom: 5px;
}
.odetails
{
padding-bottom:15px;
}

  @media screen and (width:320px)
  {
  #content-area
  {
  margin-bottom:0px !important;
  margin-top:-50px !important;
  }
  }
  ul li {
    margin-top: 4px;
}
   .nav > li.active{
    background-color:#E2E1DD;
	border-radius:5px !important;
}
a {
  color: #a6a197;
}
table
{
font-size:12px;
}
.btn-primary
{
color:#71273D !important;
}
label, body ,a
{
color:#4D442E !important;
}
.order-items td
{
color:#4D442E !important
}
.order-items th{
font-weight:bold !important;
}
.order-items tr:nth-child(even) {
    background-color:#F3F3F3;
}
.order-items tr:hover
{
background-color:none !important;
}
.panel-body {max-height:400px;overflow:scroll;}
.panel-scroll {max-height:400px;overflow:scroll;} 

.pagination{
float:right;
}
.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {
    background-color: #E2E1DD !important;
    border-color: #E2E1DD !important;
    color: #4D442E !important;
    cursor: default;
    z-index: 3;
}
.table1
{
overflow:auto;
}
</style>		 	 
    </head>
    <body ng-app="myApp">
       <header id="header" role="banner" ng-hide="fullscreen">
	    <!-- Site name -->
	    <h6 id="site-name">
	   	 <div class="col-sm-12" id="header1">
		<div class="col-sm-3">
		<!-- <img src="images/interface.png"> -->
		</div>
	   	</h6>
	    <!-- Navigation menus -->
		<div id="navtabs">
	    <nav id="header-nav">
	
<ul class="icon-nav" id="primary-nav">

 
  
  
  
<li class="nav-item" id="nav-item-about">
	<img src="/images/account.png" />
    <a href="#">My Account</a>
  </li>
  
  <li class="nav-item" id="nav-item-about">
  	<img  src="/images/logout1.png" />
    <a href="#/logout">Logout</a>
  </li>
  
</ul>
<!-- Toolbox nav -->

<!-- Secondary navigation -->
<!--      <section id="secondary-nav">
        <h1 class="page-title" id="page-title">
          Register User
        </h1>
        <div class="primary-tools">
        </div>
        <div class="secondary-tools">
                    <a class="cta secondary" href="/US/en-US/logonpage">Already have an account? Sign in.
          <span class="icon">→</span>
          </a>
        </div>
      </section>-->
	<!-- Tertiary navigation -->
      
		</nav>
		</div>
		
	</header>
	<hr ng-hide="fullscreen">
	<!-- render views -->
	<div class="col-sm-12" ng-hide="fullscreen">

</div>
	<div ng-view>
	</div>
	
	<div id="container" style="height: 600px;"></div>
  <div id="mir-img" style="position: fixed; bottom: 6px; right: 30px;" ng-hide="fullscreen">
      <span class="toooltip mira-img" style="padding:0px 0px 42px 0px;">
       <img src="mira-overlay1.png"  class="img-circle img-responsive mira-img">
       <span id="notify" class="badge badge-notify">3</span>
      </span>
      </img>
      </span>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog" ng-hide="fullscreen">
      <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="heavy">PERL can help! Chat now </h5>
              </div>
              <div class="modal-body">
                  <p class="methodText">
                      <strong> Chat with her today!</strong>
                  </p>
                  <br>
                  <form data-toggle="validator" role="form" action="#" method="post">
                      <div class="form-group">
                          <label for="email">Name</label>
                          <input type="email" class="form-control" id="name" placeholder="Enter Name">
                      </div>
                      <div class="form-group">
                          <label for="email">Designation</label>
                          <input type="email" class="form-control" id="designation" placeholder="Enter designation">
                      </div>
                      <div class="form-group">
                          <label for="email">Organization</label>
                          <input type="email" class="form-control" id="organization" placeholder="Enter organization">
                      </div>
                      <div class="form-group" class='control-label'>
                          <label for="email">Email</label>
                          <input type="email" class="form-control" id="email" placeholder="Enter email" onblur='gt()'>
                          <div id='mom'></div>
                      </div>
                      <br>
                      <button type="button" class="btn btn-success btn-xs col-sm-12" id="startchatm" data-dismiss="modal" disabled>
                      <h4 style="font-size:16px; margin-left:-12px"><strong>Speak with PEARL</strong></h4>
                   </button>
                  </form>
              </div>
          </div>
      </div>
  </div>
  <!--closing of fourm tag -->
  <div class="chat" id="chat-bot" style="display:none" ng-controller="chatbotController">
      <div class="chat-title" id="chat-head">
          <figure class="avatar"> <img src="mira-overlay1.png" class="img1 pull-left" /> </figure>
          <h4 style="font-size:19px;">
              <strong>Carmen</strong>
              <span class="glyphicon glyphicon-remove  pull-right" id="cross"></span>
      </div>
      <div  class="messages" id="chat-body" style="background-color:white;overflow-y:auto;">
          <div style="background-color:#f0f0ee;padding-bottom:10px;" ng-repeat="mess in chatbotmessages track by $index" ng-class="{'message message-personal':mess.personal==true,'message new':mess.new==true}" ><figure class="avatar"><img ng-src="{{mess.personal?'images/account.png':'images/mira1.png'}}" class="img1" /></figure>{{mess.value}}</div>
      </div>
      <div class="message-box">
          <input type="text"  class="message-input" ng-model="inputText" placeholder="Type message" ng-submit="submitMessage()"></input>
          <button  class="message-submit"  ng-click="submitMessage()" >Send</button>
      </div>
      <div class="hidden" id="printdetails" >
          <a href="href" id="download" ng-click="download()"> </a>
        </div>
  </div>
  </div>

	
	
	<footer id="footer" role="contentinfo" ng-hide="fullscreen">
  <div class="">
    <!-- Primary footer content -->
    <div id="footer-primary">
      <nav id="footer-nav">
        <ul>
          <li><a href="#" class="blog" target="_blank">Blog</a></li>
          <li><a class="mission-zero" href="#" target="_blank">Mission Zero</a></li>
          <li><a href="#" class="careers" target="_blank">Careers</a></li>
                                 		  
            <li>
	           <div class="genericESpot"><div class="caption" style="display:none">[Feedback_Form_ESpot]</div>

</div>

            </li>
            <!-- e-spot for community guidelines -->
            <li>
            <div class="genericESpot"><div class="caption" style="display:none">[Community_GuideLines_Old_ESpot]</div>
<div align="center">
<a style="color : #A6A197; font-weight:bold; opacity:1" href="#" target="_blank">Community Guidelines</a>
</div>
<script type="text/javascript">     var _mfq = _mfq || [];     (function() {         var mf = document.createElement("script");         mf.type = "text/javascript"; mf.async = true;         mf.src = "#";         document.getElementsByTagName("head")[0].appendChild(mf);     })(); </script>
</div>

         </li>
        </ul>
      </nav>
      <p id="footer-copyright">
      	<!-- &copy; 2017 Interface, Inc. All rights reserved.
      	<a href="/US/en-US/legaldisclaimer">Legal Disclaimer</a>
      	<a href="/US/en-US/privacy-policy">Privacy Policy</a>
      	<br>Interface, Inc. is the world's largest manufacturer of commercial carpet tile and is
		setting the pace for development of modular carpet using materials and processes 
		that take less from the environment.<br>No part of this website may be reproduced or 
		otherwise used without the express written consent of Interface, Inc. -->
     </p>
    </div>
    <!-- Secondary footer content -->
    <div id="footer-secondary">
      <ul id="footer-social-links">

<div align="right">
				<!-- Connect with Interface -->
			</div>
        <!-- <li><a class="facebook" href="https://facebook.com/Interface" target="_blank"><i style="color:black" class="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li><li><a class="twitter" href="https://twitter.com/InterfaceInc" target="_blank"><i style="color:black" class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li><li><a class="youtube" href="https://www.youtube.com/c/interface" target="_blank"><i style="color:black" class="fa fa-youtube fa-2x" aria-hidden="true"></i></a></li><li><a class="linkedin" href="https://www.linkedin.com/company/interface" target="_blank"><i style="color:black" class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></li>
           <div align="right"> -->
             
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  
           </div>
      	
      </ul>
    </div>
  </div>
</footer>

<script>
function gt() {

    if (document.getElementById('email').value == '' || undefined || null) {
        document.getElementById('mom').innerHTML = " don't leave it empty";
        $("button").prop("disabled", true);
    }
    else {
        document.getElementById('mom').innerHTML = "";
        $("button").prop("disabled", false);
    }
};

var page1 = '';
document.getElementById('container').innerHTML = '<object data="" type="text/html" width=100% height=650px><embed src="' + page1 + '" type="text/html" /></object>';


var msg2;

var message;

var messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).on('load', function() {
    console.log("loading started");
    $('#messages').mCustomScrollbar();
    
    
    setTimeout(function() {
        //fakeMessage1();
    }, 100);
});

function updateScrollbar() {

    $('#messages').mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 5,
        timeout: 0
    });
}

function setDate() {
    d = new Date()
    if (m != d.getMinutes()) {
        m = d.getMinutes();
        $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    }
}

function insertMessage1(msg) {

$('#Self-Service-App, #amer_system, #unix_system, #LA_Account, #vdi_system').on('click', function() {
 $('#Self-Service-App').attr("disabled", true);
$('#amer_system').attr("disabled", true);
 $('#unix_system').attr("disabled", true);
$('#LA_Account').attr("disabled", true);
$('#vdi_system').attr("disabled", true);
});

    if ($.trim(msg) == '') {
        return false;
    }
    //alert('raj'+msg);
    $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    $('.message-input').val(null);
    //updateScrollbar();
    setTimeout(function() {

    }, 1000 + (Math.random() * 20) * 100);
    $("#chat-body").animate({scrollTop:1500},0);
}

function insertMessage() {

    email = document.getElementById("email").value;

    msg = $('.message-input').val();

    //socket.emit('chat message', msg);

    if ($.trim(msg) == '') {
      setTimeout(function() {
      $("#chat-body").animate({scrollTop:1500},0);

    }, 100 + (Math.random() * 20) * 100);
    updateScrollbar();
        return false;
    }
    //alert("insert "+msg);
    setDate();
    $('.message-submit').click();
    updateScrollbar();

    setTimeout(function() {
      $("#chat-body").animate({scrollTop:1500},0);

    }, 100 + (Math.random() * 20) * 100);
    updateScrollbar();

    $("#chat-body").animate({scrollTop:1500},0);

}

$('.message-submit').click(function() {
    ////alert('messz sub');
    //insertMessage();
    $("#chat-body").animate({scrollTop:1500},0);
}); 


$(window).on('keydown', function(e) {
    if (e.which == 13) {
        ////alert('messz pushed');
        insertMessage();
        $("#chat-body").animate({scrollTop:1500},0);
        return false;
    }
})



function Rfunction(obj) {
alert('Rajesh'+obj);
$(this).parents('.button').remove();
/*<!-- <!--  $('#Self-Service-App, #amer_system, #unix_system, #LA_Account, #vdi_system').on('click', function() { -->
 <!-- $('#Self-Service-App').attr("disabled", true); -->
<!-- $('#amer_system').attr("disabled", true); -->
 <!-- $('#unix_system').attr("disabled", true); -->
<!-- $('#LA_Account').attr("disabled", true); -->
<!-- $('#vdi_system').attr("disabled", true); -->
<!-- }); --> -->*/
$(window).on('beforeunload', function () {
        $("input[type=submit], input[type=button]").prop("disabled", "disabled");
    });
    insertMessage1(obj);
   

$(this).parents('.button').remove();

//document.getElementById(obj).style.display = "none";
    document.getElementById('Device Lost').remove();

    document.getElementById('Order Device').remove();

    document.getElementById('Swap Device').remove();

    document.getElementById('Report Device').remove();

}


function Rfunction1(obj) {
    insertMessage1(obj);
 $(this).parents('.button').remove();
    // alert('Rajesh1'+obj);


    document.getElementById('iPhone').remove();

    document.getElementById('Surface').remove();

    //document.getElementById('MacBookPro').remove();

}

/*socket.on('cf', function(response) {

    if (response.result.fulfillment.messages[1] != null || undefined) {
        var ty;
        var k = '';
        if (response.result.fulfillment.messages[1].type == 4) {
            for (i = 0; i < response.result.fulfillment.messages.length; i++) {

                if (response.result.fulfillment.messages[i].type == 4) {

                    ty = response.result.fulfillment.messages[i].payload.messages[1].buttons;
                    //alert('rajesh'+ty);
                }

                else {
                    //alert(JSON.stringify(response));
                    j = response.result.fulfillment.messages[i].speech;
                    k = k + ' ' + j;
                }
            }

            var len = ty.length;

            var j = response.result.fulfillment.speech;

            for (i = 0; i < len; i++) {
                var k1 = '</br>' + ty[i].payload;
                k = k + k1;
            }

            fakeMessage(k);

        }
        else {
            var count = 0;
            for (i = 0; i < response.result.fulfillment.messages.length - 1; i++) {
                fakeMessage(response.result.fulfillment.messages[0].speech);
                //$('.chat').append('<div class="bubble you">'+response.result.fulfillment.messages[0].speech+'</div>'); 
                //$('<div class="message new"><figure class="avatar"><img src="mira.png" class="img1" /></figure>' + response.result.fulfillment.messages[0].speech + '</div>').appendTo($('.mCSB_container')).addClass('new');
                count++;

                console.log(count);
                if (count === 1) {
                    console.log("count");
                    setTimeout(function() {
                        console.log("samapp")
                        fakeMessage(response.result.fulfillment.messages[1].speech);
                    }, 5000);
                }
                else {
                    console.log(count)
                }
            }

        }


    } //ending of if braces

    else {
        fakeMessage(response.result.fulfillment.speech);
    }

});*/

function fakeMessage(hji) {
    var hji = hji;
    if ($('.message-input').val() != '') {
        return false;
    }

    $('<div class="message loading new"><figure class="avatar"><img src="mira.png" class="img1" /></figure><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();

    setTimeout(function() {
        $('.message.loading').remove();
        $('<div class="message new"><figure class="avatar"><img src="mira.png" class="img1" /></figure>' + hji + '</div>').appendTo($('.mCSB_container')).addClass('new');
        setDate();
        updateScrollbar();
        $("#chat-body").scrollTop(1500);
        i++;
    }, 1000 + (Math.random() * 20) * 100);
    updateScrollbar();
}
</script>
<script>

var voteB =  $(".Self-Service-App, .amer_system, .unix_system, .LA_Account, .vdi_system");
$(voteB).on('click', function() {
 $(voteB).attr('disabled', 'disabled','disabled', 'disabled','disabled');
});

$("#notify").hide(0);
$("#mir-img").click(function() {

})

$("#notify").hide(0);
$("#cross").click(function() {
    $("#mir-img").show(0);
    $("#live-chat").hide(0);
})

$("#notify").hide(0);
$("#chat-head").click(function() {
    $("#chat-bot").hide(0);
    $("#chat-head").show(0);
    $("#mir-img").show(0);
})

$("#chat-head").click(function() {

    $("#chat-bot").hide(0);
    $("#chat-head").show(0);
    $("#mir-img").show(0);
    $("#notify").show(0);

})
</script>
 
    </body>
    
</html>
