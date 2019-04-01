(function($){
    // truncate text plugin by magnusthemes - custom build
    $.fn.trnc = function(){
        return this.each(function(){
            var $this = $(this);
            var postLength = $.trim($this.text()).split(" ").length;
            var postHeight = $this.innerHeight();
            var overflowClass = "cut",
                buttonClass = "read_more",
                text = "Continue reading...";
            if (postLength >= 800 || postHeight >= 600){
                var slicePara = $this.find(".tumblr_parent").first().children().slice(0,6);
                $this.find(".tumblr_parent").slice(1).remove();
                $this.find(".tumblr_parent").children().remove();
                $this.find(".tumblr_parent").append(slicePara);
                $this.css({"overflow":"hidden","max-height":"400px"});
                var newP = document.createElement("p");
                newP.classList = overflowClass;
                var newB = document.createElement("a");
                newB.classList = buttonClass;
                newB.innerHTML = text;
                newB.href="#";
                newP.appendChild(newB);
                $this.find(".tumblr_parent").append(newP);
                var permaLink = $this.parents(".posts").find("a.plink").attr("href");
                $this.find("p:not(.rm)").children(".read_more").attr("href", permaLink);
            };
        });
    }
}(jQuery));
