custnum.onclick = function(){iframe.contentWindow.document.querySelector('iframe').contentWindow.txtIdentify.disabled = false;iframe.contentWindow.document.querySelector('iframe').contentWindow.flagDate = true};
document.querySelector('body').addEventListener('click',function(e){if(e.target.className=='window_bg'){$('#camera iframe').each(function(index,obj){$(obj.contentWindow.document).find('#file').show()});$('#addrDialog iframe').each(function(index,obj){$(obj.contentWindow.document).find('#txtIdentify').attr('disabled','false')});}});