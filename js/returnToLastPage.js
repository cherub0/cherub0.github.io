jQuery(document).ready(function(){jQuery(".progress-wrap").hasClass("active-progress")?jQuery(".return-to-last-progress-wrap").css("bottom","100px"):jQuery(".return-to-last-progress-wrap").css("bottom","45px"),jQuery(".return-to-last-progress-wrap").addClass("active-progress"),jQuery(".return-to-last-progress-wrap").on("click",function(r){return r.preventDefault(),window.history.back(),!1})});