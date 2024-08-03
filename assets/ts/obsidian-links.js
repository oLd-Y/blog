document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.content, .list').forEach((item) => {
        let _innerHtml = item.innerHTML;

        if (_innerHtml.indexOf('[[') > -1) {
            let _re = /!\[\[(([\/\-\.\*\$\&]|\w|\s|[^\x00-\xff])*\.\w+)\s*\|?\s*(\d*)\]\]/g;
            let _str = _innerHtml.replace(_re, '<img src="/$1" alt="$1" width="$3" />');

            let _reLink = /\[\[(([\/\-\.\*\$\:\#]|\w|\s|[^\x00-\xff])*)\|?(([\/\-\.\*\$]|\w|\s|[^\x00-\xff])*)\]\]/g;
            let _strLink = _str.replace(_reLink, (val) => {
                val = val.replace(/[\[\]]/g, '')
                let _arr = val.split(/\s*\|\s*/)
                let _relLink = _arr[0]
                let _desc = _arr[1] ? _arr[1] : _arr[0]

                let _idx = _desc.indexOf('#');
                if (_idx > -1) {
                    if (_idx == 0) {
                        _relLink = location.pathname.slice(1) + _desc;
                    } else {
                        _relLink = _desc.replace('#','/#').replace(/[\.\、]/g, '')
                    }
                }

                return `<a href="/${_relLink.replace(/\s/g, '-').toLowerCase()}">${_desc}</a>`
            });

            item.innerHTML = _strLink;
        }
    });
});
