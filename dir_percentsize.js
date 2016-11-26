

app.directive('percentSize', function () {
    return {
        restrict: 'A',
        scope: {
            percentSize:'=',
            lineHeight:'=?'
        },
        link: function ($scope, $elm, $attr) {
            var LOG_TAG = 'DIR_PERCENTSIZE: ';
            var lastUpdated = null;
            var sizePercentage = parseFloat($scope.percentSize);
            var sizeLineHeight = parseFloat($scope.lineHeight);
            
            // Log
            console.log(LOG_TAG + 'Resize Percent Text Directive initialising');
            
            // Check if we have a valid size
            if (sizePercentage !== null && sizePercentage !== undefined && !isNaN(sizePercentage)){
            
                // Get the width of the window
                var _windowWidth = $(window).width();
                    
                // Calculate the font size
                var _fontSize = Math.ceil(_windowWidth * sizePercentage);
             
                // Check to see if we have a valid line height
                if (sizeLineHeight !== null && sizeLineHeight !== undefined && !isNaN(sizeLineHeight)){
                
                    // Setup the css for this object
                    $elm.css({
                        'font-size': _fontSize + 'px',
                        'line-height': Math.ceil(_fontSize * sizeLineHeight) + 'px'
                    });
                
                } else {
                
                    // Setup the css for this object
                    $elm.css({
                        'font-size': _fontSize + 'px',
                        'line-height': 'auto'
                    });
                
                }
                
            } else {
                
                // Invalid resize percent
                console.log(LOG_TAG + 'Ignoring this resize - invalid resize size: ' + sizePercentage);
                
            }
            
        }
    };
});
