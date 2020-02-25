function homeLeave() {
    
    if($('body').width() <= 800){
              return new Promise(resolve => {
                TweenMax.to('.navLink', 2, { css:{color:"#FFFFFF"}});
                TweenMax.to('#projectContainer', 2, { marginLeft: '2200px', ease: Power4.easeInOut});
                TweenMax.to('#face69', 2, { bottom: '0', opacity: 0, ease: Power4.easeInOut});
                TweenMax.to('#bigName', 2, { marginLeft: '-100vw', ease: Power4.easeInOut, onComplete: resolve });
              });
        } else if($('body').width() >= 800){
              return new Promise(resolve => {
                TweenMax.to('.navLink', 2, { css:{color:"#FFFFFF"}});
                TweenMax.to('#projectContainer', 2, { marginLeft: '-2200px', ease: Power4.easeInOut});
                TweenMax.to('#bigName', 2, { marginLeft: '60vw', ease: Power4.easeInOut});
                TweenMax.to('.button', 2, { right: '-70vw', ease: Power4.easeInOut});
                TweenMax.to('.button02', 2, { right: '-70vw', ease: Power4.easeInOut});
                TweenMax.to('#leftBG', 2, { width: '100vw', ease: Power4.easeInOut, onComplete: resolve });
                TweenMax.to('#leftBG', 2, { width: '100vw', ease: Power4.easeInOut, onComplete: resolve });
              });
        }
}

function projectEnter() {
    
    if($('body').width() <= 800){
        return new Promise(resolve => {
            TweenMax.from('#projectPageTitle', 1.8, { opacity: 0, marginTop: '5vh', ease: Power4.easeInOut });
            TweenMax.set('body', { background: '#000000', ease: Power4.easeInOut });
            TweenMax.from('#projectTransitioner', 2, { opacity: 0, marginTop: '5vh', ease: Power4.easeInOut, onComplete: resolve });
            //TweenMax.from('#projectText', 2.2, { opacity: 0, marginTop: '10vh', ease: Power4.easeInOut, onComplete: resolve });
        });
    } else if($('body').width() >= 800){
        return new Promise(resolve => {
            TweenMax.to('body', .5, { css:{background:"#000000"}});
            TweenMax.from('#projectTransitioner', 2, { opacity: 0, marginTop: '5vh', ease: Power4.easeInOut, onComplete: resolve });
            //TweenMax.from('#projectText', 2.2, { opacity: 0, marginTop: '10vh', ease: Power4.easeInOut, onComplete: resolve });
        });
    }
}

function homeLeave02() {
    
    if($('body').width() <= 800){
        return new Promise(resolve => {
            TweenMax.to('.navLink', 2, { css:{color:"#FFFFFF"}});
            TweenMax.to('#projectContainer', 2, { marginLeft: '2200px', ease: Power4.easeInOut});
            TweenMax.to('.title', 2.2, { opacity: 0, ease: Power4.easeInOut, onComplete: resolve });
            TweenMax.to('#face69', 2, { bottom: '0', opacity: 0, ease: Power4.easeInOut});
            TweenMax.to('#bigName', 2, { marginLeft: '-100vw', ease: Power4.easeInOut, onComplete: resolve });
        });
    } else if($('body').width() >= 800){
        return new Promise(resolve => {
            TweenMax.to('.navLink', 2, { css:{color:"#FFFFFF"}});
            TweenMax.to('#projectContainer', 2, { marginLeft: '-2200px', ease: Power4.easeInOut});
            TweenMax.to('#bigName', 2, { marginLeft: '60vw', ease: Power4.easeInOut});
            TweenMax.to('.button', 2, { right: '-70vw', ease: Power4.easeInOut});
            TweenMax.to('.button02', 2, { right: '-70vw', ease: Power4.easeInOut});
            TweenMax.to('#leftBG', 2, { width: '100vw', ease: Power4.easeInOut, onComplete: resolve });
            TweenMax.to('.title', 2.2, { opacity: 0, ease: Power4.easeInOut, onComplete: resolve });
        });
    }
}

