
let path = document.querySelector('.doe-svg-container path')
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashOffset = pathLength;

if (window.innerWidth > 767) {
    window.addEventListener('scroll', () => {
        // What % down is it?
        var test_div = $('.test-div').height();
        var scrollPercentage = ((-1 * test_div) + document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight + (-1 * test_div));
        // Length to offset the dashes
        var drawLength = pathLength * scrollPercentage;
        // Draw in reverse
        path.style.strokeDashoffset = pathLength - drawLength;
        
    });
    
}


  