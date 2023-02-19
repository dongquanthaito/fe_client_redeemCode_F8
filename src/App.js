import { useEffect } from 'react'
import './assets/styles/HomePage.css'
import StartAnimation from './components/StarAnimation'
import Swal from 'sweetalert2'
import { findCode } from './services/api.service'
import Congrat from './components/congrat/Congrat'
import { findCodeCtrl } from './controllers/api.controller'
import sunrise from './assets/images/sunrise.png'
import logo from './assets/images/logoSH.png'
import text from './assets/images/text.png'
import character from './assets/images/character.png'
import inputCont from './assets/images/inputCont.png'

const HomePage = () => {
    useEffect(() => {

        document.getElementById('submit-btn').addEventListener('click', () => {
            let codeID = document.getElementById('code-id').value
            if(codeID == "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Thất bại!',
                    text: 'Vui lòng nhập đầy đủ thông tin!',
                    footer: '<a href="https://shbet5.com/" target="_blank">SHBET - THẾ GIỚI CASINO TRONG TAY BẠN</a>'
                })
            } else {
                if(document.getElementById('submit-btn').getAttribute('click-id') == 'false') {
                    document.getElementById('submit-btn').setAttribute('click-id', 'true')
                    findCodeCtrl(codeID)
                }
            }
        })

      
    })

    useEffect(() => {
        var x = window.matchMedia("(max-width: 750px)");
        document.getElementById('promo-detail-btn').addEventListener('click', () => {
            if (x.matches) {
                Swal.fire({
                    html: `
                    <p align="center" class="p" style="margin-top:5.0000pt; margin-right:0.0000pt; margin-bottom:5.0000pt; margin-left:0.0000pt; text-align:center; margin:5pt 0pt"><span style="font-family:Calibri"><b><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="font-weight:bold">NHẬP CODE NHẬN THƯỞNG</span></span></span></b></span></p>

                    <table class="MsoTableGrid" style="border-collapse:collapse; border:1.0000pt solid #f1f1f1; text-align:justify; font-family:&quot;Times New Roman&quot;; font-size:10pt">
                        <tbody>
                            <tr>
                                <td style="border-bottom:1.0000pt solid #f1f1f1; background:#f1f1f1; width:426.1000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #f1f1f1; border-right:1.0000pt solid #f1f1f1; border-top:1.0000pt solid #f1f1f1" valign="top" width="852">
                                <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:11.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#333333"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">M&atilde; khuyến m&atilde;i: </span></span></span></span></span></span></span><b><span style="font-size:11.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ff0000"><span style="font-weight:bold">SH8888</span></span></span></span></b></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="border-bottom:1.0000pt solid #f1f1f1; background:#f1f1f1; width:426.1000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #f1f1f1; border-right:1.0000pt solid #f1f1f1; border-top:none" valign="top" width="852">
                                <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:11.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#333333"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Đối tượng: To&agrave;n bộ th&agrave;nh vi&ecirc;n SHBET</span></span></span></span></span></span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="border-bottom:1.0000pt solid #f1f1f1; background:#f1f1f1; width:426.1000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #f1f1f1; border-right:1.0000pt solid #f1f1f1; border-top:none" valign="top" width="852">
                                <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:11.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#333333"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Thời gian bắt đầu: </span></span></span></span></span></span></span><span style="font-size:11.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#333333"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">00:00:00 13</span></span></span></span></span></span><span style="font-size:11.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#333333"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">/02</span></span></span></span></span></span><span style="font-size:11.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#333333"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">/2023 (GMT-4</span></span></span></span></span></span><span style="font-size:11.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#333333"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">)</span></span></span></span></span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="border-bottom:1.0000pt solid #f1f1f1; background:#f1f1f1; width:426.1000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #f1f1f1; border-right:1.0000pt solid #f1f1f1; border-top:none" valign="top" width="852">
                                <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:11.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#333333"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Thời gian kết th&uacute;c: </span></span></span></span></span></span></span><span style="font-size:11.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#333333"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Cho đến khi c&oacute; th&ocirc;ng b&aacute;o ch&iacute;nh thức</span></span></span></span></span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="border-bottom:1.0000pt solid #f1f1f1; background:#f1f1f1; width:426.1000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #f1f1f1; border-right:1.0000pt solid #f1f1f1; border-top:none" valign="top" width="852">
                                <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:11.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ed7d31"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Ch&uacute; &yacute;: 1 điểm = 1000 VND</span></span></span></span></span></span></span></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><b><span style="font-size:12.0000pt"><span style="font-family:SimSun"><span style="color:#2e75b5"><span style="letter-spacing:0.0000pt"><span style="font-weight:bold"><span style="text-transform:none"><span style="font-style:normal"><font face="Times New Roman">SHBET.COM</font></span></span></span></span></span></span></span></b></span></p>

                    <p align="justify" class="p" style="margin-top:5.0000pt; margin-right:0.0000pt; margin-bottom:5.0000pt; margin-left:0.0000pt; text-align:justify; margin:5pt 0pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal"><font face="Times New Roman">※</font></span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">&nbsp;Nội dung sự kiện:</span></span></span></span></span></span>&nbsp;<span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Tất cả th&agrave;nh vi&ecirc;n</span></span></span></span></span></span>&nbsp;<span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">tham gia tại SHBET khi nhận được code thưởng từ những chương tr&igrave;nh hoạt động sự kiện do SHBET ph&aacute;t h&agrave;nh </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">ho&agrave;n to&agrave;n miễn ph&iacute; </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">mỗi một m&atilde; code sẽ nhận được tiền thưởng tương ứng. Chi tiết </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">tham khảo bảng</span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">&nbsp;sau:</span></span></span></span></span></span></span></span></p>

                    <p align="justify" class="p" style="margin-top:5.0000pt; margin-right:0.0000pt; margin-bottom:5.0000pt; margin-left:0.0000pt; text-align:justify; margin:5pt 0pt"><img width="100%" src="https://haon-jp.cdn-dysxb.com/system-assets/Web.Portal/Image/Upload/Promotion/3b805efc365f4e42a08db75ea2494d82.png" width="1078" /></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal"><font face="Times New Roman">※</font></span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Đ</span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">iều kiện </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">&amp; điều khoản khuyến m&atilde;i</span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">:</span></span></span></span></span></span></span></span></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">+ Mỗi th&agrave;nh vi&ecirc;n chỉ được tham gia nhập code nhận thưởng </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:SimSun"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal"><font face="Times New Roman">0</font></span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">1 lần duy nhất</span></span></span></span></span></span></span></span></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">+ Code </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">được </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">ph&aacute;t </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">ho&agrave;n to&agrave;n</span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">&nbsp;miễn ph&iacute; từ những chương tr&igrave;nh sự kiện </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">do SHBET tổ chức tại c&aacute;c buổi </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">live stream hoặc được ph&aacute;t h&agrave;nh th&ocirc;ng qua đại l&yacute; hợp t&aacute;c v&agrave; </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">kh&ocirc;ng được ph&eacute;p mua b&aacute;n </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">dưới mọi h&igrave;nh thức </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">(c&oacute; thể</span></span></span></span></span></span>&nbsp;<span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">tặng bạn b&egrave;)</span></span></span></span></span></span></span></span></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">+ </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Mỗi một code c&oacute; thời hạn nhận thưởng trong v&ograve;ng 15 ng&agrave;y khi code h&ecirc;t hạn chưa được nhận thưởng xem như th&agrave;nh vi&ecirc;n từ chối nhận thưởng từ chương tr&igrave;nh v&agrave; sẽ được hủy bỏ.</span></span></span></span></span></span></span></span></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">+ Đối với code Bạc, V&agrave;ng sẽ được hệ thống chọn lọc từ ngẫu nhi&ecirc;n từ hệ thống v&agrave; sẽ được ph&aacute;t thưởng v&agrave;o h&ograve;m thư của th&agrave;nh vi&ecirc;n, h&atilde;y lu&ocirc;n ch&uacute; &yacute; đến h&ograve;m thư của bạn.</span></span></span></span></span></span></span></span></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">+ Nếu kiểm tra ph&aacute;t hiện bất kỳ một th&agrave;nh vi&ecirc;n n&agrave;o c&oacute; h&agrave;nh vi lạm dụng chương tr&igrave;nh khuyến m&atilde;i để trục lợi hệ thống sẽ đ&oacute;ng băng t&agrave;i khoản vĩnh vi&ecirc;n m&agrave; kh&ocirc;ng cần th&ocirc;ng b&aacute;o trước.</span></span></span></span></span></span></span></span></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">+ </span></span></span></span></span></span><span style="font-size:12.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Đăng k&yacute; tham gia khuyến m&atilde;i n&agrave;y đồng nghĩa với việc bạn đ&atilde; đồng &yacute; với &quot;Quy tắc v&agrave; Điều khoản khuyến m&atilde;i&quot;</span></span></span></span></span></span></span></span></p>

    
                    `,
                    position: 'center',
                    showClass: {
                    popup: `
                        animate__animated
                        animate__fadeInDown
                        animate__faster
                    `
                    },
                    hideClass: {
                    popup: `
                        animate__animated
                        animate__fadeOutUp
                        animate__faster
                    `
                    },
                    grow: 'row',
                    width: 1200,
                    showConfirmButton: false,
                    showCloseButton: true
                })
            } else {
                Swal.fire({
                    html: `
                    <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><b><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="font-weight:bold">NHẬP CODE NHẬN THƯỞNG</span></span></span></b></span></p>
                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt">&nbsp;</p>

                    <div class='header-popup' align="justify" style="text-align: justify; margin: 0pt 0pt 0.0001pt;">
                        <span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal"><font face="Times New Roman">※ M&atilde;: </font></span></span></span></span></span></span><b><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ff0000"><span style="font-weight:bold">SH8888</span></span></span></span></b><b> </b></span></span>
                        <span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal"><font face="Times New Roman">※ </font></span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#333333"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Đối tượng: To&agrave;n bộ th&agrave;nh vi&ecirc;n SHBET</span></span></span></span></span></span> </span></span>
                        <span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal"><font face="Times New Roman">※ Thời gian bắt đầu: 00:00:00 13</font></span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">/02</span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">/2023 (GMT</span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">-4</span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">)</span></span></span></span></span></span> </span></span>
                        <span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal"><font face="Times New Roman">※ Thời gian kết th&uacute;c: </font></span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Cho đến khi c&oacute; th&ocirc;ng b&aacute;o ch&iacute;nh thức</span></span></span></span></span></span> </span></span>
                        <span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal"><font face="Times New Roman">※ </font></span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ff9900"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">CH&Uacute; &Yacute;: 1 điểm = 1,000 VND</span></span></span></span></span></span></span></span>
                    </div>

                    <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><b><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#2e75b5"><span style="letter-spacing:0.0000pt"><span style="font-weight:bold"><span style="text-transform:none"><span style="font-style:normal">SHBET.COM</span></span></span></span></span></span></span></b></span></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal"><font face="Times New Roman">※</font></span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">&nbsp;Nội dung sự kiện:</span></span></span></span></span></span>&nbsp;<span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Tất cả th&agrave;nh vi&ecirc;n</span></span></span></span></span></span>&nbsp;<span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">tham gia tại SHBET khi nhận được code thưởng từ những chương tr&igrave;nh hoạt động sự kiện do SHBET ph&aacute;t h&agrave;nh </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">ho&agrave;n to&agrave;n miễn ph&iacute; </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">mỗi một m&atilde; code sẽ nhận được tiền thưởng tương ứng. Chi tiết </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">tham khảo bảng</span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">&nbsp;sau:</span></span></span></span></span></span></span></span></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt">&nbsp;</p>

                    <table align="center" class="MsoTableGrid" style="border-collapse: collapse; border: 1pt solid rgb(255, 255, 255); text-align: justify; font-family: &quot;Times New Roman&quot;; font-size: 10pt; height: 100%; width: 100%;">
                        <tbody>
                            <tr>
                                <td style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:116.2000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:1.0000pt solid #ffffff" valign="center" width="232">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Loại code</span></span></span></span></span></span></span></p>
                                </td>
                                <td style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:106.5000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:1.0000pt solid #ffffff" valign="center" width="213">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Tiền thưởng</span></span></span></span></span></span></span></p>
                                </td>
                                <td style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:106.5500pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:1.0000pt solid #ffffff" valign="center" width="213">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">V&ograve;ng cược</span></span></span></span></span></span></span></p>
                                </td>
                                <td style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:116.4000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:1.0000pt solid #ffffff" valign="center" width="232">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Hạn sử dụng</span></span></span></span></span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:116.2000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:none" valign="center" width="232">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Thường</span></span></span></span></span></span></span></p>
                                </td>
                                <td style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:106.5000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:none" valign="center" width="213">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">58</span></span></span></span></span></span></span></p>
                                </td>
                                <td rowspan="2" style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:106.5500pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:none" valign="center" width="213">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">3 v&ograve;ng</span></span></span></span></span></span></span></p>
                                </td>
                                <td rowspan="2" style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:116.4000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:none" valign="center" width="232">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">15</span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">&nbsp;ng&agrave;y</span></span></span></span></span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:116.2000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:none" valign="center" width="232">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Đồng</span></span></span></span></span></span></span></p>
                                </td>
                                <td style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:106.5000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:none" valign="center" width="213">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">188</span></span></span></span></span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:116.2000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:none" valign="center" width="232">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Bạc</span></span></span></span></span></span></span></p>
                                </td>
                                <td style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:106.5000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:none" valign="center" width="213">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">888</span></span></span></span></span></span></span></p>
                                </td>
                                <td rowspan="2" style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:106.5500pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:none" valign="center" width="213">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">1 v&ograve;ng</span></span></span></span></span></span></span></p>
                                </td>
                                <td rowspan="2" style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:116.4000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:none" valign="center" width="232">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Chưa ph&aacute;t h&agrave;nh</span></span></span></span></span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:116.2000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:none" valign="center" width="232">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">V&agrave;ng</span></span></span></span></span></span></span></p>
                                </td>
                                <td style="border-bottom:1.0000pt solid #ffffff; background:#00b0f0; width:106.5000pt; padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ; border-left:1.0000pt solid #ffffff; border-right:1.0000pt solid #ffffff; border-top:none" valign="center" width="213">
                                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#ffffff"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">8888</span></span></span></span></span></span></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt">&nbsp;</p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt">&nbsp;</p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal"><font face="Times New Roman">※</font></span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Đ</span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">iều kiện </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">&amp; điều khoản khuyến m&atilde;i</span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">:</span></span></span></span></span></span></span></span></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">+ Mỗi th&agrave;nh vi&ecirc;n chỉ được tham gia nhập code nhận thưởng </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:SimSun"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal"><font face="Times New Roman">0</font></span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">1 lần duy nhất</span></span></span></span></span></span></span></span></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">+ Code </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">được </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">ph&aacute;t </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">ho&agrave;n to&agrave;n</span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">&nbsp;miễn ph&iacute; từ những chương tr&igrave;nh sự kiện </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">do SHBET tổ chức tại c&aacute;c buổi </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">live stream hoặc được ph&aacute;t h&agrave;nh th&ocirc;ng qua đại l&yacute; hợp t&aacute;c v&agrave; </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">kh&ocirc;ng được ph&eacute;p mua b&aacute;n </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">dưới mọi h&igrave;nh thức </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">(c&oacute; thể</span></span></span></span></span></span>&nbsp;<span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">tặng bạn b&egrave;)</span></span></span></span></span></span></span></span></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">+ </span></span></span></span></span></span><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">Mỗi một code c&oacute; thời hạn nhận thưởng trong v&ograve;ng 15 ng&agrave;y khi code h&ecirc;t hạn chưa được nhận thưởng xem như th&agrave;nh vi&ecirc;n từ chối nhận thưởng từ chương tr&igrave;nh v&agrave; sẽ được hủy bỏ.</span></span></span></span></span></span></span></span></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">+ Đối với code Bạc, V&agrave;ng sẽ được hệ thống chọn lọc từ ngẫu nhi&ecirc;n từ hệ thống v&agrave; sẽ được ph&aacute;t thưởng v&agrave;o h&ograve;m thư của th&agrave;nh vi&ecirc;n, h&atilde;y lu&ocirc;n ch&uacute; &yacute; đến h&ograve;m thư của bạn.</span></span></span></span></span></span></span></span></p>

                    <p align="justify" style="text-align:justify; margin:0pt 0pt 0.0001pt"><span style="text-justify:inter-ideograph"><span style="font-family:Calibri"><span style="font-size:16.0000pt"><span style="font-family:'Times New Roman'"><span style="color:#000000"><span style="letter-spacing:0.0000pt"><span style="text-transform:none"><span style="font-style:normal">+ Nếu kiểm tra ph&aacute;t hiện bất kỳ một th&agrave;nh vi&ecirc;n n&agrave;o c&oacute; h&agrave;nh vi lạm dụng chương tr&igrave;nh khuyến m&atilde;i để trục lợi hệ thống sẽ đ&oacute;ng băng t&agrave;i khoản vĩnh vi&ecirc;n m&agrave; kh&ocirc;ng cần th&ocirc;ng b&aacute;o trước.</span></span></span></span></span></span></span></span></p>

    
                    `,
                    position: 'center',
                    showClass: {
                    popup: `
                        animate__animated
                        animate__fadeInDown
                        animate__faster
                    `
                    },
                    hideClass: {
                    popup: `
                        animate__animated
                        animate__fadeOutUp
                        animate__faster
                    `
                    },
                    grow: 'row',
                    width: 1200,
                    showConfirmButton: false,
                    showCloseButton: true
                })
            }
        })
    })
    return(
        <>
            <div id="home-page">
                <div className='warpper'>
                    <img src={logo} className='logo'></img>
                    <img src={text} className='text-img'></img>
                    <div className='input-cont'>
                        <div className='input-item-cont'>
                            <input id='code-id' type="text" placeholder='Mã khuyến mãi' autoComplete='off'></input>
                        </div>
                        <button id='submit-btn' click-id='false'>KIỂM TRA NGAY</button>
                        <p id='promo-detail-btn'>CHI TIẾT CHƯƠNG TRÌNH KHUYẾN MÃI</p>
                    </div>
                </div>
                <img src={character} className='character-pic'></img>
                <StartAnimation />
                <Congrat />
                <img src={sunrise} className='sunrise'></img>
            </div>
        </>
    )
}

export default HomePage