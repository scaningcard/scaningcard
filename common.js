(function() {
    alert('start');
    wScaleThreshold = 0.01;
    hScaleThreshold = 0.01;
    // console.clear();
    // setInterval(function(){
    //     iframe.contentWindow.console.clear();
    // },1000);
    // console.log = function(){};

    custnum.onclick = function() {
        iframe.contentWindow.document.querySelector('iframe').contentWindow.txtIdentify.disabled = false;
        iframe.contentWindow.document.querySelector('iframe').contentWindow.flagDate = true;
    };
    document.querySelector('body').addEventListener('click', function(e) {
        if (e.target.className == 'window_bg') {
            $('#camera iframe').each(function(index, obj) {
                $(obj.contentWindow.document)
                    .find('#file')
                    .show();
                obj.contentWindow.hasOperAuth = function() {
                    return true;
                };
                obj.contentWindow.flagidentitypicdoublestaff = 'N';
                var ratio = GetRandomNum(parseFloat(obj.contentWindow.confidenceLimit), 93);
                alert(ratio);
                obj.contentWindow.verifyLog.confidence = ratio;
            });
            $('#addrDialog iframe').each(function(index, obj) {
                // $(obj.contentWindow.document).find('#txtIdentify')[0].disabled = false;
                // $(obj.contentWindow.document).find('#txtIdentify')[0].value = $(obj.contentWindow.document).find('#txtIdentify').attr('infosafedata') || $(obj.contentWindow.document).find('#txtIdentify')[0].value;
                // $(obj.contentWindow.document).find('#custMailAddress')[0].value = $(obj.contentWindow.document).find('#custMailAddress').attr('infosafedata') || $(obj.contentWindow.document).find('#custMailAddress')[0].value;
                // $(obj.contentWindow.document).find('#mailAddr')[0].value = $(obj.contentWindow.document).find('#mailAddr').attr('infosafedata') || $(obj.contentWindow.document).find('#mailAddr')[0].value;
                // obj.contentWindow.InstInfoSafe.clearEncode = function () { };

                // PC获取证件姓名、证件地址、身份证号
                alert(1111);
                alert($(obj.contentWindow.document).find('#txtCustName').val());
                var rtnObj = JSON.parse($(obj.contentWindow.document).find('#txtCustName').val());
                alert(JSON.stringify(rtnObj));
                if (rtnObj.flag) {
                    global.isComputerIdCard = true;
                    getMainTop().isScanFlag = true;
                    $(obj.contentWindow.document).find('#txtCustName').val(rtnObj.name);
                    $(obj.contentWindow.document).find('#txtIdentify').val(rtnObj.cardNo);
                    if (rtnObj.address.indexOf('对面') > -1) {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 1) == '旁') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 2) == '旁边') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 2) == '附近') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 2) == '路口') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 1) == '县') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 1) == '乡') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 1) == '区') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 1) == '镇') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 2) == '酒店') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 2) == '宾馆') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 2) == '公司') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 2) == '隔壁') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 3) == '交汇处') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 1) == '米') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 3) == '专卖店') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 1) == '箱') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 1) == '盒') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    } else if (rtnObj.address.substring(rtnObj.address.length - 1) == '上') {
                        rtnObj.address = rtnObj.address + '(证件地址)';
                    }

                    $(obj.contentWindow.document).find('#custMailAddress').val(rtnObj.address);
                    $(obj.contentWindow.document).find('#mailAddr').val(rtnObj.address);
                    //置入读卡数据
                    addCust.cardInfo.image = rtnObj.identityPic;
                    addCust.cardInfo.name = rtnObj.name;
                    addCust.cardInfo.sex = rtnObj.cust_sex;
                    addCust.cardInfo.nation = rtnObj.nation;
                    addCust.cardInfo.born = rtnObj.cust_birth;
                    addCust.cardInfo.address = rtnObj.address;
                    addCust.cardInfo.police = rtnObj.issuedauthority;
                    addCust.cardInfo.num = rtnObj.cardNo;
                    addCust.cardInfo.image = rtnObj.identityPic;
                    $(obj.contentWindow.document).find('#txtCustName').blur();
                    $(obj.contentWindow.document).find('#txtIdentify').blur();
                    $(obj.contentWindow.document).find('#custMailAddress').blur();
                    $(obj.contentWindow.document).find('#mailAddr').blur();
                    //saveLog.saveScanIdentityLog("新增修改客户",1,1);
                    saveLog.saveSDScanIdentityLog(
                        rtnObj.name,
                        rtnObj.cardNo,
                        rtnObj.address,
                        rtnObj.identityPic,
                        rtnObj.cust_sex,
                        rtnObj.nation,
                        rtnObj.cust_birth,
                        rtnObj.issuedauthority,
                        rtnObj.validdateStart,
                        rtnObj.validdateEnd,
                        '1'
                    );
                    saveLog.saveLogCheckGzt(
                        rtnObj.name,
                        rtnObj.cardNo,
                        rtnObj.address,
                        rtnObj.identityPic,
                        rtnObj.cust_sex,
                        rtnObj.nation,
                        rtnObj.cust_birth,
                        rtnObj.issuedauthority,
                        rtnObj.validdateStart,
                        rtnObj.validdateEnd,
                        '1'
                    );
                    //给客户照片对象赋值
                    if (addCust && addCust.cardInfo.image && addCust.cardInfo.image != '') {
                        $(obj.contentWindow.document).find('#custIdentifyImg').attr('src', 'data:image/png;base64,' + addCust.cardInfo.image);
                    }
                } else {
                    $(obj.contentWindow.document).find('#txtCustName').val('');
                    $(obj.contentWindow.document).find('#txtIdentify').val('');
                    $(obj.contentWindow.document).find('#custMailAddress').val('');
                    $(obj.contentWindow.document).find('#mailAddr').val('');
                }
                $(obj.contentWindow.document).find('#txtCustName').attr('readonly', 'readonly');
                $(obj.contentWindow.document).find('#txtIdentify').attr('readonly', 'readonly');
                $(obj.contentWindow.document).find('#custMailAddress').attr('readonly', 'readonly');
                $('#btnValidate').hide();
                addCust.qryType = 2;
            });
        } else if (e.target.className == 'head') {
            if (document.getElementById('iframe').contentWindow.document.getElementById('boManagerAttrs_operator')) {
                document
                    .getElementById('iframe')
                    .contentWindow.document.getElementById('boManagerAttrs_operator')
                    .removeAttribute('readonly');
            }
            if (document.getElementById('iframe').contentWindow.document.getElementById('boManagerAttrs_operatorCard')) {
                document
                    .getElementById('iframe')
                    .contentWindow.document.getElementById('boManagerAttrs_operatorCard')
                    .removeAttribute('readonly');
            }
            if (document.getElementById('iframe').contentWindow.document.getElementById('boManagerAttrs_operatorAddr')) {
                document
                    .getElementById('iframe')
                    .contentWindow.document.getElementById('boManagerAttrs_operatorAddr')
                    .removeAttribute('readonly');
            }
            if (document.getElementById('iframe').contentWindow.document.getElementById('agentManInput')) {
                document
                    .getElementById('iframe')
                    .contentWindow.document.getElementById('agentManInput')
                    .removeAttribute('readonly');
            }
            if (document.getElementById('iframe').contentWindow.document.getElementById('agentManIdentityInput')) {
                document
                    .getElementById('iframe')
                    .contentWindow.document.getElementById('agentManIdentityInput')
                    .removeAttribute('readonly');
            }
            if (document.getElementById('iframe').contentWindow.document.getElementById('agentManAddressInput')) {
                document
                    .getElementById('iframe')
                    .contentWindow.document.getElementById('agentManAddressInput')
                    .removeAttribute('readonly');
            }
        }
    });
    document.getElementById('btnQuery').addEventListener('click', function() {
        setTimeout(function() {
            document.getElementById('btnVerify').style.display = '';
        }, 1000);
    });

    function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Rand * Range).toFixed(6);
    }
})();
