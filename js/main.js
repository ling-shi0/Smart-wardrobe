function changeM(obj) {
	var f = obj.files.item(0);
	var freader = new FileReader();
	freader.readAsDataURL(f);
	//在图像加载完成时，进行复制
	freader.onload = function(event) {
		var src = event.target.result;
		$(".pic").attr("src", src);
		var cropper = new Cropper("<img>", {
        aspectRatio: 16 / 9,
        viewMode:1,
        crop: function (e) {
            console.log(e.detail.x);
            console.log(e.detail.y);
            console.log(e.detail.width);
            console.log(e.detail.height);
            console.log(e.detail.rotate);
            console.log(e.detail.scaleX);
            console.log(e.detail.scaleY);
        }
    });
	};
};
