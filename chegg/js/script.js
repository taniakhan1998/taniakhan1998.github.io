
// particles canvas

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Nav collapse

$('.navbar-collapse a').click(function (e) {
        $('.navbar-collapse').collapse('hide');
      });


//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(function(){
  $(".element").typed({
    strings: ["Welcome to Chegg Answers Viewer Tool", "Enter your Chegg Question URL"],
    typeSpeed: 10,
    startDelay: 4,
  });
});

$("[name='my-checkbox']").bootstrapSwitch();

// console
               
    $("#start").click(function(){
             divValue= $('#email').val();
             $('#error').text('');
             var link = new RegExp('');
              if (link.test(divValue)) {
           
            $("#modal-consol").modal('show');
            $("#container").shuffleLetters({
           text:" <span class='text-primary'>Performing server authentication:</span> connect_to_Chegg_server(332FS2) <br>"
           + "<span class='text-succes'>Successful:</span> Authenticated secure server connection.  <br>" 
           + "<span class='text-primary'>Import:</span> AES_256_Keys();</span>  <br>" 
           + "<span class='text-primary'>Import:</span> Open_SSL_Encryption();  <br>"
           + "<span class='text-feild'>Import:</span> Server_332FS2_Keychain();  <br>"
           + "<span class='text-primary'>Import:</span> Server_342FS2_Keychain();  <br>"
           + "<span class='text-feild'>Chegg URL:</span> "+divValue+" <br>"
           + "<span class='text-succes'>Response:</span> All scripts were imported successfully. <br>"
           + "<span class='text-feild'>Retrieving form input information:</span> kernel.forms.obtain_device_information(); <br>"
           + "<span class='text-primary'>Response:</span> Obtained phone_internal information. <br>"
           + "<span class='text-primary'>Injecting the information securely into encryption server:</span> kernel.track.start_process(); <br>"
		   + "<span class='text-succes'>Get Hashes:</span> Getting hashes from servers. <br>"
           + "<span class='text-succes'>Encrypted Information:</span> 608c4a1b463ec35ad0354c1edd5ae9 <br>"
           + "<span class='text-succes'>Response:</span> Successfully injected into PRS servers. <br>"
		   + "<span class='text-succes'>Final Step:</span> Closing connections from servers. <br>"
           + "<span class='text-primary'>Initiating redirect procedure.</span> <br>"
            ,
            "fps"        : 60,   
            callback: function () { 
              window.location.href = "https://omnioffers.com/1690341";
            }
      });
            
             }
         
          
           else{
                $('#error').text('Insert username');           
           }
        });
   

