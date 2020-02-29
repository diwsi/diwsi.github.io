class StyleSlider {

    static Init(opt) {
        //controller elements
        var controllers = document.querySelectorAll(".StyleSlider");
        
        controllers.forEach(cnt => {
            //target elements
            var targets = document.querySelectorAll(getProp("target", cnt));
            
            //parse style binder
            var styleProps = getProp("style", cnt).split(":");

            //event 
            cnt.addEventListener(getProp("event", cnt, "input"), event => {

                targets.forEach(target => {
                    //change style""    "
                    target.style[styleProps[0]] = styleProps[1].replace("#", cnt.value);
                })
            });
        });

        ///hepler function to get data- properties
        function getProp(set, cnt, defaultVal) {
            var p = cnt.dataset[set];
            if (p == null) {
                if (!defaultVal) {
                    console.error("Missing attribute: data-" + set);
                } else {
                    return defaultVal;
                }
            }
            return p.trim();
        }
    }
}