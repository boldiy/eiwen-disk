const fs = require('fs')
const Path = require('path')

const generateIndex = async (ctx, next) => {
    let body = "";
    let path = './files/'
    if (ctx.request.url == '/') { ctx.request.url = '' }

    //获取URL中Get参数
    let params = ctx.request.url.replace('/?path=', '')

    //获取URL中Get参数
    if (params) {
        path = './files/' + decodeURI(params) + '/'
    }

    body += ` <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>okonoff文件系统</title>
            <style>
            body,ul,li{margin:0;padding:0;font-family:arial}
            .title{
                width:100%;
                border-bottom: solid 1px #ffffff;
                padding:12px;
                font-size:28px;
                background-color: #3885e1;
                color: white;
            }
            ul,li{list-style:none}
            .folder-list{
                width:100%;
                padding:12px;
                box-sizing:border-box;
            }
            .folder-list{
                li{
                display: flex;
                border: solid 1px #cecece;
                margin-top: -1px;
                align-items: center;
                padding: 6px 12px;
                a{
                    color:#3e3e3e;
                    text-decoration:none;
                }
                a:hover{
                    color:#4f9fff;
                }          
                .name{
                    display: flex;
                    width: 50%;
                    min-height: 30px;
                    align-items: center;
                    box-sizing: border-box;
                    padding-left:35px;
                }
                .name.folder{
                    background:url('./static/folder.png') 4px center no-repeat;
                    background-size:25px;
                }
                .name.apk{
                    background:url('./static/icon_apk.png') left center no-repeat;
                    background-size:35px;
                }
                .name.mp3{
                    background:url('./static/icon_mp3.png') left center no-repeat;
                    background-size:35px;
                }
                .name.jpg{
                    background:url('./static/icon_jpg.png') left center no-repeat;
                    background-size:35px;
                }
                .name.pdf{
                    background:url('./static/icon_pdf.png') left center no-repeat;
                    background-size:35px;
                }
                .name.rar{
                    background:url('./static/icon_rar.png') left center no-repeat;
                    background-size:35px;
                }
                .name.word{
                    background:url('./static/icon_word.png') left center no-repeat;
                    background-size:35px;
                }
                .name.txt{
                    background:url('./static/icon_txt.png') left center no-repeat;
                    background-size:35px;
                }
                .name.other{
                    background:url('./static/icon_other.png') left center no-repeat;
                    background-size:35px;
                }
                .size{
                    color:#3e3e3e;
                    width:25%;
                }
                .type{
                    color:#3e3e3e;
                    width:25%;
                }
                }
                li:nth-child(2n){
                height:auto;
                background-color:#f7f7f7
                }
            }    
            </style>
        </head>
        <body>
        <div class="title">柯耐弗在线网盘</div>
        `
    body += `<ul class="folder-list">`
    if (params) { body += `<li><a href='javascript:history.go(-1);' style="color:#4f9fff">返回上一级</a></li>` }
    body += `<li><div class="name">文件名</div><div class="size">文件大小</div><div class="type">文件类型</div></li>`

    //遍历文件列表
    fs.readdirSync(path).forEach(item => {
        const fileInfo = fs.statSync(path + item)

        //判断是否文件夹
        if (fileInfo.isDirectory()) {
            body += `
            <li>
            <div class="name folder"><a href="?path=${item}">${item}</a></div>
            <div class="size">${parseFloat(fileInfo.size / 1024).toFixed(2)}KB</div>
            <div class="type">文件夹</div>
            </li>`
        }
        else {
            //普通文件
            const ext = Path.extname(path + item)
            let className = 'other'
            if (ext == '.txt') { className = 'txt' }
            if (ext == '.jpg') { className = 'jpg' }
            if (ext == '.apk') { className = 'apk' }
            if (ext == '.pdf') { className = 'pdf' }
            if (ext == '.rar' || ext == '.zip') { className = 'rar' }
            body += `
            <li>
            <div class="name ${className}"><a href="${path + item}" target="_blank">${item}</a></div>
            <div class="size">${parseFloat(fileInfo.size / 1024).toFixed(2)}KB</div>
            <div class="type">文件</div>
            </li>`
        }
    })
    body += "</ul>"
    body += `</body>
  </html>`

    ctx.body = body;
    await next()
}

module.exports = { generateIndex }