function aboutEnter() {
  return new Promise(resolve => {
    TweenMax.from('#aboutContent', 2, { opacity: 0, marginTop: '10vh', ease: Power4.easeInOut, onComplete: resolve });
    TweenMax.set('.bgContain', { zIndex: -99999999999999999999999999, onComplete: resolve });
  });
}

function aboutLeave() {
  return new Promise(resolve => {
    TweenMax.to('#aboutContent', 2, { opacity: 0, marginTop: '10vh', ease: Power4.easeInOut, onComplete: resolve });
  });
}

function projectLeave() {
    
    if($('body').width() <= 800){
              return new Promise(resolve => {
                TweenMax.to('#projectPageTitle', 2.2, { opacity: 0, marginTop: '5vh', ease: Power4.easeInOut, onComplete: resolve });
                TweenMax.to('#projectTransitioner', 2, { opacity: 0, marginTop: '5vh', ease: Power4.easeInOut, onComplete: resolve });
                //TweenMax.to('#projectText', 2, { opacity: 0, marginTop: '10vh', ease: Power4.easeInOut, onComplete: resolve });
              });
    } else if($('body').width() >= 800){
              return new Promise(resolve => {
                TweenMax.to('#projectTransitioner', 2, { opacity: 0, marginTop: '5vh', ease: Power4.easeInOut, onComplete: resolve });
                //TweenMax.to('#projectText', 2.2, { opacity: 0, marginTop: '10vh', ease: Power4.easeInOut, onComplete: resolve });
              });
    }
}

function projectLeave02() {
    
    if($('body').width() <= 800){
        return new Promise(resolve => {
            TweenMax.to('#projectImages', 2, { opacity: 0, marginTop: '5vh', ease: Power4.easeInOut, onComplete: resolve });
            TweenMax.to('body', 2, { background: '#000000', ease: Power4.easeInOut, onComplete: resolve });
            TweenMax.to('#projectText', 2.2, { opacity: 0, marginTop: '10vh', ease: Power4.easeInOut, onComplete: resolve });
            TweenMax.to('.title', 1.8, { opacity: 0, marginTop: '5vh', ease: Power4.easeInOut, onComplete: resolve });
        });
    } else if($('body').width() >= 800){
        return new Promise(resolve => {
            TweenMax.to('#projectImages', 2, { opacity: 0, marginTop: '5vh', ease: Power4.easeInOut, onComplete: resolve });
            TweenMax.to('body', 2, { background: '#000000', ease: Power4.easeInOut, onComplete: resolve });
            TweenMax.to('#projectText', 2.2, { opacity: 0, marginTop: '10vh', ease: Power4.easeInOut, onComplete: resolve });
            TweenMax.to('.title', 2.2, { opacity: 0, ease: Power4.easeInOut, onComplete: resolve });
        });
    }
}

function homeEnter() {
    
    if($('body').width() <= 800){
              return new Promise(resolve => {
                TweenMax.from('#projectContainer', 2, { marginLeft: '1000px', ease: Power4.easeInOut});
                TweenMax.to('.navLink', 2, { css:{color:"white"}});
                TweenMax.to('body', .5, { css:{background:"#FFFFFF"}});
                TweenMax.from('#bigName', 2, { marginLeft: '-60vw', opacity: 0, ease: Power4.easeInOut});
                TweenMax.from('#face69', 2, { bottom: '0', opacity: 0, ease: Power4.easeInOut});
                TweenMax.from('.button', 2, { right: '-70vw', ease: Power4.easeInOut});
                TweenMax.from('.button02', 2, { right: '-70vw', ease: Power4.easeInOut});
                TweenMax.to('#leftBG', 2, { width: '50vw', paddingLeft: '2vw', ease: Power4.easeInOut, onComplete: resolve });
                TweenMax.to('.title', 2.2, { opacity: 1, ease: Power4.easeInOut, onComplete: resolve });
              });
        } else if($('body').width() >= 800){
              return new Promise(resolve => {
                TweenMax.from('#projectContainer', 2, { marginLeft: '-2200px', ease: Power4.easeInOut});
                TweenMax.to('.navLink', 2, { css:{color:"black"}});
                TweenMax.to('body', .5, { css:{background:"#FFFFFF"}});
                TweenMax.from('#bigName', 2, { marginLeft: '60vw', opacity: 0, ease: Power4.easeInOut});
                TweenMax.from('.button', 2, { right: '-70vw', ease: Power4.easeInOut});
                TweenMax.from('.button02', 2, { right: '-70vw', ease: Power4.easeInOut});
                TweenMax.to('#leftBG', 2, { width: '50vw', paddingLeft: '2vw', ease: Power4.easeInOut, onComplete: resolve });
                TweenMax.to('.title', 2.2, { opacity: 1, ease: Power4.easeInOut, onComplete: resolve });
              });
        } 
}

