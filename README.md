# AngularJS-touch
Basic directive to resize text size based on the width of the screen. This allows you to create a consistent UI design across all devices. This works on a basis of 0 - 1. 1 being the full screen width size.

You can also override the line-height using the 'line-height' attribute which will set the line height based on the calculated font size. So if you have a screen width of 600px and you set a font size of 0.5 and a line height of 1.5 then you will end up with a font-size of 300px and a line-height of 450px.

How to use:

Copy the script into your project.
Link the script with (using the correct directory structure to your project)
```html
<script type="text/javascript" src="js/directives/dir_percentsize.js"></script>
```

Rename the ``app.directive('percentSize', function() { `` line  to read ``[yourappname].directive...``

Then simply add the  ''percent-size'' attribute to your element as below:

```html
// Sets the text to be 0.3percent of the width
<p percent-size=".3">Some Text</p>

// Sets the text to be the same size as the width
<p percent-size="1">Some Text</p>

// Set the text size to be 0.05 of the width and override the line height to be 1.5% of the font size
<p percent-size=".05" line-height="1.5">Some Text</p>

```


