
let path = document.querySelector('.doe-svg-container path')
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashOffset = pathLength;

if (window.innerWidth > 767) {
    window.addEventListener('scroll', () => {

        // Add div heights above the section
        var section_above = $('section.above--svg-anim').height();

        // Add div heights below the section
        var section_below = $('section.below--svg-anim').height();

        // What % down is it?
        var scrollPercentage = ((-1 * section_above) + document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight + (-1 * section_above) + (-1 * section_below) + -300);

        // Length to offset the dashes
        var drawLength = pathLength * scrollPercentage;

        // Draw in reverse
        path.style.strokeDashoffset = pathLength - drawLength;
        
    });
    
}


  