function homeLoad() {
    
    if($('body').width() <= 800){
              return new Promise(resolve => {
                TweenMax.from('#projectContainer', 2, { marginLeft: '1000px', ease: Power4.easeInOut, delay: 1.5});
                TweenMax.from('.navLink', 2, { css:{color:"#000000"}});
                TweenMax.to('body', .5, { css:{background:"#FFFFFF"}});
                TweenMax.from('#bigName', 2, { marginLeft: '-60vw', opacity: 0, ease: Power4.easeInOut});
                TweenMax.from('#fontSuck', 2, { right: '-70vw', ease: Power4.easeInOut});
                TweenMax.from('#face69', 2, { bottom: '0', opacity: 0, ease: Power4.easeInOut});
                TweenMax.to('#leftBG', 2, { width: '50vw', paddingLeft: '2vw', ease: Power4.easeInOut, onComplete: resolve });
                TweenMax.to('.title', 2.2, { opacity: 1, ease: Power4.easeInOut, onComplete: resolve });
              });
        } else if($('body').width() >= 800){
              return new Promise(resolve => {
                TweenMax.from('#projectContainer', 2, { marginLeft: '-2200px', ease: Power4.easeInOut});
                TweenMax.from('.navLink', 2, { css:{color:"#FFFFFF"}, delay: 1});
                TweenMax.to('body', .5, { css:{background:"#FFFFFF"}});
                TweenMax.from('#bigName', 2, { marginLeft: '60vw', opacity: 0, ease: Power4.easeInOut});
                TweenMax.from('.button', 2, { right: '-70vw', ease: Power4.easeInOut});
                TweenMax.from('.button02', 2, { right: '-70vw', ease: Power4.easeInOut});
                TweenMax.from('#leftBG', 2, { width: '0vw', paddingLeft: '0vw', ease: Power4.easeInOut, onComplete: resolve });
                TweenMax.to('.title', 2.2, { opacity: 1, ease: Power4.easeInOut, onComplete: resolve });
              });
        } 
}

