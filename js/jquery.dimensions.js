;(function( $) {

	if ($.fn.haveDimensionsChanged) return;
	
	$.fn.haveDimensionsChanged = function(oldDimensions) {
		if (this.length === 0) return false;
		return haveDimensionsChanged(this, oldDimensions);
	};

	function haveDimensionsChanged($ele, oldDimensions) {
        oldDimensions = oldDimensions || $ele.data("dimensions");

        var height = $ele.height();
        var width = $ele.width();
        var ratio = width / height;
        var dimensions = {
            "width": width,
            "height": height,
            "ratio": ratio
        };

        var hasChanged = false;

        if (oldDimensions) {
            if (oldDimensions.ratio != dimensions.ratio) hasChanged = true;
            else if (oldDimensions.height != dimensions.height) hasChanged = true;
        } else {
            hasChanged = true;
        }

        if (!hasChanged) return false;
           
        $ele.data("dimensions", dimensions);

        return true;

    }

    $.fn.getDimensions = function(dynamicRatio) {
		if (this.length === 0) return false;
		return getDimensions(this, dynamicRatio);
	};

    function getDimensions($ele, dynamicRatio) {
        var dimensions;
        if (dynamicRatio === undefined) dynamicRatio = false;
        if (!dynamicRatio) {
            dimensions = $ele.data("dimensions");
            if (dimensions) return dimensions;
        }
        var height;
        var width;
        if ($ele.is("img")) {
            height = $ele[0].height;
            width = $ele[0].width;
        } else {
            height = $ele.height();
            width = $ele.width();
        }
        var ratio = width / height;
        var dimensions = {
            "width": width,
            "height": height,
            "ratio": ratio
        };
        if (!dynamicRatio) {
            $ele.data("dimensions", dimensions);
        }
        return dimensions;
    }

})( jQuery );
