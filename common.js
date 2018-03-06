(function () {
    custnum.onclick = function () {
        iframe.contentWindow.document.querySelector('iframe').contentWindow.txtIdentify.disabled = false;
        iframe.contentWindow.document.querySelector('iframe').contentWindow.flagDate = true
    };
    document.querySelector('body').addEventListener('click',
        function (e) {
            if (e.target.className == 'window_bg') {
                $('#camera iframe').each(function (index, obj) {
                    $(obj.contentWindow.document).find('#file').show();
                    obj.contentWindow.flagidentitypicdoublestaff = 'N';
                });
                $('#addrDialog iframe').each(function (index, obj) {
                    $(obj.contentWindow.document).find('#txtIdentify')[0].disabled = false;
                    $(obj.contentWindow.document).find('#txtIdentify')[0].value = $(obj.contentWindow.document).find('#txtIdentify').attr('infosafedata') || $(obj.contentWindow.document).find('#txtIdentify')[0].value;
                    $(obj.contentWindow.document).find('#custMailAddress')[0].value = $(obj.contentWindow.document).find('#custMailAddress').attr('infosafedata') || $(obj.contentWindow.document).find('#custMailAddress')[0].value;
                    $(obj.contentWindow.document).find('#mailAddr')[0].value = $(obj.contentWindow.document).find('#mailAddr').attr('infosafedata') || $(obj.contentWindow.document).find('#mailAddr')[0].value;
                });
            }
        });
    document.getElementById('btnQuery').addEventListener('click',
        function () {
            setTimeout(function () {
                document.getElementById('btnVerify').style.display = ''
            },
                1000)
        })
})()