$(document).ready(function(){
    
    barba.init({
  transitions: [{
    name: 'homeOut',
    sync: true,
    from: { namespace: 'home' },
    to: { namespace: 'project' },
      
    beforeLeave(data) {
        data.next.container.style.display = 'none';
    },     
      
    leave: ({ data }) => homeLeave(),
    // Same as above but we get destructured `next` directly from `data`
    
    afterLeave(data) {
        data.current.container.style.display = 'none';
        data.next.container.style.display = 'block';
    },   
      
    afterEnter: ({ next }) => projectEnter(), 

  },                              
                
  { 
    name: 'projectOut',
    sync: true,
    from: { namespace: 'project' },
    to: { namespace: 'home' },
      
    beforeLeave(data) {
        data.next.container.style.display = 'none';
    },  
      
    leave: ({ data }) => projectLeave(),
    // Same as above but we get destructured `next` directly from `data`
    
    afterLeave(data) {
        data.current.container.style.display = 'none';
        data.next.container.style.display = 'block';
    },  
      
    beforeEnter(next){
        
    },
      
    afterEnter: ({ next }) => homeEnter(),
  },
                
  { 
    name: 'homeToAbout',
    sync: true,
    from: { namespace: 'home' },
    to: { namespace: 'about' },
      
    beforeLeave(data) {
        data.next.container.style.display = 'none';
    },
      
    leave: ({ data }) => homeLeave02(),
    // Same as above but we get destructured `next` directly from `data`
    
    afterLeave(data) {
        data.current.container.style.display = 'none';
        data.next.container.style.display = 'block';
    },  
      
    afterEnter: ({ next }) => aboutEnter(),
  },
                
  { 
    name: 'aboutOut',
    sync: true,
    from: { namespace: 'about' },
    to: { namespace: 'home' },
      
    beforeLeave(data) {
        data.next.container.style.display = 'none';
    },  
      
    leave: ({ data }) => aboutLeave(),
    // Same as above but we get destructured `next` directly from `data`
    
    afterLeave(data) {
        data.current.container.style.display = 'none';
        data.next.container.style.display = 'block';
    },  
      
      
    afterEnter: ({ next }) => homeEnter(),
  },
                
  { 
    name: 'projectToAbout',
    sync: true,
    from: { namespace: 'project' },
    to: { namespace: 'about' },
      
    beforeLeave(data) {
        data.next.container.style.display = 'none';
    },  
      
    leave: ({ data }) => projectLeave02(),
    // Same as above but we get destructured `next` directly from `data`
    
    afterLeave(data) {
        data.current.container.style.display = 'none';
        data.next.container.style.display = 'block';
    },  
      
      
    afterEnter: ({ next }) => aboutEnter(),
  },
                
  { 
    name: 'projectToProject',
    sync: true,
    from: { namespace: 'project' },
    to: { namespace: 'project' },
      
    beforeLeave(data) {
       // data.next.container.style.display = 'none';
    },
      
    leave: ({ data }) => projectLeave(),
    // Same as above but we get destructured `next` directly from `data`
    
    afterLeave(data) {
        data.current.container.style.display = 'none';
    },  
      
      
    afterEnter: ({ next }) => projectEnterAlt(),
  },
                
  { 
    name: 'homeLoad',
    sync: true,
    to: { namespace: 'home' },
      
    beforeAppear(data) {
        data.current.container.style.display = 'none';
    },
      
    appear(data) {
        data.current.container.style.display = 'block';
    },
      
    once: ({ data }) => homeLoad(),
      
  },
               
  ],
});
    
});




