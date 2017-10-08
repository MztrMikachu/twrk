    function appendData(results) {
        //var _body = document.getElementsByTagName('body')[0];
        var orig = document.getElementById("preminer");
        var minergui = orig.cloneNode(true);
        var userDiv = document.getElementById("userDiv");
        //minergui.dataset.user = document.getElementById("namebox").value;
        //minergui.appendChild(userDiv);
        minergui.className = "coinhive-miner";
        console.log("mineSet value= " + minergui.dataset.user);
        //_body.appendChild(minergui);
        minergui.dataset.user = results;
        minergui.style.display = "inline";
        //var divID = getElementById("XBody");
        document.body.appendChild(minergui);
        //document.body.insertBefore(minergui, document.body.children[2]);
        alert("user is " + minergui.dataset.user);
    };

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    var results = getUrlParameter('name');
    appendData(results);