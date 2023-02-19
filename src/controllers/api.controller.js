import { addIPFP, addPoint, findCode, findMemo, fingerPrint, getMemberBO, getTimeGlobal, ipfpModel, updateCode } from "../services/api.service"
import Swal from 'sweetalert2'

export const findCodeCtrl = async (promo_code) => {
    Swal.fire({
        text: 'Đang kiểm tra ...',
        allowOutsideClick: false,
        width: 300,
        didOpen: () => {
            Swal.showLoading()
        }
    })
    let codeResult = await findCode('?promo_code='+ promo_code)
    if(codeResult) {
        document.getElementById('submit-btn').setAttribute('click-id', 'false')
    }
    let ipfpResult = await fingerPrint()
    let ipfpModelResult = await ipfpModel(ipfpResult.fp)

    if(ipfpModelResult.valid == false) { //Check FB
        Swal.fire({
            icon: 'warning',
            title: 'Quý khách đã nhận khuyến mãi này!',
            text: 'Xin quý khách vui lòng kiểm tra và thử lại.',
            footer: '<a href="https://live.shbet.win/" target="_blank">Chăm sóc khách hàng 24/7.</a>'
        })
    } else if(ipfpModelResult.valid == true){   //Check code
        if(codeResult.valid == false) {
            Swal.fire({
                icon: 'warning',
                title: 'Mã khuyến mãi không chính xác!',
                text: 'Xin quý khách vui lòng kiểm tra và thử lại.',
                footer: '<a href="https://live.shbet.win/" target="_blank">Chăm sóc khách hàng 24/7</a>'
            })
        } else if(codeResult.valid == true) {
            let timeGlobal = await getTimeGlobal()
            let timeStamp = new Date(timeGlobal.dateTime).getTime()
            let expTime = codeResult.detail[0].exp_code
    
            let point = codeResult.detail[0].point
            
            let date = ("0" + (new Date(expTime).getDate())).slice('-2')
            let month = ("0" + (new Date(expTime).getMonth() +1)).slice('-2')
            let year = new Date(expTime).getFullYear()
    
            let time = date + ' tháng ' + month + ', ' + year
    
            if((expTime - timeStamp) <= 0) {    //Kiểm tra hạn sử dụng CODE
                Swal.fire({
                    icon: 'warning',
                    title: 'Mã khuyến mãi đã hết hạn sử dụng!',
                    html: 
                    "<div class='modal-text-wrapper'>"+
                        "<div class='modal-text-cont'>"+
                            "<p class='modal-text'>Mã khuyến mãi: &nbsp;</p>" + "<p style='font-weight: 600'>" +promo_code+"</p>"+
                        "</div>"+
                        "<div class='modal-text-cont'>"+
                            "<p class='modal-text'>Điểm thưởng: &nbsp;</p>" + "<p style='font-weight: bold; color:#ec164c'>" +codeResult.detail[0].point+"&nbsp; điểm</p>"+
                        "</div>"+
                        "<div class='modal-text-cont'>"+
                            "<p class='modal-text'>Hạn sử dụng : &nbsp;</p>" + "<p style='font-weight: 600'>" +time+"</p>"+
                        "</div>" +
                    "</div>",
                    footer: '<a href="https://live.shbet.win/" target="_blank">Chăm sóc khách hàng 24/7</a>'
                })
            } else {    //Code còn hạn sử dụng
                if(codeResult.detail[0].user_used == 'non') {   //Check sử dụng
                    Swal.fire({
                        icon: 'success',
                        title: 'Mã khuyến mãi chưa sử dụng!',
                        confirmButtonText: 'Xác Nhận',
                        cancelButtonText: "Hủy",
                        html: 
                        "<div class='modal-text-wrapper'>"+
                            "<div class='modal-text-cont'>"+
                                "<p class='modal-text'>Mã khuyến mãi: &nbsp;</p>" + "<p style='font-weight: 600'>" +promo_code+"</p>"+
                            "</div>"+
                            "<div class='modal-text-cont'>"+
                                "<p class='modal-text'>Điểm thưởng: &nbsp;</p>" + "<p style='font-weight: bold; color:#ec164c'>" +codeResult.detail[0].point+"&nbsp; điểm</p>"+
                            "</div>"+
                            "<div class='modal-text-cont'>"+
                                "<p class='modal-text'>Hạn sử dụng đến: &nbsp;</p>" + "<p style='font-weight: 600'>" +time+"</p>"+
                            "</div>" +
                        "</div>",
                        input: 'text',
                        inputLabel: 'Vui lòng nhập tên tài khoản để nhận thưởng',
                        showCancelButton: true,
                        inputValidator: async (playerID) => {
                            if (!playerID) {
                            return 'Vui lòng nhập tên tài khoản!'
                            } else {
                                Swal.fire({
                                    text: 'Đang cộng điểm ...',
                                    allowOutsideClick: false,
                                    width: 300,
                                    didOpen: () => {
                                        Swal.showLoading()
                                    }
                                })
                                let findPlayerID = await getMemberBO(playerID)  //Kiểm tra tài khoản trên BO
                                if(findPlayerID.valid == false) {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Thao tác thất bại !',
                                        text: 'Không tìm thấy thấy tài khoản hoặc tài khoản bị sai. Vui lòng thử lại.',
                                        footer: '<a href="https://live.shbet.win/" target="_blank">Chăm sóc khách hàng 24/7</a>'
                                    })
                                } else if(findPlayerID.valid == true) {
                                    //Kiểm tra trên BO đã nhận KM chưa
                                    let timePrev = (expTime - (86400000 * 30))
                                    let dateExp = ("0" + (new Date(timePrev).getDate())).slice('-2')
                                    let monthExp = ("0" + (new Date(timePrev).getMonth() +1)).slice('-2')
                                    let yearExp = new Date(timePrev).getFullYear()
                                    let timeBegin = yearExp + '/' + monthExp + '/' + dateExp
        
                                    let findMemoResult = await findMemo(playerID, timeBegin, "SH8888")
        
                                    if(findMemoResult.valid == true) { //Chưa nhận KM trên BO
        
                                        //Kiểm tra trên Database đã nhận KM chưa
                                        let findUserUsed = await findCode('?user_used=' + playerID)
                                        if(findUserUsed.valid == true) { //user đã nhận code
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Thao tác thất bại!',
                                                text: 'Tài khoản ' + '"' + playerID + '"' + ' đã nhận khuyến mãi SH8888 !',
                                                footer: '<a href="https://live.shbet.win/" target="_blank">Chăm sóc khách hàng 24/7</a>'
                                            })
                                        } else if(findUserUsed.valid == false) { //user chưa nhận code
                                            
                                            let addPointResult = await addPoint(playerID, point)    //Cộng điểm trên BO
                                            if(addPointResult == true) {
                                                let updateUserUsed = await updateCode(promo_code, playerID, timeStamp, ipfpResult.ip, ipfpResult.fp)
        
                                                if(updateUserUsed.status_code == 200) {
                                                    let addIPFPResul = await addIPFP(ipfpResult.ip, ipfpResult.fp)  //Add IP FP vào database

                                                    document.getElementsByClassName('congrat-id')[0].innerHTML = playerID
                                                    document.getElementsByClassName('congrat-score')[0].innerHTML = point
                                                    document.getElementsByClassName('congrat-wrapper')[0].classList.add('congrat-margin')

                                                    if(addIPFPResul.valid == true) {
                                                        const Toast = Swal.mixin({
                                                            toast: true,
                                                            position: 'top-end',
                                                            showConfirmButton: false,
                                                            timer: 3000,
                                                            timerProgressBar: true,
                                                        })
                                                        Toast.fire({
                                                        icon: 'success',
                                                        title: "Cộng điểm thành công"
                                                        })
                                                    }
                                                }
                                            }
                                        }
                                    } else if(findMemoResult.valid == false) { //Đã nhận KM
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Thao tác thất bại!',
                                            text: 'Tài khoản ' + '"' + playerID + '"' + ' đã nhận khuyến mãi SH8888 !',
                                            footer: '<a href="https://live.shbet.win/" target="_blank">Chăm sóc khách hàng 24/7</a>'
                                        })
                                    }
                                }
                            }
                        }
                        })
                } else {
                    if(!codeResult.detail[0].used_time) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Mã khuyến mãi đã được sử dụng!',
                            html: 
                            "<div class='modal-text-wrapper'>"+
                                "<div class='modal-text-cont'>"+
                                    "<p class='modal-text'>Mã khuyến mãi: &nbsp;</p>" + "<p style='font-weight: 600'>" +promo_code+"</p>"+
                                "</div>"+
                                "<div class='modal-text-cont'>"+
                                    "<p class='modal-text'>Điểm thưởng: &nbsp;</p>" + "<p style='font-weight: bold; color:#ec164c'>" +point+"&nbsp; điểm</p>"+
                                "</div>"+
                            "</div>",
                            footer: '<a href="https://live.shbet.win/" target="_blank">Chăm sóc khách hàng 24/7</a>'
                        })
                    } else {
                        let usedDate = ("0" + (new Date(codeResult.detail[0].used_time).getDate())).slice('-2')
                        let usedMonth = ("0" + (new Date(codeResult.detail[0].used_time).getMonth() +1)).slice('-2')
                        let usedYear = new Date(codeResult.detail[0].used_time).getFullYear()
                
                        let usedTime = usedDate + ' tháng ' + usedMonth + ', ' + usedYear
                        Swal.fire({
                            icon: 'error',
                            title: 'Mã khuyến mãi đã được sử dụng!',
                            html: 
                            "<div class='modal-text-wrapper'>"+
                                "<div class='modal-text-cont'>"+
                                    "<p class='modal-text'>Mã khuyến mãi: &nbsp;</p>" + "<p style='font-weight: 600'>" +promo_code+"</p>"+
                                "</div>"+
                                "<div class='modal-text-cont'>"+
                                    "<p class='modal-text'>Điểm thưởng: &nbsp;</p>" + "<p style='font-weight: bold; color:#ec164c'>" +point+"&nbsp; điểm</p>"+
                                "</div>"+
                                "<div class='modal-text-cont'>"+
                                    "<p class='modal-text'>Ngày sử dụng : &nbsp;</p>" + "<p style='font-weight: 600'>" + usedTime +"</p>"+
                                "</div>" +
                            "</div>",
                            footer: '<a href="https://live.shbet.win/" target="_blank">Chăm sóc khách hàng 24/7</a>'
                        })
                    }
                }
            }
        }
    }
}