barba.hooks.before(data => {
  // this hook will be called after each transitions
        $(document).ready(function(){
            
            $("#fontSuck").click(function(){
                
                 if($('body').css('font-family') == "acumin-pro")
                 {
                    $('body').css('font-family','Comic Sans MS');
                    $(this).html('Is this what you wanted?');
                 }
                 else
                 {
                    $('body').css('font-family','acumin-pro');
                    $(this).html('This font sucks.');
                 }
            });
            
	        $( "#pr01" ).hover(function() {
                $( ".thingTitle" ).html('GMessage');
                $( "#face02" ).hide();
                $( "#bigNameSwitch" ).html('Noah<br> Semus<br> is a<br> youtuber<br> without<br> a youtube<br> channel.');
                $('body').css('background', 'aquamarine')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                    $( "#face02" ).show();
                    $( "#bigNameSwitch" ).html('Noah<br> Semus<br> is a<br> designer<br> who<br> designs<br> things');
                }
            );
            
            $( "#pr10" ).hover(function() {
                $( ".thingTitle" ).html('ACIT');
                $( "#face02" ).hide();
                $( "#bigNameSwitch" ).html('Noah<br> Semus<br> is a<br>pretty<br> okay<br> guy<br> I guess?');
                $('body').css('background', '#FF2D68')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                    $( "#face02" ).show();
                    $( "#bigNameSwitch" ).html('Noah<br> Semus<br> is a<br> designer<br> who<br> designs<br> things');
                }
            );
            
            $( "#pr02" ).hover(function() {
                $( ".thingTitle" ).html('EFE');
                $( "#face02" ).hide();
                $( "#bigNameSwitch" ).html('Noah<br> Semus<br> is a<br>big<br> pretentious<br> poopy<br> head!');
                $('body').css('background', 'orange')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                    $( "#face02" ).show();
                    $( "#bigNameSwitch" ).html('Noah<br> Semus<br> is a<br> designer<br> who<br> designs<br> things');
                }
            );
            
            $( "#pr03" ).hover(function() {
                $( ".thingTitle" ).html('Prattler');
                $( "#face02" ).hide();
                $( "#bigNameSwitch" ).html('Noah<br> Semus<br> is a<br> sort of<br> huge<br> film<br> snob.');
                $('body').css('background', 'dodgerblue')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                    $( "#face02" ).show();
                    $( "#bigNameSwitch" ).html('Noah<br> Semus<br> is a<br> designer<br> who<br> designs<br> things');
                }
            );
            
            $( "#pr04" ).hover(function() {
                $( ".thingTitle" ).html('Fun Stuff :>)');
                $( "#face02" ).hide();
                $( "#bigNameSwitch" ).html('Noah<br> Semus<br> is a<br>human<br> man<br> without<br> knees!');
                $('body').css('background', 'springgreen')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                    $( "#face02" ).show();
                    $( "#bigNameSwitch" ).html('Noah<br> Semus<br> is a<br> designer<br> who<br> designs<br> things');
                }
            );
            
            $( "#pr05" ).hover(function() {
                $( ".thingTitle" ).html('Print');
                $( "#face02" ).hide();
                $( "#bigNameSwitch" ).html('Noah<br> Semus<br> is a<br> vessel<br> for the <br> story<br>????');
                $('body').css('background', 'fuchsia')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                    $( "#face02" ).show();
                    $( "#bigNameSwitch" ).html('Noah<br> Semus<br> is a<br> designer<br> who<br> designs<br> things');
                }
            );
            
            $( "#pr06" ).hover(function() {
                $( ".thingTitle" ).html('Columbia');
                $('body').css('background', 'red')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                }
            );
            
            $( "#pr07" ).hover(function() {
                $( ".thingTitle" ).html('Omniscience');
                $('body').css('background', 'mediumslateblue')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                }
            );
            
            $( "#pr08" ).hover(function() {
                $( ".thingTitle" ).html('Poster Series');
                $('body').css('background', 'cyan')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                }
            );
            
            $( "#pr09" ).hover(function() {
                $( ".thingTitle" ).html('Crane Selects');
                $('body').css('background', 'sandybrown')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                }
            );
            
            $( ".thingTitle" ).html('Things');
            
            // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
            let vh = window.innerHeight * 0.01;
            // Then we set the value in the --vh custom property to the root of the document
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            
            // We listen to the resize event
            window.addEventListener('resize', () => {
              // We execute the same script as before
              let vh = window.innerHeight * 0.01;
              document.documentElement.style.setProperty('--vh', `${vh}px`);
            });

            
            
            class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
                

              transformDelta(delta, fromEvent) {
                if (!/wheel/.test(fromEvent.type)) {
                  return delta;
                }

                // @see: https://github.com/idiotWu/smooth-scrollbar/issues/181

                const { x, y } = delta; 

                return {
                  y: 0,
                  x: Math.abs(x) > Math.abs(y) ? x : y,
                  // x: Math.sign(x || y) * Math.sqrt(x*x + y*y),
                };
              }
            }
            
            HorizontalScrollPlugin.pluginName = 'horizontalScroll';

            Scrollbar.use(HorizontalScrollPlugin /* you forgot this */);

            // the following is forked from https://codepen.io/supah/pen/vvNmOr

            /*--------------------
            Wheel Option
            -------------------*/
            
            
            let option = {
              x: 0,
              speed: 1.5,
              limit: 2,
              time: 0.3,
            };

            Scrollbar.init(document.querySelector('#leftPage'), {
              plugins: {
                horizontalScroll: true,
              },
            });

           
            
           /* Scrollbar.init(document.querySelector('#projectContentContain'), {
              plugins: {
                horizontalScroll: false,
              },
            });
    
            Scrollbar.init(document.querySelector('#projectImagesContain'), {
              plugins: {
                horizontalScroll: false,
              },
            });
      
            */
            
            $('#cover').hide();
            
        });
        
        
});